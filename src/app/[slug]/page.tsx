import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import DownloadCTA from "@/components/DownloadCTA";

import MostPopularCtaStopsLines from "@/data/articles/most-popular-cta-stops-lines";
import Co2SavingsCtaRiders from "@/data/articles/co2-savings-cta-riders";
import CtaRidershipData from "@/data/articles/cta-ridership-data";
import CtaRushHourData from "@/data/articles/cta-rush-hour-data";
import CtaCommutePairs from "@/data/articles/cta-commute-pairs";

const articleContent: Record<string, ReactNode> = {
  "most-popular-cta-stops-lines": <MostPopularCtaStopsLines />,
  "co2-savings-cta-riders": <Co2SavingsCtaRiders />,
  "cta-ridership-data": <CtaRidershipData />,
  "cta-rush-hour-data": <CtaRushHourData />,
  "cta-commute-pairs": <CtaCommutePairs />,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://www.transitstats.co/${post.slug}` },
    openGraph: {
      title: `${post.title} | Transit Stats`,
      description: post.description,
      url: `https://www.transitstats.co/${post.slug}`,
      images: [
        {
          url: `https://www.transitstats.co/images/articles/${post.slug}.png`,
          width: 1440,
          height: 900,
          alt: post.imageAlt,
        },
      ],
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
            image: `https://www.transitstats.co/images/articles/${post.slug}.png`,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: post.author,
              url: "https://www.transitstats.co",
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

      <div className="container flex flex-col gap-10 py-10 md:gap-14 md:py-[74px]">
        {/* ── Article header ── */}
        <div className="mx-auto flex w-full max-w-[720px] flex-col">
          <h1 className="text-4xl font-bold leading-[1.2] text-brand md:text-5xl lg:text-6xl lg:leading-[72px]">
            {post.title}
          </h1>
          <p className="mt-4 text-xs font-medium uppercase tracking-widest text-dark/40 md:mt-6">
            {post.displayDate} / {post.author}
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

        {/* ── Download CTA ── */}
        <DownloadCTA />
      </div>
    </div>
  );
}
