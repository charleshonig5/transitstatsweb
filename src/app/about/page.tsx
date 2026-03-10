import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Transit Stats — Chicago's Personal CTA Analytics App",
  description:
    "We built the first app that turns your public transit rides into personal analytics — showing your real metrics, environmental impact, and transit patterns. Built by CTA lovers, for CTA lovers.",
  alternates: { canonical: "https://www.transitstats.co/about" },
  openGraph: {
    title: "About Transit Stats — Chicago's Personal CTA Analytics App",
    description:
      "We built the first app that turns your public transit rides into personal analytics — showing your real metrics, environmental impact, and transit patterns.",
    url: "https://www.transitstats.co/about",
  },
};

const testimonials = [
  {
    quote:
      "Seeing my actual CO\u2082 impact motivated me to take transit even more. 23 kg saved last month!",
    author: "Transit Stats user",
  },
  {
    quote:
      "Between gas, parking, and wear-and-tear, driving costs me $18/day. CTA? Just $5. The math is wild.",
    author: "Transit Stats user",
  },
  {
    quote:
      "Who knew public transit could be addictive? I'm chasing achievements like it's a video game.",
    author: "Transit Stats user",
  },
  {
    quote:
      "I had no idea I was averaging 47 miles of transit per week until I started tracking!",
    author: "Transit Stats user",
  },
  {
    quote:
      "The leaderboards got me exploring new CTA lines just to climb the rankings. I've discovered parts of Chicago I never knew existed.",
    author: "Transit Stats user",
  },
  {
    quote:
      "My 23-day ride streak is longer than any gym streak I've ever had. Transit Stats makes consistency actually fun.",
    author: "Transit Stats user",
  },
];

export default function AboutPage() {
  return (
    <div className="rounded-b-[36px] bg-white">
      {/* ── Hero: About heading + intro ── */}
      <section className="container flex flex-col gap-10 py-10 md:py-14 lg:flex-row lg:items-start lg:gap-24">
        {/* Heading */}
        <h1 className="shrink-0 text-3xl leading-[1.2] text-brand md:text-4xl lg:text-5xl lg:leading-[58px]">
          <span className="font-bold">About</span>
          <br />
          <span className="font-normal">Transit Stats</span>
        </h1>

        {/* Body copy */}
        <div className="flex-1 text-sm leading-6 text-dark md:text-base md:leading-7">
          <p>
            We built the first app that turns your public transit rides into
            personal analytics &ndash; showing your real metrics, environmental
            impact, and transit patterns. It&rsquo;s like a fitness tracker,
            but for your public transit usage.
          </p>
          <p className="mt-6">
            We started in Chicago because we have one of America&rsquo;s best
            transit systems.{" "}
            <strong>
              Every train ride and bus trip deserves to be celebrated, tracked,
              and rewarded.
            </strong>
          </p>
        </div>
      </section>

      {/* ── Contact us card ── */}
      <section className="container py-10 md:py-14" aria-label="Contact us">
        <div className="flex flex-col gap-10 overflow-hidden rounded-[36px] bg-gradient-to-b from-brand to-brand-dark p-8 shadow-[0_0_30px_rgba(0,0,0,0.08)] md:p-14 lg:flex-row lg:items-start lg:gap-20 lg:p-[60px]">
          {/* Copy */}
          <div className="flex flex-1 flex-col gap-10">
            <div className="flex flex-col gap-3.5">
              <h2 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
                Contact us
              </h2>
              <div className="text-sm leading-6 text-white md:text-base md:leading-7">
                <p>
                  Let&rsquo;s chat! Transit Stats is built by CTA lovers, for
                  CTA lovers. Your feedback shapes every update.
                </p>
                <p className="mt-4">
                  <strong>Reach out if you:</strong>
                </p>
                <ul className="mt-1 list-inside">
                  <li>- Have questions about the app</li>
                  <li>- Found a bug</li>
                  <li>- Want to share your transit achievements</li>
                  <li>- Have ideas for new features</li>
                  <li>- Just want to say hi</li>
                </ul>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3.5">
              <a
                href="https://instagram.com/transitstats"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-sm font-bold text-white transition-opacity hover:opacity-80 md:text-base"
              >
                {/* Instagram icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="26"
                    height="26"
                    rx="6"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r="6"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <circle cx="23" cy="9" r="1.5" fill="white" />
                </svg>
                @transitstats
              </a>
              <a
                href="https://tiktok.com/@transitstats"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-sm font-bold text-white transition-opacity hover:opacity-80 md:text-base"
              >
                {/* TikTok icon */}
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M22 4h-3v17a4 4 0 1 1-3-3.87V13a8 8 0 1 0 7 7.93V12.5A8.5 8.5 0 0 0 27 14V10a5 5 0 0 1-5-6Z"
                    fill="white"
                  />
                </svg>
                @transitstats
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden flex-1 items-center justify-center lg:flex">
            <Image
              src="/images/about-contact-illustration.svg"
              alt="Illustration of a person at a desk working on Transit Stats"
              width={392}
              height={392}
              className="h-auto w-full max-w-[392px]"
            />
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="container flex flex-col gap-10 py-10 md:py-14">
        <h2 className="text-2xl font-semibold text-brand md:text-3xl lg:text-4xl">
          What our users are saying
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="flex flex-col justify-between rounded-[10px] bg-white p-8 shadow-[0_0_30px_rgba(0,0,0,0.08)] md:p-10"
            >
              <div className="flex flex-col gap-6">
                {/* Quote mark */}
                <div
                  className="h-6 w-8 rounded-sm bg-brand"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-dark md:text-base md:leading-7">
                  {t.quote}
                </p>
              </div>
              <p className="mt-10 text-sm font-semibold text-brand md:text-base">
                {t.author}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
