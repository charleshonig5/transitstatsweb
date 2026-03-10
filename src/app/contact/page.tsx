import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us — Transit Stats",
  description:
    "Get in touch with the Transit Stats team. Built by Chicago riders, for Chicago riders. Send us feedback, report bugs, share achievements, or suggest new features.",
  alternates: { canonical: "https://www.transitstats.co/contact" },
  openGraph: {
    title: "Contact Us — Transit Stats",
    description:
      "Get in touch with the Transit Stats team. Built by Chicago riders, for Chicago riders. Send us feedback, report bugs, share achievements, or suggest new features.",
    url: "https://www.transitstats.co/contact",
  },
};

export default function ContactPage() {
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
              { "@type": "ListItem", position: 2, name: "Contact" },
            ],
          }),
        }}
      />
      <div className="container py-10 md:py-[74px]">
        {/* Orange contact card */}
        <div className="flex flex-col gap-10 overflow-hidden rounded-[36px] bg-gradient-to-b from-brand to-brand-dark p-8 shadow-[0_0_30px_rgba(0,0,0,0.08)] md:p-14 lg:flex-row lg:items-start lg:gap-20 lg:p-[60px]">
          {/* Copy */}
          <div className="flex flex-1 flex-col gap-10">
            <div className="flex flex-col gap-3.5">
              <h1 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                Contact us
              </h1>
              <div className="text-sm leading-6 text-white md:text-base md:leading-7">
                <p>
                  Let&rsquo;s chat! Transit Stats is built by Chicago riders,
                  for Chicago riders. Your feedback shapes every update.
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
              width={480}
              height={480}
              className="h-auto w-full max-w-[480px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
