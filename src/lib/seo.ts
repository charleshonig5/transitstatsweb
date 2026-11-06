import type { Metadata } from "next";

const SITE_URL = "https://www.transitstats.co";

const DEFAULT_SHARE_IMAGE = {
  url: `${SITE_URL}/images/og-image.png`,
  width: 1200,
  height: 630,
  alt: "Transit Stats | Chicago Transit Data & CTA Statistics Made Personal",
};

/**
 * Open Graph + Twitter tags for a page. A page's openGraph/twitter objects
 * REPLACE the root layout's (Next.js merges metadata shallowly), so a page
 * that sets its own title loses the share image, type, and site name
 * unless it sets them again. Every page builds its share tags here.
 */
export function shareMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      siteName: "Transit Stats",
      locale: "en_US",
      title,
      description,
      url: `${SITE_URL}${path}`,
      images: [DEFAULT_SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_SHARE_IMAGE],
    },
  };
}
