"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import FaqCard from "@/components/FaqCard";
import FilterSearchHeader from "@/components/FilterSearchHeader";

export type FaqGroup = "info" | "features" | "privacy";

export interface FaqItem {
  category: FaqGroup;
  question: string;
  /** The answer as plain text, for the search. */
  text: string;
  /** The answer as shown. */
  answer: ReactNode;
}

const CATEGORIES: { value: "all" | FaqGroup; label: string }[] = [
  { value: "all", label: "All" },
  { value: "info", label: "Info" },
  { value: "features", label: "Features" },
  { value: "privacy", label: "Privacy" },
];

/**
 * The FAQ page under its title: group pills, the search, and the cards, one
 * across. The pills, the search and the gaps are the Resources page's.
 * Filtering only hides cards: every question and answer stays in the HTML
 * (and in the FAQPage JSON-LD) whatever is picked or typed.
 */
export default function FaqBrowser({ title, items }: { title: ReactNode; items: FaqItem[] }) {
  const [category, setCategory] = useState<"all" | FaqGroup>("all");
  const [query, setQuery] = useState("");
  const list = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  // Every word typed has to be somewhere in the question or the answer.
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const shows = (item: FaqItem) => {
    if (category !== "all" && item.category !== category) return false;
    const text = `${item.question} ${item.text}`.toLowerCase();
    return words.every((word) => text.includes(word));
  };
  const count = items.filter(shows).length;

  // On a group switch the cards now showing rise 12px and fade in.
  // Typing in the search never animates.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const shown = [...(list.current?.children ?? [])].filter(
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
          delay: Math.min(i, 5) * 40,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "backwards",
        },
      );
    });
  }, [category]);

  return (
    <>
      <FilterSearchHeader
        title={title}
        categories={CATEGORIES}
        category={category}
        onCategory={setCategory}
        query={query}
        onQuery={setQuery}
        searchId="faq-search"
        searchLabel="Search questions"
        groupLabel="Filter questions by group"
      />

      {/* One card across, 16 apart like the article FAQ's */}
      <div ref={list} className="mt-10 flex flex-col gap-4 xl:mt-[54px]">
        {items.map((item) => (
          <div key={item.question} className={shows(item) ? "" : "hidden"}>
            <FaqCard question={item.question} heading>
              {item.answer}
            </FaqCard>
          </div>
        ))}
      </div>
      <p
        aria-live="polite"
        className={`mt-10 text-sm leading-6 text-dark/40 md:text-base md:leading-7 xl:text-xl xl:leading-[27px] ${
          count === 0 ? "" : "sr-only"
        }`}
      >
        {count === 0 ? "No questions match." : ""}
      </p>
    </>
  );
}
