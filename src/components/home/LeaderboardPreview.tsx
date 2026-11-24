"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { METRICS, TIMES, type BoardRow, type Boards, type Metric, type Time } from "@/lib/leaderboard";

interface Option<T extends string> {
  value: T;
  label: string;
}

/* A filter pill with the app's dropdown menu (its Stats and Ranking filter
   menu): a 139 wide white card that pops open flush under the pill and
   lined up with its left edge, nothing dimmed behind it. Picking an option
   applies it at once while the menu closes; picking the one already in
   effect, clicking anywhere else or pressing Escape just closes it. The
   menu is always in the page, switched off while closed, so both the
   opening and the closing animate (150 ms in, 100 ms out, the app's
   timings and curve). */
function FilterDropdown<T extends string>({
  label,
  icon,
  options,
  value,
  onChange,
}: {
  label: string;
  icon: string;
  options: readonly Option<T>[];
  value: T;
  onChange: (value: T) => void;
}) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const pill = useRef<HTMLButtonElement>(null);
  const items = useRef<(HTMLButtonElement | null)[]>([]);
  const menuId = useId();
  const current = options.findIndex((option) => option.value === value);

  useEffect(() => {
    if (!open) return;
    /* Opened: put the keyboard on the option in effect. */
    items.current[Math.max(current, 0)]?.focus({ preventScroll: true });
    const onPointerDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
    // `current` only matters at the moment the menu opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = (returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) pill.current?.focus({ preventScroll: true });
  };

  const onMenuKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const at = items.current.indexOf(document.activeElement as HTMLButtonElement);
    const last = options.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowDown") next = at >= last ? 0 : at + 1;
    else if (e.key === "ArrowUp") next = at <= 0 ? last : at - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else if (e.key === "Escape") {
      e.preventDefault();
      close(true);
      return;
    } else if (e.key === "Tab") {
      setOpen(false);
      return;
    }
    if (next !== null) {
      e.preventDefault();
      items.current[next]?.focus({ preventScroll: true });
    }
  };

  return (
    <div ref={root} className="relative">
      <button
        ref={pill}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${label}: ${options[Math.max(current, 0)].label}`}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-[80px] bg-brand px-3 py-1 text-base font-semibold text-white transition-colors duration-200 hover:bg-brand-dark active:opacity-85 lg:text-xl lg:leading-[27px]"
      >
        <Image src={icon} alt="" width={20} height={20} aria-hidden="true" />
        {options[Math.max(current, 0)].label}
        <Image src="/images/home/lb-updown.svg" alt="" width={16} height={16} aria-hidden="true" />
      </button>

      <div
        id={menuId}
        role="listbox"
        aria-label={label}
        inert={!open}
        onKeyDown={onMenuKeyDown}
        className={`absolute left-0 top-full z-20 w-[139px] origin-top-left rounded-xl bg-white p-4 shadow-[0_2px_4px_rgba(0,0,0,0.14)] transition-[opacity,scale] ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:scale-100 ${
          open ? "scale-100 opacity-100 duration-150" : "pointer-events-none scale-[0.96] opacity-0 duration-100"
        }`}
      >
        {options.map((option, i) => (
          <div key={option.value}>
            {/* The divider takes 20 of height with the hairline in its
                middle, as in the app. */}
            {i > 0 && (
              <div className="flex h-5 items-center" aria-hidden="true">
                <div className="h-px w-full bg-[#D8D5D5]/50" />
              </div>
            )}
            <button
              ref={(el) => {
                items.current[i] = el;
              }}
              type="button"
              role="option"
              aria-selected={option.value === value}
              onClick={() => {
                if (option.value !== value) onChange(option.value);
                close(true);
              }}
              className="block w-full cursor-pointer truncate text-left text-base leading-[22px] text-dark transition-opacity duration-100 hover:opacity-60 active:opacity-60"
            >
              {option.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* A rider's photo in the app's 30 round frame. With no photo, or one that
   will not load, it shows the app's placeholder: a white figure on grey. */
function Avatar({ photo }: { photo: string | null }) {
  const [failed, setFailed] = useState(false);
  return (
    <span className="ml-3 flex size-[30px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#D8D5D5] bg-[#A4A4A4] sm:ml-6">
      {photo && !failed ? (
        /* A plain img: these are riders' own photos on the app's storage,
           already small, and not ours to resize. */
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt=""
          width={30}
          height={30}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          /* A photo that failed before the page woke up fires no error. */
          ref={(img) => {
            if (img?.complete && img.naturalWidth === 0) setFailed(true);
          }}
          className="size-full object-cover"
        />
      ) : (
        <span className="flex size-full items-center justify-center bg-[#D8D5D5]">
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 0 0-16 0" />
          </svg>
        </span>
      )}
    </span>
  );
}

/* The board's motion when a filter changes, with the app's own timings and
   curve (its lib/motion): a rider who stays glides to the new place, one who
   has dropped off lifts out the top, a new one rises in from below. */
const GLIDE_MS = 180;
const RISE_MS = 180;
const LIFT_MS = 100;
const TRAVEL = 8;
const EASE = "cubic-bezier(0.2, 0, 0, 1)";

/* Where a rider who has dropped off the board was, measured from the card,
   so the row can lift out from that spot. */
interface Leaving {
  id: string;
  row: BoardRow;
  top: number;
  left: number;
  width: number;
}

/* The board has no rider ids, so a rider is followed from board to board by
   name. Two riders showing the same name get a count after it. */
function withIds(rows: BoardRow[]) {
  const seen = new Map<string, number>();
  return rows.map((row) => {
    const n = seen.get(row.name) ?? 0;
    seen.set(row.name, n + 1);
    return { id: n === 0 ? row.name : `${row.name}#${n}`, row };
  });
}

function Row({
  row,
  first,
  last,
  leaving,
  contentRef,
}: {
  row: BoardRow;
  first?: boolean;
  last?: boolean;
  leaving?: CSSProperties;
  contentRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    /* The divider is drawn over the row and takes no height, so rows sit
       exactly 40 apart as in the design. It belongs to the place, not the
       rider: when the board changes the lines stay put and only the riders
       move. A rider on the way out is lifted off the list and holds no
       place. */
    <li
      aria-hidden={leaving ? true : undefined}
      style={leaving}
      className={
        leaving
          ? "pointer-events-none absolute"
          : `relative ${first ? "" : "pt-5 before:absolute before:inset-x-0 before:top-0 before:border-t-[0.5px] before:border-[#D8D5D5]"} ${last ? "" : "pb-5"}`
      }
    >
      <div ref={contentRef} className="flex items-center">
        <span className="w-[21px] shrink-0 text-base font-semibold leading-none text-brand">{row.rank}</span>
        <Avatar key={row.photo} photo={row.photo} />
        <span className="ml-3.5 truncate text-sm font-semibold leading-[19px] text-dark">{row.name}</span>
        {row.rank <= 3 && (
          <Image
            src={`/images/home/medal-${row.rank}.svg`}
            alt=""
            /* 18 as on the app's Ranking screen: at the design's 14 the medal
               reads small beside the 30 photo. */
            width={18}
            height={18}
            className="ml-2 shrink-0 sm:ml-4"
            aria-hidden="true"
          />
        )}
        <span className="ml-auto shrink-0 pl-3 text-sm leading-[19px] text-dark sm:pl-4">{row.value}</span>
      </div>
    </li>
  );
}

export default function LeaderboardPreview({
  title,
  body,
  boards,
}: {
  title: string;
  body: ReactNode;
  boards: Boards;
}) {
  const [metric, setMetric] = useState<Metric>("distance");
  const [time, setTime] = useState<Time>("all_time");
  const [leaving, setLeaving] = useState<Leaving[]>([]);
  const rows = withIds(boards[`${time}_${metric}`] ?? []);
  const metricLabel = METRICS.find((m) => m.value === metric)?.label ?? "";
  const timeLabel = TIMES.find((t) => t.value === time)?.label ?? "";

  const card = useRef<HTMLOListElement>(null);
  const contents = useRef(new Map<string, HTMLDivElement>());
  const before = useRef<{
    tops: Map<string, number>;
    fades: Map<string, number>;
    height: number;
    gone: Set<string>;
  } | null>(null);
  const running = useRef<Animation[]>([]);

  /* The first time the filters are reached for, the photos on the other
     boards are fetched, so a rider who rises in arrives with their photo
     instead of the placeholder. */
  const warmed = useRef(false);
  const warm = () => {
    if (warmed.current) return;
    warmed.current = true;
    const photos = new Set(Object.values(boards).flatMap((board) => board.map((row) => row.photo)));
    for (const photo of photos) {
      if (!photo) continue;
      const img = new window.Image();
      img.referrerPolicy = "no-referrer";
      img.src = photo;
    }
  };

  /* A filter was picked. The new board goes up at once; all the motion does
     is carry the riders from where they were to where they now are, so
     where they are is noted first (mid-move included, should a second pick
     come before the first has settled). With Reduce Motion on nothing is
     noted and the board simply changes. */
  const show = (nextTime: Time, nextMetric: Metric) => {
    const el = card.current;
    const gone: Leaving[] = [];
    before.current = null;
    if (el && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const origin = el.getBoundingClientRect();
      const staying = new Set(withIds(boards[`${nextTime}_${nextMetric}`] ?? []).map((r) => r.id));
      const tops = new Map<string, number>();
      const fades = new Map<string, number>();
      for (const { id, row } of rows) {
        const content = contents.current.get(id);
        if (!content) continue;
        const box = content.getBoundingClientRect();
        tops.set(id, box.top - origin.top);
        fades.set(id, Number(getComputedStyle(content).opacity));
        if (!staying.has(id)) {
          gone.push({ id, row, top: box.top - origin.top, left: box.left - origin.left, width: box.width });
        }
      }
      before.current = { tops, fades, height: origin.height, gone: new Set(gone.map((g) => g.id)) };
    }
    setLeaving(gone);
    setTime(nextTime);
    setMetric(nextMetric);
  };

  useLayoutEffect(() => {
    const from = before.current;
    const el = card.current;
    before.current = null;
    if (!from || !el) return;
    for (const animation of running.current) animation.cancel();
    const play = (target: HTMLElement, frames: Keyframe[], duration: number, fill: FillMode = "none") => {
      const animation = target.animate(frames, { duration, easing: EASE, fill });
      running.current.push(animation);
      return animation;
    };
    running.current = [];

    const origin = el.getBoundingClientRect();
    /* A board with fewer riders: the card's height glides with the rows. */
    if (Math.abs(origin.height - from.height) > 0.5) {
      play(el, [{ height: `${from.height}px` }, { height: `${origin.height}px` }], GLIDE_MS);
    }

    let lift: Animation | null = null;
    for (const [id, content] of contents.current) {
      /* A rider still rising in when the next pick came carries on from
         however far in they were. */
      const fade = from.fades.get(id) ?? 1;
      if (from.gone.has(id)) {
        lift = play(
          content,
          [
            { opacity: fade, transform: "none" },
            { opacity: 0, transform: `translateY(${-TRAVEL}px)` },
          ],
          LIFT_MS,
          /* Held at the end, unseen, until the row comes off the page. */
          "forwards"
        );
        continue;
      }
      const top = content.getBoundingClientRect().top - origin.top;
      const was = from.tops.get(id);
      if (was === undefined) {
        play(
          content,
          [
            { opacity: 0, transform: `translateY(${TRAVEL}px)` },
            { opacity: 1, transform: "none" },
          ],
          RISE_MS
        );
      } else if (Math.abs(was - top) > 0.5 || fade < 1) {
        play(
          content,
          [
            { opacity: fade, transform: `translateY(${was - top}px)` },
            { opacity: 1, transform: "none" },
          ],
          GLIDE_MS
        );
      }
    }
    /* Lifted out: the rows that left come off the page. */
    lift?.finished.then(
      () => setLeaving([]),
      /* Cut short by the next pick, which has its own rows to lift out. */
      () => {}
    );
  }, [time, metric]);

  return (
    <div className="flex flex-col gap-10 md:gap-14 lg:grid lg:grid-cols-[522fr_580fr] lg:items-center xl:gap-[98px]">
      <div className="flex flex-col gap-11">
        <div className="flex flex-col gap-3.5">
          <h2 className="text-xl font-bold leading-tight text-dark md:text-2xl lg:-mb-px lg:text-[26px] lg:leading-[36px]">
            {title}
          </h2>
          <p className="text-sm leading-6 text-dark md:text-base md:leading-7 lg:text-xl lg:leading-[27px]">
            {body}
          </p>
        </div>
        <div className="flex flex-wrap gap-3.5" onPointerEnter={warm} onFocus={warm}>
          <FilterDropdown label="Metric" icon="/images/home/lb-metric.svg" options={METRICS} value={metric} onChange={(next) => show(time, next)} />
          <FilterDropdown label="Time" icon="/images/home/lb-clock.svg" options={TIMES} value={time} onChange={(next) => show(next, metric)} />
        </div>
      </div>

      <ol
        ref={card}
        aria-label={`Top riders by ${metricLabel.toLowerCase()}, ${timeLabel.toLowerCase()}`}
        aria-live="polite"
        className="relative mx-auto flex w-full max-w-[580px] flex-col rounded-[44px] bg-white p-6 shadow-[0_0_30px_rgba(0,0,0,0.08)] sm:p-8 md:p-10"
      >
        {rows.map(({ id, row }, i) => (
          <Row
            key={id}
            row={row}
            first={i === 0}
            last={i === rows.length - 1}
            contentRef={(el) => {
              if (el) contents.current.set(id, el);
              else contents.current.delete(id);
            }}
          />
        ))}
        {leaving.map(({ id, row, top, left, width }) => (
          <Row
            key={id}
            row={row}
            leaving={{ top, left, width }}
            contentRef={(el) => {
              if (el) contents.current.set(id, el);
              else contents.current.delete(id);
            }}
          />
        ))}
        {rows.length === 0 && <li className="text-sm text-dark/40">No riders on this board yet.</li>}
      </ol>
    </div>
  );
}
