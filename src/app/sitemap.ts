import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.transitstats.co";

  const articleEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
    images: [`${baseUrl}/images/articles/${post.slug}.png`],
  }));

  return [
    { url: baseUrl, lastModified: new Date("2026-03-11"), changeFrequency: "weekly", priority: 1, images: [`${baseUrl}/images/og-image.png`] },
    { url: `${baseUrl}/about`, lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: new Date("2026-03-11"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacypolicy`, lastModified: new Date("2026-01-01"), changeFrequency: "yearly", priority: 0.5 },
    ...articleEntries,
  ];
}
