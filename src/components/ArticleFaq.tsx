import FaqCard from "@/components/FaqCard";
import type { Faq } from "@/data/posts";

/**
 * Article FAQ: one FaqCard per question, 16px apart like the RelatedPosts
 * cards. The heading matches the article's prose h2.
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
        FAQ
      </h2>
      <div className="flex flex-col gap-4">
        {faqs.map((faq) => (
          <FaqCard key={faq.question} question={faq.question}>
            {faq.answer}
          </FaqCard>
        ))}
      </div>
    </section>
  );
}
