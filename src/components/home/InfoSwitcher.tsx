"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent, type ReactNode } from "react";

export interface InfoItem {
  title: string;
  body: ReactNode;
  image: string;
  alt: string;
  /* How the picture sits in the square card. */
  imageClass: string;
  /* How wide the picture is drawn, so it loads sharp on 2x screens. */
  imageSizes: string;
}

/* The picture swap. Each picture is a card of its own. The new card rises
   into place from half its height below, fading in, in half a second on the
   site's reveal curve (most of the way there in the first fifth of the
   time). The old card lifts a little and fades out in 200 ms, so it is gone
   before the new one settles. */
const CARD_IN =
  "z-10 translate-y-0 opacity-100 transition-[translate,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";
const CARD_OUT =
  "pointer-events-none -translate-y-[12%] opacity-0 transition-[translate,opacity] duration-200 ease-out motion-reduce:transition-none";
const CARD_WAITING = "pointer-events-none translate-y-1/2 opacity-0";

/* Below lg there is no room for topics beside a picture, so the three
   become a row to swipe through: each topic's picture card with its title
   and text close underneath, the next one showing at the right edge. The
   cards are as far apart as the review cards further down the page. Under
   the longest text is a mark per topic: a pill for the one in view, a dot
   for the others. A finger swipes the row as any scrolling row; a mouse
   can drag it the same way. The row runs out to the screen edges (the
   page's 20 or 40 margin is given back as padding). The padding above and
   below the row is room for the cards' shadows, which a scrolling row
   would otherwise cut off (the reviews row does the same). */
function InfoCarousel({ items }: { items: InfoItem[] }) {
  const row = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);

  /* Where the row has to be scrolled for each topic to sit at the margin. */
  const stops = (el: HTMLDivElement) => {
    const margin = parseFloat(getComputedStyle(el).paddingLeft) || 0;
    return Array.from(el.children, (slide) => (slide as HTMLElement).offsetLeft - margin);
  };
  /* The topic nearest the margin when the row is scrolled to `left`. The
     end of the row always counts as the last topic. */
  const topicAt = (el: HTMLDivElement, left: number) => {
    if (left >= el.scrollWidth - el.clientWidth - 2) return items.length - 1;
    const lefts = stops(el);
    let nearest = 0;
    lefts.forEach((stop, i) => {
      if (Math.abs(stop - left) < Math.abs(lefts[nearest] - left)) nearest = i;
    });
    return nearest;
  };
  const onScroll = () => {
    const el = row.current;
    if (el) setShown(topicAt(el, el.scrollLeft));
  };
  const show = (i: number) => {
    const el = row.current;
    if (!el) return;
    el.scrollTo({
      left: stops(el)[i],
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  /* Dragging with a mouse. Touch needs none of this: the row scrolls and
     snaps by itself. While the mouse drags, the row follows it with the
     snapping off; on release it glides to the topic it was dragged towards
     (a short drag of 40 or more still moves one topic on), and the snapping
     comes back once it has arrived. */
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = { x: e.clientX, left: e.currentTarget.scrollLeft, moved: false };
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    const el = row.current;
    if (!d || !el) return;
    const dx = e.clientX - d.x;
    if (!d.moved) {
      if (Math.abs(dx) < 4) return;
      d.moved = true;
      el.setPointerCapture(e.pointerId);
      el.style.scrollSnapType = "none";
      el.style.userSelect = "none";
      window.getSelection()?.removeAllRanges();
    }
    el.scrollLeft = d.left - dx;
  };
  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    const el = row.current;
    drag.current = null;
    if (!d || !d.moved || !el) return;
    el.style.userSelect = "";
    const dx = e.clientX - d.x;
    const from = topicAt(el, d.left);
    let to = topicAt(el, el.scrollLeft);
    if (to === from && Math.abs(dx) >= 40) {
      to = Math.min(Math.max(from + (dx < 0 ? 1 : -1), 0), items.length - 1);
    }
    const snapAgain = () => {
      window.clearTimeout(fallback);
      el.removeEventListener("scrollend", snapAgain);
      if (!drag.current?.moved) el.style.scrollSnapType = "";
    };
    const fallback = window.setTimeout(snapAgain, 1000);
    el.addEventListener("scrollend", snapAgain);
    show(to);
  };

  return (
    <div className="lg:hidden">
      <div
        ref={row}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        /* The empty block after the last topic is the room the row needs to
           bring that topic to the left margin like the others: the row's
           width less one slide (86%, at most 580) and the 44 gap before it. */
        className="relative -mx-5 -my-[30px] flex snap-x snap-mandatory scroll-px-5 gap-11 overflow-x-auto px-5 py-[30px] [scrollbar-width:none] after:block after:w-[calc(max(14%,100%_-_580px)_-_44px)] after:shrink-0 after:content-[''] md:-mx-10 md:scroll-px-10 md:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <article key={item.title} className="flex w-[86%] max-w-[580px] shrink-0 snap-start flex-col gap-6">
            <div className="relative isolate aspect-square overflow-hidden rounded-[44px] bg-[#f2f2f2] shadow-[0_0_30px_rgba(0,0,0,0.08)]">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes={item.imageSizes}
                loading="eager"
                draggable={false}
                className={item.imageClass}
              />
            </div>
            <div className="flex flex-col gap-3.5">
              <h3 className="text-xl font-bold leading-tight text-dark md:text-2xl">{item.title}</h3>
              <p className="text-sm leading-6 text-dark md:text-base md:leading-7">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="relative mt-4 -mb-2 -ml-1.5 flex">
        {items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => show(i)}
            aria-label={`Show ${item.title}`}
            aria-current={i === shown ? "true" : undefined}
            className="cursor-pointer px-1.5 py-2 transition-transform duration-200 active:scale-90"
          >
            <span
              className={`block h-2.5 rounded-full transition-[width,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                i === shown ? "w-7 bg-brand" : "w-2.5 bg-dark/20"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/* From lg up: three short topics beside one picture. Picking a topic (its
   title, or anywhere on its text) lights it up and swaps the picture; the
   other two stay readable but dimmed, and pointing at one of them shows the
   arrow it will get. The pictures are cards stacked in one spot: the new
   one comes up from below as the old one leaves. A card that has left goes
   back to wait below, so every swap runs the same way, and a quick second
   pick carries on from wherever the cards are. Below lg the topics are a
   row to swipe through instead (InfoCarousel above). */
export default function InfoSwitcher({ items }: { items: InfoItem[] }) {
  /* `leaving` holds the cards on their way out. */
  const [{ active, leaving }, setShown] = useState<{ active: number; leaving: number[] }>({
    active: 0,
    leaving: [],
  });
  const pick = (i: number) =>
    setShown((shown) =>
      shown.active === i ? shown : { active: i, leaving: [...shown.leaving.filter((l) => l !== i), shown.active] }
    );
  /* A card has finished leaving: put it back below, out of sight. */
  const parked = (i: number) =>
    setShown((shown) =>
      shown.leaving.includes(i) ? { ...shown, leaving: shown.leaving.filter((l) => l !== i) } : shown
    );

  return (
    <>
    <InfoCarousel items={items} />
    <div className="hidden grid-cols-[520fr_580fr] items-center gap-14 lg:grid xl:gap-25">
      <div className="flex flex-col gap-11">
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <article
              key={item.title}
              onClick={() => pick(i)}
              className={`group flex cursor-pointer flex-col gap-3.5 transition-opacity duration-200 ${
                isActive ? "" : "opacity-30 hover:opacity-60 has-[:focus-visible]:opacity-60"
              }`}
            >
              <h3 className="-mb-px text-[26px] font-bold leading-[36px] text-dark">
                <button
                  type="button"
                  aria-pressed={isActive}
                  className="flex cursor-pointer items-center gap-3.5 text-left"
                >
                  {item.title}
                  <span
                    className={`flex size-7 shrink-0 items-center justify-center rounded-full bg-[#FEF0EB] transition-[opacity,translate] duration-200 ${
                      isActive
                        ? ""
                        : "opacity-0 group-hover:translate-x-1 group-hover:opacity-100 group-has-[:focus-visible]:translate-x-1 group-has-[:focus-visible]:opacity-100"
                    }`}
                  >
                    <Image src="/images/home/chevron.svg" alt="" width={22} height={22} aria-hidden="true" />
                  </span>
                </button>
              </h3>
              <p className="text-xl leading-[27px] text-dark">
                {item.body}
              </p>
            </article>
          );
        })}
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-[580px]">
        {items.map((item, i) => (
          <div
            key={item.image}
            aria-hidden={i !== active}
            onTransitionEnd={(e) => e.target === e.currentTarget && parked(i)}
            className={`absolute inset-0 isolate overflow-hidden rounded-[44px] bg-[#f2f2f2] shadow-[0_0_30px_rgba(0,0,0,0.08)] ${
              i === active ? CARD_IN : leaving.includes(i) ? CARD_OUT : CARD_WAITING
            }`}
          >
            {/* Loaded with the page, so a card never arrives empty. */}
            <Image
              src={item.image}
              alt={i === active ? item.alt : ""}
              fill
              sizes={item.imageSizes}
              loading="eager"
              className={item.imageClass}
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
