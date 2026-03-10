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
    default: "Transit Stats — CTA Transit Analytics Made Personal",
    template: "%s | Transit Stats",
  },
  description:
    "Transit Stats turns your CTA rides into meaningful, personal data. Track rides, view stats, climb leaderboards, and see your CO₂ savings — all for free.",
  keywords: [
    "CTA",
    "Chicago transit",
    "transit tracker",
    "CTA tracker",
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
    title: "Transit Stats — CTA Transit Analytics Made Personal",
    description:
      "Track your CTA rides, view in-depth stats, climb city leaderboards, and measure your CO₂ impact. Free for iOS and Android.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Transit Stats — CTA Transit Analytics Made Personal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transit Stats — CTA Transit Analytics Made Personal",
    description:
      "Track your CTA rides, view in-depth stats, climb city leaderboards, and measure your CO₂ impact.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
                "Transit Stats turns your CTA rides into meaningful, personal data. Track rides automatically, view in-depth stats, climb city leaderboards, and measure your CO₂ savings.",
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
      </head>
      <body className={`${notoSans.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
