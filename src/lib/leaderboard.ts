/* The home page's live leaderboard: what the page and its loader
   (lib/leaderboard-data) share. */

/* The app's own filter values and labels, in the app's order. */
export const METRICS = [
  { value: "distance", label: "Distance" },
  { value: "rides", label: "Rides" },
  { value: "co2", label: "CO₂ saved" },
] as const;

export const TIMES = [
  { value: "all_time", label: "All time" },
  { value: "1w", label: "1 week" },
  { value: "1m", label: "1 month" },
  { value: "1y", label: "1 year" },
] as const;

export type Metric = (typeof METRICS)[number]["value"];
export type Time = (typeof TIMES)[number]["value"];
export type BoardKey = `${Time}_${Metric}`;

/* One row as the page shows it. The rider's id is left behind on purpose:
   the page has no use for it. */
export interface BoardRow {
  rank: number;
  name: string;
  photo: string | null;
  value: string;
}

export type Boards = Record<BoardKey, BoardRow[]>;
