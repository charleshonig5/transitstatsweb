import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import DownloadCTA from "@/components/DownloadCTA";
import FaqBrowser, { type FaqGroup } from "@/components/FaqBrowser";
import { shareMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "CTA Tracker FAQ",
  description:
    "FAQ about Transit Stats, Chicago's CTA tracker. Learn how ride tracking works, CTA data usage, battery impact, privacy, Ventra compatibility, and more.",
  alternates: { canonical: "https://www.transitstats.co/faq" },
  ...shareMetadata({
    title: "CTA Tracker FAQ | Transit Stats",
    description:
      "FAQ about Transit Stats, Chicago's CTA tracker. Learn how ride tracking works, CTA data usage, battery impact, privacy, Ventra compatibility, and more.",
    path: "/faq",
  }),
};

interface PageFaq {
  category: FaqGroup;
  question: string;
  answer: string;
  /** The answer as shown, when it carries a link. `answer` stays the plain text for the JSON-LD. */
  answerJsx?: ReactNode;
}

const faqs: PageFaq[] = [
  {
    category: "features",
    question: "How does ride tracking work?",
    answer:
      "Tap Start live ride and Transit Stats works as your personal CTA tracker. The app looks for CTA stops within about 150 meters and suggests your line and starting stop, or you can pick them yourself. While you ride, GPS measures your distance, and when you end the ride, the app suggests the stop you got off at. It works on all eight L lines (Red, Blue, Brown, Green, Orange, Pink, Purple, and Yellow) and every CTA bus route. Forgot to track a ride? Add it afterward, and autofill estimates the time and distance from the stops you pick.",
  },
  {
    category: "info",
    question: "Does Transit Stats show real-time CTA arrivals?",
    answer:
      "Yes. The Arrivals tab shows live arrival times for CTA train stations and bus stops, using the CTA’s own Train Tracker and Bus Tracker data. It keeps the stops you use most in one place, lets you search for any stop or route, and with location on, shows the stops nearest you. Transit Stats also shows CTA service alerts, so you’ll hear about delays and reroutes on the lines you ride.",
  },
  {
    category: "info",
    question: "Will this drain my battery?",
    answer:
      "Transit Stats only uses GPS while a live ride is running, and it stops as soon as you end the ride. When you're not riding, the app doesn't use your location at all. A long ride uses more battery than a short one, so if your phone is running low, you can skip live tracking and add the ride by hand afterward.",
  },
  {
    category: "privacy",
    question: "Is my data private?",
    answer:
      "Yes. We store your rides, not your GPS trail: each ride keeps its line, stops, distance, and time, and the app only uses your location during a live ride. We don\u2019t sell your data, and the app has no ads. You can delete your account, including your rides, stats, and profile, anytime from Profile > Account.",
  },
  {
    category: "info",
    question: "Do I need a Ventra account to use this app?",
    answer:
      "Nope. Transit Stats works completely independently from Ventra. You don\u2019t need to connect or link your Ventra card, Ventra account, or any payment method to use the app. While Ventra handles your CTA fare payments, Transit Stats focuses on something totally different: turning your Chicago transit rides into personal data and statistics. Think of it this way. Ventra gets you on the train. Transit Stats shows you what happens after you tap in, like how far you rode, how much CO\u2082 you saved, where you rank on city leaderboards, and your complete CTA ride history.",
  },
  {
    category: "info",
    question: "Is Transit Stats free?",
    answer:
      "Yes! CTA ride tracking, in-depth stats, achievements, and city leaderboards are all free, and you get full access to your transit data without paying a cent. Transit Stats PRO is a $2.99 one-time purchase that lets you export your ride data as a CSV file and supports continued development. We believe every Chicago rider deserves access to their own stats.",
  },
  {
    category: "features",
    question: "How often do leaderboards update?",
    answer:
      "Your own stats update right after every ride. Citywide leaderboards refresh every 2 hours from 5 AM to midnight, Chicago time, so your rank catches up at the next refresh. You can rank by rides, distance, or CO\u2082 saved over the last week, month, year, or all time.",
  },
  {
    category: "privacy",
    question: "Do I need to keep location services on?",
    answer:
      "Only for live ride tracking. With location on, Transit Stats suggests your line and stop when you start a ride and measures your distance as you go. If Background ride tracking is on (Profile > Ride settings), that continues while your phone is locked, but only during a ride you started. With location off, you can still add rides by hand and use your stats, ride history, achievements, and leaderboards.",
  },
  {
    category: "info",
    question: "What CTA lines and bus routes does Transit Stats support?",
    answer:
      "Transit Stats supports every CTA train line and bus route in Chicago. That includes all eight L lines (Red, Blue, Brown, Green, Orange, Pink, Purple, and Yellow) plus the full CTA bus network with over 100 routes. Whether you're commuting on the Red Line from Howard to 95th or catching the #8 Halsted bus, the app tracks your ride and adds it to your personal transit stats. We refresh our route and stop data every month from the CTA’s official schedule data, so new and changed routes show up in the app.",
  },
  {
    category: "features",
    question: "Does Transit Stats show CTA service alerts?",
    answer:
      "Yes. Current CTA service alerts, like delays, reroutes, and station issues, show up on the app\u2019s home screen, and the Service alerts page lists every one. Tap My lines to see only alerts for the L lines, bus routes, and stations you\u2019ve ridden in the last 60 days, or switch to all, train, or bus. Alerts come straight from the CTA and refresh every 10 minutes.",
  },
  {
    category: "features",
    question: "How are CO\u2082 savings calculated?",
    answer:
      "Every ride you track gets a CO\u2082 estimate based on its distance. Transit Stats credits 0.2 kg of CO\u2082 per kilometer on the L and 0.15 kg per kilometer on the bus, compared with making the same trip by car. A typical 3.6-mile ride saves about 1 kg. Across more than 48,000 tracked rides, Transit Stats riders have saved over 52,000 kg of CO\u2082.",
    answerJsx: (
      <>
        Every ride you track gets a CO₂ estimate based on its distance. Transit Stats credits 0.2 kg of CO₂ per kilometer on the L and 0.15 kg per kilometer on the bus, compared with making the same trip by car. A typical 3.6-mile ride saves about 1 kg. Across more than 48,000 tracked rides, Transit Stats riders have saved over 52,000 kg of CO₂.{" "}
        <Link href="/co2-savings-cta-riders" className="text-brand underline underline-offset-2 transition-all hover:text-brand-dark active:opacity-60">See the full CO₂ data</Link>.
      </>
    ),
  },
  {
    category: "features",
    question: "Can I see my complete CTA ride history?",
    answer:
      "Yes. Transit Stats saves every ride you track in a complete CTA ride history. Each ride shows the line, date, time, start and end stops, distance, and how long it took, and you can open any ride to see its route on a map. Filter by all, train, or bus to find a trip. The coverage map shows every stop you've visited, how many times you've been there, and how much of the CTA system you've covered. It's a personal logbook of every CTA trip you've taken.",
  },
  {
    category: "features",
    question: "Can I export my ride data?",
    answer:
      "Yes, with Transit Stats PRO. Go to Profile > Data export and the app turns your complete CTA ride history into a CSV file: the date, start and end times, train or bus, line, stops, distance, duration, and CO₂ saved for every ride. Save it to Files, email it to yourself, or open it in Excel or Google Sheets.",
  },
  {
    category: "info",
    question: "Is Transit Stats available on Android?",
    answer:
      "No. Transit Stats is available for iPhone as a free download on the Apple App Store, with full access to live CTA ride tracking, personal transit stats, achievements, city leaderboards, and CO\u2082 savings. Your account is saved to the cloud, so you can switch iPhones without losing your Chicago transit data or ride history.",
  },
  {
    category: "features",
    question: "What are achievements and how do I unlock them?",
    answer:
      "Achievements are milestones you earn by riding the CTA. Transit Stats checks your rides and awards them automatically. There are 40 in all, covering total rides, distance, CO₂ saved, riding streaks, and exploration, like your first 10 rides, riding every L line, logging 100 miles, or riding 25 different bus routes. They give you something to work toward and a reason to try parts of the Chicago transit system you haven't ridden yet.",
  },
  {
    category: "features",
    question: "Can I see my all-time CTA stats?",
    answer:
      "Yes. Your stats page shows your total CTA rides, distance, time on transit, money spent, CO\u2082 saved, longest ride, and longest riding streak. Filter by train or bus and by the last week, month, year, or all time. Tap any stat for the details, like your top lines or the stops you visit most on your top line. Everything updates automatically after each ride.",
  },
];

export default function FAQPage() {
  return (
    <div className="rounded-b-[36px] bg-canvas">
      {/* FAQPage structured data for Google rich snippets + AI search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.transitstats.co" },
              { "@type": "ListItem", position: 2, name: "FAQ" },
            ],
          }),
        }}
      />
      <div className="container flex flex-col gap-16 py-10 md:py-[74px] lg:gap-20 xl:pt-[87px]">
        <div>
          <FaqBrowser
            title={
              <h1 className="text-4xl font-bold leading-[1.2] text-brand md:text-5xl xl:text-6xl xl:leading-[76px]">
                FAQ
              </h1>
            }
            items={faqs.map((faq) => ({
              category: faq.category,
              question: faq.question,
              text: faq.answer,
              answer: faq.answerJsx ?? faq.answer,
            }))}
          />
        </div>

        {/* ── Download CTA ── */}
        <DownloadCTA />
      </div>
    </div>
  );
}
