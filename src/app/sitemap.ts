import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.transitstats.co";

  // Most recent article update — keeps /resources and / lastmod fresh
  // whenever an article ships or is refreshed.
  const latestPostDate = posts
    .map((p) => new Date(p.updated))
    .reduce((a, b) => (a > b ? a : b), new Date(0));

  // The home page's own last change (headline, copy). Its lastmod is this or
  // the newest article, whichever is later.
  const homeUpdated = new Date("2026-11-22");
  const homeDate = homeUpdated > latestPostDate ? homeUpdated : latestPostDate;

  const articleEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: new Date(post.updated),
    changeFrequency: "monthly",
    priority: 0.7,
    images: [`${baseUrl}/images/articles/${post.slug}.png`],
  }));

  return [
    { url: baseUrl, lastModified: homeDate, changeFrequency: "weekly", priority: 1, images: [`${baseUrl}/images/og-image.png`] },
    { url: `${baseUrl}/about`, lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: latestPostDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date("2026-03-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacypolicy`, lastModified: new Date("2026-11-22"), changeFrequency: "yearly", priority: 0.5 },
    ...articleEntries,
  ];
}
