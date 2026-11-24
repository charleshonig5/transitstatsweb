"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import type { Section } from "@/data/posts";
import AssistantLogo, { type Assistant } from "@/components/AssistantLogo";
import BackToResources from "@/components/BackToResources";

/* A rail jump glides on the site's reveal motion (globals.css
   .scroll-reveal-*): 0.6s on cubic-bezier(0.22, 1, 0.36, 1), which is this
   ease-out curve. */
const JUMP_MS = 600;
const easeOut = (t: number) => 1 - Math.pow(1 - t, 5);
/* How long "Copy link" shows its check before the copy icon comes back. */
const COPIED_MS = 2000;

/**
 * Article section rail, desktop only (xl and up): sits in the 240px left of
 * the 720px article column, stays in view while the article scrolls, and
 * jumps to a section on click. The section being read is brand, stepped in
 * behind a dot; the rest use the site's quiet text (dark/40). The dot grows
 * in place while the name steps aside, both on the site's reveal curve.
 * Below xl there is no room beside the article, so the rail is not shown.
 *
 * Under the sections sit two links, desktop only like the rail: "Open in
 * ChatGPT" and "Open in Claude". Each opens the assistant in a new tab with
 * a message already typed that asks it to read this article (`url`). They
 * use the rail's quiet text and turn brand on hover, logo included. The logo
 * sits 8 left of the name.
 *
 * Under those, "Copy link" copies the article's address (`url`). Its copy
 * icon sits in the logo's place; on a copy it shrinks away and a check draws
 * in on the site's reveal curve, brand, then the icon comes back.
 *
 * The parent must be `relative` and span the whole article: the rail fills
 * its height and the nav sticks inside it. "Back" is 14 here like the rows
 * under it (16 above the title on tablets). pt-2 starts it with the tops of
 * its letters level with the tops of the title's (48px on a 57.6px line at
 * xl). top-[178px] is where that puts the nav before any scrolling
 * (96 header + 74 page padding + 8), so the rail never moves until the end
 * of the article pushes it up. A section jumped to lands with its heading
 * level with "Back" the same way (scroll-margin-top in globals.css).
 */
export default function ArticleRail({ sections, url }: { sections: Section[]; url: string }) {
  const ask = encodeURIComponent(`Read from ${url} so I can ask questions about it.`);
  const assistants: { name: Assistant; href: string }[] = [
    // hints=search has ChatGPT look the page up instead of answering from memory.
    { name: "ChatGPT", href: `https://chatgpt.com/?hints=search&q=${ask}` },
    { name: "Claude", href: `https://claude.ai/new?q=${ask}` },
  ];

  // The first section (the intro) is where a reader lands, so it starts marked.
  const [activeId, setActiveId] = useState<string | null>(sections[0]?.id ?? null);
  // The animation frame of a rail jump in flight. While it runs the mark
  // stays on the section it is heading for instead of flickering through
  // every section the page passes.
  const jumpFrame = useRef<number | null>(null);
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (copiedTimer.current !== null) window.clearTimeout(copiedTimer.current);
    },
    [],
  );

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Nothing was copied, so the check must not show.
      return;
    }
    setCopied(true);
    if (copiedTimer.current !== null) window.clearTimeout(copiedTimer.current);
    copiedTimer.current = window.setTimeout(() => setCopied(false), COPIED_MS);
  };

  useEffect(() => {
    const headings = sections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;
    // A section is "being read" once its heading reaches the line a rail
    // link scrolls it to. Until the second one gets there it is the first.
    // The line is read each time because it differs by window width.
    const onScroll = () => {
      if (jumpFrame.current !== null) return;
      const line = (parseFloat(getComputedStyle(headings[0]).scrollMarginTop) || 0) + 1;
      let current = headings[0].id;
      for (const el of headings) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      setActiveId(current);
    };
    // The reader took over mid-jump (wheel, touch, keys): stop the jump and
    // follow the page again.
    const onTakeover = () => {
      if (jumpFrame.current === null) return;
      cancelAnimationFrame(jumpFrame.current);
      jumpFrame.current = null;
      onScroll();
    };
    onScroll();
    // Charts and images that settle after the page opens move the headings
    // without a scroll, so the mark is checked again when the page's height
    // changes.
    const settled = new ResizeObserver(onScroll);
    settled.observe(document.body);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("wheel", onTakeover, { passive: true });
    window.addEventListener("touchstart", onTakeover, { passive: true });
    window.addEventListener("keydown", onTakeover);
    return () => {
      settled.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("wheel", onTakeover);
      window.removeEventListener("touchstart", onTakeover);
      window.removeEventListener("keydown", onTakeover);
      if (jumpFrame.current !== null) cancelAnimationFrame(jumpFrame.current);
      jumpFrame.current = null;
    };
  }, [sections]);

  /* Scroll here instead of following the link, so the browser's Back button
     leaves the article rather than stepping back through sections. The URL
     still gets the section, so a copied link opens on it. */
  const jumpTo = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    // Open in a new tab or window: leave it to the browser.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const el = document.getElementById(id);
    if (!el) return;
    event.preventDefault();
    if (jumpFrame.current !== null) cancelAnimationFrame(jumpFrame.current);
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);

    // Lands the heading on its scroll-margin line, exact even if the page
    // grew (an image loading) while the jump was running.
    const land = () => {
      jumpFrame.current = null;
      el.scrollIntoView({ behavior: "instant", block: "start" });
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      land();
      return;
    }
    const from = window.scrollY;
    const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
    const furthest = document.documentElement.scrollHeight - window.innerHeight;
    const to = Math.min(Math.max(from + el.getBoundingClientRect().top - margin, 0), furthest);
    let start: number | null = null;
    const step = (now: number) => {
      start ??= now;
      const progress = Math.min((now - start) / JUMP_MS, 1);
      if (progress === 1) {
        land();
        return;
      }
      window.scrollTo(0, from + (to - from) * easeOut(progress));
      jumpFrame.current = requestAnimationFrame(step);
    };
    jumpFrame.current = requestAnimationFrame(step);
  };

  return (
    <div className="absolute inset-y-0 left-0 hidden w-[200px] pt-2 xl:block">
      <nav aria-label="Article sections" className="sticky top-[178px] flex flex-col gap-6">
        <BackToResources className="xl:text-sm" />
        <ul className="flex flex-col gap-2">
          {sections.map(({ id, label }) => {
            const isActive = id === activeId;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(event) => jumpTo(event, id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative block origin-left text-sm leading-5 transition-all duration-200 before:absolute before:top-1/2 before:left-0 before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-brand before:transition-all before:duration-300 before:ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-brand active:scale-95 ${
                    isActive
                      ? "font-semibold text-brand before:scale-100 before:opacity-100"
                      : "font-normal text-dark/40 before:scale-0 before:opacity-0"
                  }`}
                >
                  <span
                    className={`block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? "translate-x-3.5" : ""
                    }`}
                  >
                    {label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        {/* The leaderboard card's divider line, 24 from each group and as
            long as the longer link under it. */}
        <div className="flex w-fit flex-col gap-6">
          <div aria-hidden="true" className="h-px w-full bg-[#D8D5D5]/50" />
          <ul className="flex flex-col gap-2">
            {assistants.map(({ name, href }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit origin-left items-center gap-2 text-sm leading-5 text-dark/40 transition-all duration-200 hover:text-brand active:scale-95"
                >
                  <AssistantLogo name={name} />
                  Open in {name}
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={copyLink}
                className={`flex w-fit origin-left cursor-pointer items-center gap-2 text-sm leading-5 transition-all duration-200 hover:text-brand active:scale-95 ${
                  copied ? "text-brand" : "text-dark/40"
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <g
                    className={`origin-center transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                      copied ? "scale-50 opacity-0" : ""
                    }`}
                  >
                    <rect x="5.25" y="5.25" width="8.5" height="8.5" rx="1.75" />
                    <path d="M10.75 5.25V4A1.75 1.75 0 0 0 9 2.25H4A1.75 1.75 0 0 0 2.25 4v5A1.75 1.75 0 0 0 4 10.75h1.25" />
                  </g>
                  <path
                    d="M2.75 8.5L6.25 12L13.25 4.25"
                    pathLength={1}
                    strokeDasharray={1}
                    strokeDashoffset={copied ? 0 : 1}
                    className={`transition-[stroke-dashoffset,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                      copied ? "opacity-100 delay-100" : "opacity-0"
                    }`}
                  />
                </svg>
                Copy link
              </button>
              <span aria-live="polite" className="sr-only">
                {copied ? "Link copied" : ""}
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
