"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import FilterSearchHeader from "@/components/FilterSearchHeader";
import type { PostCategory } from "@/data/posts";

export interface ResourceItem {
  slug: string;
  title: string;
  description: string;
  imageAlt: string;
  category: PostCategory;
}

const CATEGORIES: { value: "all" | PostCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "guides", label: "Guides" },
  { value: "cta-data", label: "CTA data" },
  { value: "app-data", label: "App data" },
];

/**
 * The Resources page under its title: category pills, the search, and the
 * article grid. Filtering only hides cards: every article stays in the HTML
 * (and in the ItemList JSON-LD) whatever is picked or typed.
 *
 * Layout follows the design at desktop: the grid 54 under the pills, three
 * 364 columns 54 apart, rows 84 apart. The title row, pills and search are
 * FilterSearchHeader, shared with the FAQ page.
 */
export default function ResourcesBrowser({
  title,
  items,
}: {
  title: ReactNode;
  items: ResourceItem[];
}) {
  const [category, setCategory] = useState<"all" | PostCategory>("all");
  const [query, setQuery] = useState("");
  const grid = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  // Every word typed has to be somewhere in the title or the description.
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  const shows = (item: ResourceItem) => {
    if (category !== "all" && item.category !== category) return false;
    const text = `${item.title} ${item.description}`.toLowerCase();
    return words.every((word) => text.includes(word));
  };
  const count = items.filter(shows).length;

  // On a category switch the cards now showing rise 12px and fade in.
  // Typing in the search never animates.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const shown = [...(grid.current?.children ?? [])].filter(
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
        searchId="resources-search"
        searchLabel="Search articles"
        groupLabel="Filter articles by category"
      />

      <div
        ref={grid}
        className="mt-6 grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-10 xl:mt-[54px] xl:grid-cols-3 xl:gap-x-[54px] xl:gap-y-[84px]"
      >
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/${item.slug}`}
            className={`group flex-col gap-6 transition-transform duration-200 active:scale-[0.98] xl:gap-[34px] ${
              shows(item) ? "flex" : "hidden"
            }`}
          >
            <div className="relative aspect-[364/245] w-full overflow-hidden rounded-[34px] bg-dark/5 shadow-[0_0_30px_rgba(0,0,0,0.08)]">
              <Image
                src={`/images/articles/${item.slug}.png`}
                alt={item.imageAlt}
                fill
                className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 motion-reduce:transition-none"
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 364px"
              />
            </div>
            <div className="flex flex-1 flex-col gap-6">
              <div className="flex flex-col gap-3.5">
                <h2 className="text-xl font-bold leading-[27px] text-dark transition-colors duration-200 group-hover:text-brand md:text-[26px] md:leading-[35px] xl:min-h-[70px]">
                  {item.title}
                </h2>
                <p className="line-clamp-3 text-sm leading-6 text-dark md:text-base md:leading-7 xl:text-xl xl:leading-[27px]">
                  {item.description}
                </p>
              </div>
              <span className="mt-auto flex items-center gap-3.5 text-sm text-brand md:text-base xl:text-xl xl:leading-[27px]">
                View article
                <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-[#FEF0EB] transition-transform duration-200 group-hover:translate-x-1">
                  <Image
                    src="/images/resources/chevron.svg"
                    alt=""
                    width={16}
                    height={16}
                    aria-hidden="true"
                    className="translate-x-px"
                    unoptimized
                  />
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
      <p
        aria-live="polite"
        className={`mt-10 text-sm leading-6 text-dark/40 md:text-base md:leading-7 xl:text-xl xl:leading-[27px] ${
          count === 0 ? "" : "sr-only"
        }`}
      >
        {count === 0 ? "No articles match." : ""}
      </p>
    </>
  );
}
