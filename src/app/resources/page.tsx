import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DownloadCTA from "@/components/DownloadCTA";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "CTA Data & Insights",
  description:
    "Chicago transit tips, CTA statistics, and rider insights from Transit Stats. Save money, track rides, and get the most from Chicago's transit system.",
  alternates: { canonical: "https://www.transitstats.co/resources" },
  openGraph: {
    title: "CTA Data & Insights | Transit Stats",
    description:
      "Chicago transit tips, CTA statistics, and rider insights from Transit Stats.",
    url: "https://www.transitstats.co/resources",
  },
};

export default function ResourcesPage() {
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
              { "@type": "ListItem", position: 2, name: "Resources" },
            ],
          }),
        }}
      />
      {/* ItemList structured data for carousel rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: posts.map((post, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://www.transitstats.co/${post.slug}`,
              name: post.title,
            })),
          }),
        }}
      />
      <div className="container flex flex-col gap-16 py-10 md:py-[74px] lg:gap-20">
        <h1 className="text-4xl font-bold leading-[1.2] text-brand md:text-5xl lg:text-6xl lg:leading-[72px]">
          Resources
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="flex flex-col justify-between overflow-hidden rounded-[10px] bg-white shadow-[0_0_30px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="relative aspect-[16/10] w-full bg-dark/5">
                <Image
                  src={`/images/articles/${post.slug}.png`}
                  alt={post.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-8 md:p-10">
                <h2 className="text-xl font-semibold leading-snug text-brand md:text-2xl md:leading-snug">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-dark/70 md:text-base md:leading-7">
                  {post.description}
                </p>
                <span className="group mt-auto flex items-center gap-2.5 pt-8 text-sm font-semibold text-brand transition-all duration-200 hover:translate-x-1 md:text-base">
                  Read more
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path
                      d="M4 10H16M16 10L11 5M16 10L11 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <DownloadCTA />
      </div>
    </div>
  );
}
