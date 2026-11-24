import Image from "next/image";

export interface Review {
  quote: string;
  source: "reddit" | "appstore";
}

const sources = {
  reddit: { label: "Reddit review", icon: "/images/home/review-reddit.svg", w: 22.8, h: 19.2 },
  appstore: { label: "App store review", icon: "/images/home/review-apple.svg", w: 20, h: 24 },
};

function ReviewCard({ review, hidden }: { review: Review; hidden?: boolean }) {
  const source = sources[review.source];
  /* Keep the last two words together so a quote never ends on one word. */
  const quote = review.quote.replace(/ (\S+)$/, "\u00a0$1");
  return (
    <figure
      aria-hidden={hidden}
      className="mr-11 flex min-h-[300px] w-[300px] shrink-0 flex-col justify-between gap-6 rounded-[44px] bg-white p-8 pt-10 shadow-[0_0_30px_rgba(0,0,0,0.08)] md:size-[366px] md:p-10 md:pt-[50px]"
    >
      <div className="flex flex-col gap-[30px]">
        <Image src="/images/home/review-stars.svg" alt={hidden ? "" : "Five stars"} width={147} height={21} />
        <blockquote className="text-sm leading-6 text-dark md:max-w-[280px] md:text-base md:leading-7 lg:text-xl lg:leading-[27px]">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
      <figcaption className="flex items-center gap-3.5 text-base font-semibold text-brand lg:text-xl lg:leading-[27px]">
        <Image src={source.icon} alt="" width={source.w} height={source.h} aria-hidden="true" />
        {source.label}
      </figcaption>
    </figure>
  );
}

/* A row of review cards looping right to left across the full width of the
   page, on the site's marquee keyframe (the hero stat cards use the same
   one). The row is laid out four times so the loop never shows a gap, even
   on a very wide screen: only the first set is read out, the rest are
   decoration. It never stops, hovering included. The negative delay starts
   the row part of the way in, so a card is already leaving on the left as
   the design shows. With reduced motion the row stands still and scrolls by
   hand. */
export default function ReviewsMarquee({ reviews }: { reviews: Review[] }) {
  return (
    <div className="-my-[30px] overflow-hidden py-[30px] motion-reduce:overflow-x-auto">
      <div className="flex w-max animate-[marquee_100s_linear_infinite] [animation-delay:-7s] motion-reduce:animate-none motion-reduce:pl-5">
        {[0, 1, 2, 3].map((set) =>
          reviews.map((review) => (
            <ReviewCard key={`${set}-${review.quote}`} review={review} hidden={set > 0} />
          ))
        )}
      </div>
    </div>
  );
}
