import type { Metadata } from "next";
import DownloadCTA from "@/components/DownloadCTA";
import ResourcesBrowser from "@/components/resources/ResourcesBrowser";
import { posts } from "@/data/posts";
import { shareMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "CTA Data & Insights",
  description:
    "Chicago transit tips, CTA statistics, and rider insights from Transit Stats. Save money, track rides, and get the most from Chicago's transit system.",
  alternates: { canonical: "https://www.transitstats.co/resources" },
  ...shareMetadata({
    title: "CTA Data & Insights | Transit Stats",
    description:
      "Chicago transit tips, CTA statistics, and rider insights from Transit Stats.",
    path: "/resources",
  }),
};

export default function ResourcesPage() {
  return (
    <div className="rounded-b-[36px] bg-canvas pb-10 md:pb-[74px] xl:pb-[149px]">
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
      {/* The design at desktop: title 183 from the top of the page (87 under
          the 96 header), the closing card a home-page section gap under the
          grid and 149 above the footer, as on the home page. */}
      <div className="container pt-10 md:pt-[74px] xl:pt-[87px]">
        <ResourcesBrowser
          title={
            <h1 className="text-4xl font-bold leading-[1.2] text-brand md:text-5xl xl:text-6xl xl:leading-[76px]">
              Resources
            </h1>
          }
          items={posts.map(({ slug, title, description, imageAlt, category }) => ({
            slug,
            title,
            description,
            imageAlt,
            category,
          }))}
        />
        <div className="mt-20 md:mt-[148px] xl:mt-50">
          <DownloadCTA size="lg" />
        </div>
      </div>
    </div>
  );
}
