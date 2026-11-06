import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import ArticleFaq from "@/components/ArticleFaq";
import DownloadCTA from "@/components/DownloadCTA";

import MostPopularCtaStopsLines from "@/data/articles/most-popular-cta-stops-lines";
import Co2SavingsCtaRiders from "@/data/articles/co2-savings-cta-riders";
import CtaRidershipData from "@/data/articles/cta-ridership-data";
import CtaRushHourData from "@/data/articles/cta-rush-hour-data";
import CtaCommutePairs from "@/data/articles/cta-commute-pairs";
import CtaRidershipGrowth2026 from "@/data/articles/cta-ridership-growth-2026";
import BusiestCtaStationsBusRoutes from "@/data/articles/busiest-cta-stations-bus-routes";
import CtaOhareMidwayAirport from "@/data/articles/cta-ohare-midway-airport";

const articleContent: Record<string, ReactNode> = {
  "busiest-cta-stations-bus-routes": <BusiestCtaStationsBusRoutes />,
  "cta-ohare-midway-airport": <CtaOhareMidwayAirport />,
  "cta-ridership-growth-2026": <CtaRidershipGrowth2026 />,
  "most-popular-cta-stops-lines": <MostPopularCtaStopsLines />,
  "co2-savings-cta-riders": <Co2SavingsCtaRiders />,
  "cta-ridership-data": <CtaRidershipData />,
  "cta-rush-hour-data": <CtaRushHourData />,
  "cta-commute-pairs": <CtaCommutePairs />,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Share/schema image: a 1200x750 JPEG made from the 2880x1800 cover PNG.
// The PNGs are 5-10 MB - over X's 5 MB card limit - so social cards and
// structured data point here; the page itself keeps the PNG through
// next/image, which resizes it.
const SOCIAL_IMAGE_WIDTH = 1200;
const SOCIAL_IMAGE_HEIGHT = 750;
const socialImage = (slug: string) =>
  `https://www.transitstats.co/images/articles/social/${slug}.jpg`;

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  const url = `https://www.transitstats.co/${post.slug}`;
  const image = {
    url: socialImage(post.slug),
    width: SOCIAL_IMAGE_WIDTH,
    height: SOCIAL_IMAGE_HEIGHT,
    alt: post.imageAlt,
  };

  // A page's openGraph/twitter objects REPLACE the root layout's (no deep
  // merge), so every field an article needs is set here, including the
  // site-wide ones (siteName, locale) and the whole twitter card.
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      siteName: "Transit Stats",
      locale: "en_US",
      title: `${post.title} | Transit Stats`,
      description: post.description,
      url,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
      section: "CTA Data & Insights",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Transit Stats`,
      description: post.description,
      images: [image],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = articleContent[slug];

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
              { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.transitstats.co/resources" },
              { "@type": "ListItem", position: 3, name: post.title },
            ],
          }),
        }}
      />
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            image: {
              "@type": "ImageObject",
              url: socialImage(post.slug),
              width: SOCIAL_IMAGE_WIDTH,
              height: SOCIAL_IMAGE_HEIGHT,
            },
            datePublished: post.date,
            dateModified: post.updated,
            inLanguage: "en-US",
            articleSection: "CTA Data & Insights",
            about: {
              "@type": "Organization",
              name: "Chicago Transit Authority",
              sameAs: "https://en.wikipedia.org/wiki/Chicago_Transit_Authority",
            },
            isPartOf: {
              "@type": "WebSite",
              name: "Transit Stats",
              url: "https://www.transitstats.co",
            },
            author: {
              "@type": "Organization",
              name: post.author,
              url: "https://www.transitstats.co/about",
            },
            publisher: {
              "@type": "Organization",
              name: "Transit Stats",
              url: "https://www.transitstats.co",
              logo: {
                "@type": "ImageObject",
                url: "https://www.transitstats.co/images/og-image.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.transitstats.co/${post.slug}`,
            },
          }),
        }}
      />
      {/* FAQ structured data - built from the same post.faqs the page renders */}
      {post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: post.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            }),
          }}
        />
      )}

      <div className="container flex flex-col gap-10 py-10 md:gap-14 md:py-[74px]">
        {/* ── Article header ── */}
        <div className="mx-auto flex w-full max-w-[720px] flex-col">
          {/* Back to Resources */}
          <Link
            href="/resources"
            className="group mb-6 flex items-center gap-2.5 text-sm font-semibold text-brand transition-all duration-200 hover:-translate-x-1 active:scale-95 md:text-base"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-x-1"
            >
              <path
                d="M16 10H4M4 10L9 5M4 10L9 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to resources
          </Link>
          <h1 className="text-4xl font-bold leading-[1.2] text-brand md:text-5xl lg:text-6xl lg:leading-[72px]">
            {post.title}
          </h1>
          <p className="mt-4 text-xs font-medium uppercase tracking-widest text-dark/40 md:mt-6">
            Updated <time dateTime={post.updated}>{post.displayUpdated}</time>
            {" / "}
            {post.author}
          </p>
        </div>

        {/* ── Cover image ── */}
        <div className="relative mx-auto aspect-[16/10] w-full max-w-[720px] overflow-hidden rounded-xl">
          <Image
            src={`/images/articles/${post.slug}.png`}
            alt={post.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 720px"
            priority
          />
        </div>

        {/* ── Article body (standard blog width) ── */}
        <article className="prose mx-auto w-full max-w-[720px]">
          {content ?? (
            <p className="text-dark/50 italic">
              Article content coming soon.
            </p>
          )}
        </article>

        <ArticleFaq faqs={post.faqs} />

        {/* ── Download CTA ── */}
        <DownloadCTA />
      </div>
    </div>
  );
}
