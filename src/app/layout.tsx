import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.transitstats.co"),
  title: {
    default: "Transit Stats — Chicago Transit Data & CTA Statistics Made Personal",
    template: "%s | Transit Stats",
  },
  description:
    "Transit Stats is the ultimate CTA tracker — turning your Chicago transit rides into personal CTA data and statistics. Track rides, view in-depth CTA stats, climb leaderboards, and see your CO₂ savings — all for free.",
  keywords: [
    "transit stats",
    "transit data",
    "CTA stats",
    "CTA data",
    "CTA statistics",
    "CTA tracker",
    "Chicago transit",
    "Chicago transit data",
    "CTA",
    "transit tracker",
    "public transit analytics",
    "ride history",
    "transit leaderboard",
    "CO2 savings",
    "transit app",
    "Chicago L tracker",
    "CTA bus tracker",
  ],
  authors: [{ name: "Transit Stats" }],
  creator: "Transit Stats",
  publisher: "Transit Stats",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.transitstats.co",
    siteName: "Transit Stats",
    title: "Transit Stats — Chicago Transit Data & CTA Statistics Made Personal",
    description:
      "The best CTA tracker app — view Chicago transit data, in-depth CTA stats, city leaderboards, and measure your CO₂ impact. Free for iOS and Android.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Transit Stats — Chicago Transit Data & CTA Statistics Made Personal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transit Stats — Chicago Transit Data & CTA Statistics Made Personal",
    description:
      "The best CTA tracker app — view Chicago transit data, in-depth CTA stats, city leaderboards, and measure your CO₂ impact.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.transitstats.co",
  },
  other: {
    "apple-itunes-app": "app-id=6747690858",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* MobileApplication structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Transit Stats",
              operatingSystem: "iOS, Android",
              applicationCategory: "TravelApplication",
              description:
                "Transit Stats is the best CTA tracker app for Chicago transit. View personal CTA stats and transit data, auto-track rides, climb city leaderboards, unlock achievements, and measure your CO₂ savings.",
              url: "https://www.transitstats.co",
              downloadUrl: [
                "https://apps.apple.com/us/app/transit-stats-cta-analytics/id6747690858",
                "https://play.google.com/store/apps/details?id=com.mycompany.transitstatsapp",
              ],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "36",
              },
              featureList: [
                "Auto live tracking",
                "In-depth transit stats",
                "City leaderboards",
                "Ride history",
                "Achievements system",
                "CO₂ savings tracking",
              ],
            }),
          }}
        />
        {/* WebSite structured data for sitelinks searchbox */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Transit Stats",
              alternateName: ["CTA Tracker", "Chicago Transit Data"],
              url: "https://www.transitstats.co",
            }),
          }}
        />
        {/* Organization structured data for AI search + brand knowledge */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Transit Stats",
              url: "https://www.transitstats.co",
              logo: "https://www.transitstats.co/images/og-image.png",
              description:
                "Transit Stats is a Chicago transit data app that turns your CTA rides into personal statistics — showing real CTA stats, environmental impact, and transit patterns. The leading CTA tracker built in Chicago.",
              sameAs: [
                "https://www.instagram.com/transitstats/",
                "https://www.tiktok.com/@transitstats",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                url: "https://www.transitstats.co/contact",
              },
              areaServed: {
                "@type": "City",
                name: "Chicago",
                sameAs: "https://en.wikipedia.org/wiki/Chicago",
              },
            }),
          }}
        />
      </head>
      <body className={`${notoSans.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
