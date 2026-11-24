import { PHASE_PRODUCTION_BUILD } from "next/constants";
import { METRICS, TIMES, type BoardKey, type BoardRow, type Boards, type Metric, type Time } from "@/lib/leaderboard";

/* Loads the home page's live leaderboard. It reads the same boards the app's
   Ranking screen reads: one public document per metric and time range, which
   the backend rewrites every few hours. Read only, no sign-in, nothing
   written, and no copy kept beyond the page's own twice-a-day cache. Runs on
   the server only. */

const ROWS = 5;
const REFRESH_SECONDS = 43200;
const BOARDS_URL =
  "https://firestore.googleapis.com/v1/projects/transit-stats/databases/(default)/documents/leaderboards";

/* The app's number formatting (its lib/format and lib/units), so a figure
   here reads exactly as it does on the Ranking screen. */
const KM_TO_MI = 0.621371;

function formatNumber(n: number, decimals: number) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function formatValue(metric: Metric, value: number, miles: number) {
  if (metric === "distance") {
    /* The board's own figure is kilometres; the miles figure sits beside it. */
    return `${formatNumber(miles > 0 ? miles : value * KM_TO_MI, 1)} mi`;
  }
  if (metric === "rides") {
    const rides = Math.round(value);
    return `${formatNumber(rides, 0)} ride${rides === 1 ? "" : "s"}`;
  }
  return value === 0 ? "0 kg" : `${formatNumber(value, 1)} kg`;
}

/* Firestore's REST shape: every value is wrapped in its type. */
type Field = {
  stringValue?: string;
  integerValue?: string;
  doubleValue?: number;
  mapValue?: { fields?: Record<string, Field> };
  arrayValue?: { values?: Field[] };
};

function num(field: Field | undefined) {
  const n = Number(field?.doubleValue ?? field?.integerValue);
  return Number.isFinite(n) ? n : 0;
}

async function loadBoard(time: Time, metric: Metric): Promise<BoardRow[]> {
  const res = await fetch(`${BOARDS_URL}/${time}_${metric}`, {
    next: { revalidate: REFRESH_SECONDS },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`Leaderboard ${time}_${metric}: ${res.status}`);
  const doc: { fields?: Record<string, Field> } = await res.json();
  const entries = doc.fields?.top100?.arrayValue?.values;
  if (!Array.isArray(entries)) throw new Error(`Leaderboard ${time}_${metric}: no rows`);

  return entries.slice(0, ROWS).map((entry, i) => {
    const f = entry.mapValue?.fields ?? {};
    const rank = num(f.rank);
    const photo = f.profilePhotoURL?.stringValue ?? "";
    return {
      rank: rank >= 1 ? rank : i + 1,
      name: f.username?.stringValue || "Unknown",
      photo: /^https:\/\//i.test(photo) ? photo : null,
      value: formatValue(metric, num(f.metricValue), num(f.metricValueMiles)),
    };
  });
}

/* All twelve boards, or null when they cannot be read while the site is
   being built (or in development): the page then leaves the section out.
   Once the site is live a failed refresh throws instead, so the last good
   page stays up until the next try. */
export async function getBoards(): Promise<Boards | null> {
  try {
    const pairs = await Promise.all(
      TIMES.flatMap((time) =>
        METRICS.map(async (metric) => {
          const key: BoardKey = `${time.value}_${metric.value}`;
          return [key, await loadBoard(time.value, metric.value)] as const;
        })
      )
    );
    return Object.fromEntries(pairs) as Boards;
  } catch (error) {
    const building = process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD;
    if (process.env.NODE_ENV === "production" && !building) throw error;
    console.warn("Live leaderboard left out:", error);
    return null;
  }
}
