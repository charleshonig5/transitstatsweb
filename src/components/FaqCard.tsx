import type { ReactNode } from "react";

/**
 * One FAQ card, built like the RelatedPosts cards (10px radius, soft shadow,
 * dark/70 body, 0.98 on press). On hover the card stays where it is: the
 * shadow deepens and the question turns brand. The question is dark while
 * closed and brand once open. The plus sits in a tinted circle, a pattern
 * taken from the app. Native <details> keeps the answer in the HTML when
 * collapsed, so crawlers read it and it matches the FAQPage JSON-LD exactly.
 * Every card starts closed. `heading` marks the question up as an h2 (the
 * FAQ page, where the questions are the page's outline); it looks the same.
 */
export default function FaqCard({
  question,
  heading = false,
  children,
}: {
  question: string;
  heading?: boolean;
  children: ReactNode;
}) {
  return (
    <details className="group rounded-[10px] bg-white shadow-[0_0_30px_rgba(0,0,0,0.08)] transition-all duration-200 [@media(hover:hover)]:has-[summary:hover]:shadow-[0_8px_40px_rgba(0,0,0,0.12)] has-[summary:active]:scale-[0.98]">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-base font-semibold leading-snug text-dark transition-colors duration-200 group-open:text-brand [@media(hover:hover)]:hover:text-brand md:p-8 md:text-lg md:leading-snug [&::-webkit-details-marker]:hidden">
        {heading ? <h2>{question}</h2> : question}
        {/* Tinted circle around the plus, as in the app's icon buttons */}
        <span
          aria-hidden="true"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-transform duration-200 group-open:rotate-45"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <p className="-mt-4 px-6 pb-6 text-sm leading-6 text-dark/70 md:-mt-6 md:px-8 md:pb-8 md:text-base md:leading-7">
        {children}
      </p>
    </details>
  );
}
