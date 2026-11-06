import type { Faq } from "@/data/posts";

/**
 * Article FAQ: one card per question, built like the RelatedPosts cards
 * (10px radius, soft shadow, 16px apart, dark/70 body, lift on hover, 0.98
 * on press). Questions are dark while closed and brand once open. The heading matches the article's prose
 * h2. The plus sits in a tinted circle, a pattern taken from the app. Native <details> keeps every answer in the HTML when collapsed, so
 * crawlers read them and they match the FAQPage JSON-LD exactly. The first
 * answer starts open so the block reads as content, not a menu.
 */
export default function ArticleFaq({ faqs }: { faqs: Faq[] }) {
  if (faqs.length === 0) return null;

  return (
    <section
      aria-labelledby="article-faq"
      className="mx-auto flex w-full max-w-[720px] flex-col gap-5"
    >
      <h2
        id="article-faq"
        className="text-2xl font-semibold leading-[1.3] text-brand md:text-3xl xl:text-4xl"
      >
        Frequently asked questions
      </h2>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <details
            key={faq.question}
            open={i === 0}
            className="group rounded-[10px] bg-white shadow-[0_0_30px_rgba(0,0,0,0.08)] transition-all duration-200 [@media(hover:hover)]:has-[summary:hover]:-translate-y-1 [@media(hover:hover)]:has-[summary:hover]:shadow-[0_8px_40px_rgba(0,0,0,0.12)] has-[summary:active]:translate-y-0 has-[summary:active]:scale-[0.98]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-base font-semibold leading-snug text-dark transition-colors duration-200 group-open:text-brand [@media(hover:hover)]:hover:text-brand md:p-8 md:text-lg md:leading-snug [&::-webkit-details-marker]:hidden">
              {faq.question}
              {/* Tinted circle around the plus, as in the app's icon buttons */}
              <span
                aria-hidden="true"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-transform duration-200 group-open:rotate-45"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 1v10M1 6h10"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </summary>
            <p className="-mt-4 px-6 pb-6 text-sm leading-6 text-dark/70 md:-mt-6 md:px-8 md:pb-8 md:text-base md:leading-7">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
