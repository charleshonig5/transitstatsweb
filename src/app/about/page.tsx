import type { Metadata } from "next";
import Image from "next/image";
import DownloadCTA from "@/components/DownloadCTA";

export const metadata: Metadata = {
  title: "About Transit Stats | Chicago Transit Data & CTA Stats App",
  description:
    "Transit Stats turns your CTA rides into personal transit data — real statistics, environmental impact, and Chicago transit patterns. Built by riders, for riders.",
  alternates: { canonical: "https://www.transitstats.co/about" },
  openGraph: {
    title: "About Transit Stats | Chicago Transit Data & CTA Stats App",
    description:
      "Transit Stats turns your CTA rides into personal transit data — real statistics, environmental impact, and Chicago transit patterns. Built by riders, for riders.",
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
      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.transitstats.co" },
              { "@type": "ListItem", position: 2, name: "About" },
            ],
          }),
        }}
      />
      {/* ── Hero: About heading + intro ── */}
      <section className="container flex flex-col gap-10 py-10 md:py-[74px] lg:flex-row lg:items-start lg:gap-24">
        {/* Heading */}
        <h1 className="shrink-0 text-4xl leading-[1.2] text-brand md:text-5xl lg:text-6xl lg:leading-[72px]">
          <span className="font-bold">About</span>
          <br />
          <span className="font-normal">Transit Stats</span>
        </h1>

        {/* Body copy */}
        <div className="flex-1 text-sm leading-6 text-dark md:text-base md:leading-7">
          <p>
            We built the first app that turns your Chicago transit rides into
            personal analytics &ndash; showing your real stats, environmental
            impact, and CTA data you&rsquo;ve never had access to before.
            It&rsquo;s like a fitness tracker, but for your transit usage.
          </p>
          <p className="mt-6">
            We started in Chicago because we have one of America&rsquo;s best
            transit systems.{" "}
            <strong>
              Every CTA train ride and bus trip deserves to be celebrated,
              tracked, and rewarded.
            </strong>
          </p>
        </div>
      </section>

      {/* ── Contact us card ── */}
      <section className="container py-10 md:py-[74px]" aria-label="Contact us">
        <div className="flex flex-col gap-10 overflow-hidden rounded-[36px] bg-gradient-to-b from-brand to-brand-dark p-8 shadow-[0_0_30px_rgba(0,0,0,0.08)] md:p-14 lg:flex-row lg:items-start lg:gap-20 lg:p-[60px]">
          {/* Copy */}
          <div className="flex flex-1 flex-col gap-10">
            <div className="flex flex-col gap-3.5">
              <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
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
                </ul>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3.5">
              <a
                href="mailto:contact@transitstats.co"
                className="flex items-center gap-3.5 text-sm font-bold text-white transition-all duration-200 hover:translate-x-1 hover:scale-105 md:text-base"
              >
                {/* Email icon */}
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
                    y="6"
                    width="26"
                    height="20"
                    rx="3"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M3 9l13 9 13-9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
                contact@transitstats.co
              </a>
              <a
                href="https://www.instagram.com/transitstats/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-sm font-bold text-white transition-all duration-200 hover:translate-x-1 hover:scale-105 md:text-base"
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
                href="https://www.tiktok.com/@transitstats"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 text-sm font-bold text-white transition-all duration-200 hover:translate-x-1 hover:scale-105 md:text-base"
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
          <div className="flex flex-1 items-center justify-center">
            <Image
              src="/images/about-contact-illustration.png"
              alt="Illustration of a person at a desk working on Transit Stats"
              width={392}
              height={392}
              className="h-auto w-full max-w-[392px]"
            />
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="container flex flex-col gap-10 py-10 md:py-[74px]">
        <h2 className="text-3xl font-semibold text-brand md:text-4xl lg:text-5xl">
          What our users are saying
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="flex flex-col justify-between rounded-[10px] bg-white p-8 shadow-[0_0_30px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] md:p-10"
            >
              <div className="flex flex-col gap-6">
                {/* Quote mark */}
                <Image
                  src="/images/quote.svg"
                  alt=""
                  width={32}
                  height={24}
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

      {/* ── Download CTA ── */}
      <section className="container py-10 md:py-[74px]">
        <DownloadCTA />
      </section>
    </div>
  );
}
