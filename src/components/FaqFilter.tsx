"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export const FAQ_CATEGORIES = [
  { value: "all", label: "All" },
  { value: "info", label: "Info" },
  { value: "features", label: "Features" },
  { value: "privacy", label: "Privacy" },
] as const;

export type FaqCategory = Exclude<(typeof FAQ_CATEGORIES)[number]["value"], "all">;

/**
 * FAQ category pills, styled after the app's FilterChips: 30px pills,
 * 1px brand border, 16 semibold label, 12 apart; the selected one fills
 * brand with a white label. Phones use the app's small chip (14 label,
 * 15 inset, 8 apart): one row from 375px up; narrower screens scroll it. Filtering only toggles visibility: every
 * question stays rendered in the HTML (and in the FAQPage JSON-LD), and
 * CSS in globals.css hides items whose data-faq-category doesn't match
 * the wrapper's data-faq-filter.
 */
export default function FaqFilter({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) {
  const [filter, setFilter] = useState<"all" | FaqCategory>("all");
  const listRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  // On a switch, the questions now showing rise 12px and fade in (the
  // mobile menu's entrance, on the scroll-reveal curve), staggered across
  // the first few. Hidden ones leave instantly, so a switch never waits.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const shown = [...(listRef.current?.children ?? [])].filter(
      (el) => getComputedStyle(el).display !== "none",
    );
    shown.forEach((el, i) => {
      el.animate(
        [
          { opacity: 0, transform: "translateY(12px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 250,
          delay: Math.min(i, 4) * 40,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "backwards",
        },
      );
    });
  }, [filter]);

  return (
    <>
      {/* 34 title -> pills: the app's header-to-first-element gap */}
      <div className="flex flex-col gap-[34px]">
        {title}
        {/* Like the app's FilterChips `bleed`: on the narrowest phones the
            row scrolls sideways to the screen edges instead of wrapping. */}
        <div
          role="group"
          aria-label="Filter questions by category"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {FAQ_CATEGORIES.map((cat) => {
            const selected = cat.value === filter;
            return (
              <button
                key={cat.value}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(cat.value)}
                className={`flex h-[30px] shrink-0 items-center rounded-full border px-[14px] text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-[0.97] sm:px-[19px] sm:text-base md:h-10 md:px-6 md:text-lg ${
                  selected
                    ? "border-transparent bg-brand text-white"
                    : "border-brand bg-white text-brand"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
      <div ref={listRef} data-faq-filter={filter} className="flex flex-col gap-14 lg:gap-20">
        {children}
      </div>
    </>
  );
}
