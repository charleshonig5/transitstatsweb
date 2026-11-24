"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import FilterPill from "@/components/FilterPill";

/**
 * A page's title with its filter pills and search under it (Resources, FAQ).
 *
 * Layout follows the Resources design at desktop: pills 84 under the title
 * with the search icon at the right edge.
 *
 * The search is one piece. From lg up it rests as the design's icon; opened,
 * the icon glides left as a pill the size of the filter pills grows out of
 * it, the icon settles small inside the pill's left end and a cross comes in
 * at the right. Below lg, where the pill row has no room for it, the icon
 * sits beside the title and turns into the cross, and the same field opens
 * as a row of its own, the pills sliding down to make room. Closing the
 * search clears what was typed.
 */
const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

function Cross({ size, className }: { size: number; className: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M9 9L27 27M27 9L9 27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Magnifier() {
  return (
    <Image
      src="/images/resources/search.svg"
      alt=""
      width={28}
      height={28}
      aria-hidden="true"
      unoptimized
    />
  );
}

export default function FilterSearchHeader<T extends string>({
  title,
  categories,
  category,
  onCategory,
  query,
  onQuery,
  searchId,
  searchLabel,
  groupLabel,
}: {
  title: ReactNode;
  categories: { value: T; label: string }[];
  category: T;
  onCategory: (value: T) => void;
  query: string;
  onQuery: (value: string) => void;
  /** The search field's id, unique on the page. */
  searchId: string;
  /** Names the search for screen readers and is its placeholder: "Search articles". */
  searchLabel: string;
  /** Names the pill row for screen readers: "Filter articles by category". */
  groupLabel: string;
}) {
  const [searching, setSearching] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const phoneToggle = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLButtonElement>(null);

  const openSearch = () => {
    // Rendered at once so the field can take focus inside the tap itself,
    // which is what brings a phone's keyboard up.
    flushSync(() => setSearching(true));
    input.current?.focus();
  };
  const closeSearch = () => {
    setSearching(false);
    onQuery("");
    // Back to whichever button opened it at this width.
    (phoneToggle.current?.offsetParent ? phoneToggle : opener).current?.focus();
  };

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 lg:grid-cols-[auto_minmax(0,1fr)]">
      <div className="col-start-1 row-start-1 lg:col-span-2">{title}</div>

      {/* Below lg: the search button beside the title, the design's icon at
          28 in a 36 box for the thumb. It turns into a cross while the field
          is open. */}
      <button
        ref={phoneToggle}
        type="button"
        aria-label={searching ? "Close search" : searchLabel}
        aria-expanded={searching}
        aria-controls={searchId}
        onClick={searching ? closeSearch : openSearch}
        className="relative col-start-2 row-start-1 flex size-9 cursor-pointer items-center justify-center text-brand transition-transform duration-200 active:scale-90 lg:hidden"
      >
        <span
          className={`flex transition-[opacity,scale,rotate] duration-200 ${EASE} ${
            searching ? "scale-50 rotate-90 opacity-0" : ""
          }`}
        >
          <Magnifier />
        </span>
        <Cross
          size={28}
          className={`absolute transition-[opacity,scale,rotate] duration-200 ${EASE} ${
            searching ? "" : "scale-50 -rotate-90 opacity-0"
          }`}
        />
      </button>

      {/* The field. Below lg a row of its own that opens under the title;
          from lg up it sits at the right of the pill row and grows leftward
          out of the icon. */}
      <div
        className={`group relative col-span-2 row-start-2 duration-300 ${EASE} lg:visible lg:col-span-1 lg:col-start-2 lg:mt-[34px] lg:h-[34px] lg:max-w-full lg:justify-self-end lg:opacity-100 xl:mt-[84px] ${
          // Hidden only once it has finished closing, and shown at once on
          // opening so the field can take focus straight away.
          searching
            ? "mt-6 h-10 transition-[height,margin,opacity,width] md:h-[34px] lg:w-[320px]"
            : "invisible mt-0 h-0 opacity-0 transition-[height,margin,opacity,visibility,width] lg:w-7"
        }`}
      >
        <div className="absolute inset-x-0 top-0 h-10 md:h-[34px]">
          {/* The pill: the filter pills' 1px brand line, with the site's
              soft brand glow while the field has the keyboard. */}
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 rounded-full border border-brand bg-white transition-[opacity,box-shadow] duration-200 group-has-[input:focus-visible]:shadow-[0_0_0_3px_rgba(247,117,44,0.2)] motion-reduce:transition-none ${
              searching ? "" : "lg:opacity-0"
            }`}
          />

          {/* The design's icon: the button that opens the search from lg
              up, and the small mark at the field's left end once open. */}
          <button
            ref={opener}
            type="button"
            aria-label={searchLabel}
            aria-expanded={searching}
            aria-controls={searchId}
            tabIndex={searching ? -1 : 0}
            onClick={searching ? () => input.current?.focus() : openSearch}
            className={`absolute left-0 top-1/2 flex size-7 -translate-y-1/2 cursor-pointer items-center justify-center transition-[translate,scale] duration-300 ${EASE} ${
              searching
                ? "translate-x-2 scale-[0.72]"
                : "translate-x-2 scale-[0.72] lg:translate-x-0 lg:scale-100 lg:hover:scale-105 lg:active:scale-90"
            }`}
          >
            <Magnifier />
          </button>

          {/* Held to the pill's right edge so nothing spills past the page
              while the pill is still narrow. */}
          <input
            ref={input}
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") closeSearch();
            }}
            placeholder={searchLabel}
            aria-label={searchLabel}
            autoComplete="off"
            tabIndex={searching ? 0 : -1}
            className={`absolute inset-y-0 right-0 w-full rounded-full bg-transparent pl-[38px] pr-4 text-base font-medium text-dark outline-none transition-opacity placeholder:font-normal placeholder:text-dark/40 motion-reduce:transition-none md:leading-[22px] lg:pr-[38px] [&::-webkit-search-cancel-button]:hidden ${
              searching
                ? "duration-200 lg:delay-100"
                : "duration-100 lg:pointer-events-none lg:opacity-0"
            }`}
          />

          {/* From lg up the cross sits inside the pill's right end. */}
          <button
            type="button"
            aria-label="Close search"
            tabIndex={searching ? 0 : -1}
            onClick={closeSearch}
            className={`absolute right-[5px] top-1/2 hidden size-7 -translate-y-1/2 cursor-pointer items-center justify-center text-brand transition-transform duration-200 hover:scale-105 active:scale-90 lg:flex ${
              searching ? "" : "pointer-events-none"
            }`}
          >
            <Cross
              size={20}
              className={`transition-[opacity,scale,rotate] duration-200 ${EASE} ${
                searching ? "delay-150" : "scale-50 -rotate-90 opacity-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* On the narrowest phones the pill row scrolls sideways to the
          screen edges instead of wrapping. Below lg it slides down while
          the field is open. */}
      <div
        role="group"
        aria-label={groupLabel}
        className={`col-span-2 row-start-3 -mx-5 flex gap-2 overflow-x-auto px-5 transition-[margin] duration-300 ${EASE} [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0 md:gap-3.5 lg:col-span-1 lg:col-start-1 lg:row-start-2 lg:mt-[34px] xl:mt-[84px] [&::-webkit-scrollbar]:hidden ${
          searching ? "mt-3.5" : "mt-[34px]"
        }`}
      >
        {categories.map((cat) => (
          <FilterPill
            key={cat.value}
            selected={cat.value === category}
            onClick={() => onCategory(cat.value)}
          >
            {cat.label}
          </FilterPill>
        ))}
      </div>
    </div>
  );
}
