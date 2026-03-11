import type { Metadata } from "next";
import Image from "next/image";
import DownloadCTA from "@/components/DownloadCTA";

export const metadata: Metadata = {
  title: "FAQ — Transit Stats — CTA Tracker & Chicago Transit Data Questions",
  description:
    "FAQ about Transit Stats, Chicago's CTA tracker. Learn how ride tracking works, CTA data usage, battery impact, privacy, Ventra compatibility, and more.",
  alternates: { canonical: "https://www.transitstats.co/faq" },
  openGraph: {
    title: "FAQ — Transit Stats — CTA Tracker & Chicago Transit Data Questions",
    description:
      "FAQ about Transit Stats, Chicago's CTA tracker. Learn how ride tracking works, CTA data usage, battery impact, privacy, Ventra compatibility, and more.",
    url: "https://www.transitstats.co/faq",
  },
};

const faqs = [
  {
    icon: "/images/emoji/emoji-train.svg",
    iconW: 32,
    iconH: 32,
    question: "How does ride tracking work?",
    answer:
      "You can start tracking a ride with one tap. Transit Stats acts as your personal CTA tracker, using GPS and real-time CTA data to automatically detect your train line, bus route, direction, and stops as you ride. It works across all CTA L lines (Red, Blue, Brown, Green, Orange, Pink, Purple, and Yellow) and every CTA bus route in Chicago. If you forget to track live, you can easily add rides manually later with our smart autofill feature that estimates time and distance using official Chicago transit data.",
  },
  {
    icon: "/images/emoji/emoji-battery.svg",
    iconW: 21,
    iconH: 28,
    question: "Will this drain my battery?",
    answer:
      "Nope. Transit Stats is optimized for minimal battery usage, even during long CTA commutes. We use smart GPS polling that adapts to your movement and only tracks location during active rides. Most users see less than 2% additional battery drain per day, even with regular Chicago transit tracking. The app is designed to run efficiently in the background so you can track every CTA ride without worrying about your phone dying before you reach your stop.",
  },
  {
    icon: "/images/emoji/emoji-achievements.svg",
    iconW: 44,
    iconH: 44,
    question: "Is my data private?",
    answer:
      "Absolutely. Your privacy is a top priority. Transit Stats only stores location data during active ride tracking and never shares your personal information with third parties. Your ride history, stats, and account data are kept private and secure. We don\u2019t sell your data to advertisers or data brokers. Period. You can also delete your account and all associated data at any time from within the app.",
  },
  {
    icon: "/images/emoji/emoji-bus.svg",
    iconW: 32,
    iconH: 32,
    question: "Do I need a Ventra account to use this app?",
    answer:
      "Nope. Transit Stats works completely independently from Ventra. You don\u2019t need to connect or link your Ventra card, Ventra account, or any payment method to use the app. While Ventra handles your CTA fare payments, Transit Stats focuses on something totally different: turning your Chicago transit rides into personal data and statistics. Think of it this way. Ventra gets you on the train. Transit Stats shows you what happens after you tap in, like how far you rode, how much CO\u2082 you saved, where you rank on city leaderboards, and your complete CTA ride history.",
  },
  {
    icon: "/images/emoji/emoji-free.svg",
    iconW: 28,
    iconH: 28,
    question: "Is Transit Stats free?",
    answer:
      "Yes! The entire core app is 100% free to use, including CTA ride tracking, in-depth stats, achievements, and city leaderboards. You get full access to all your transit data without paying a cent. Transit Stats Pro ($2.99 one-time purchase) removes ads and supports continued development, but every feature stays free forever. We believe every Chicago rider deserves access to their own stats.",
  },
  {
    icon: "/images/emoji/emoji-leaderboards.svg",
    iconW: 44,
    iconH: 44,
    question: "How often do leaderboards update?",
    answer:
      "Your personal stats and rankings update in real-time the moment you complete a ride. Citywide leaderboards refresh hourly to ensure fair competition across all Chicago riders. You can filter by time period (weekly, monthly, yearly, and all-time) to see where you stack up in categories like most CTA trips, greatest distance, and most CO\u2082 saved.",
  },
  {
    icon: "/images/emoji/emoji-flag.svg",
    iconW: 32,
    iconH: 32,
    question: "Do I need to keep location services on?",
    answer:
      "Only if you want to use live CTA ride tracking. When location services are on, Transit Stats can automatically detect when you board a CTA train or bus and track your ride in real-time. If you prefer to add rides manually, you can turn off location services and still use all of Transit Stats\u2019 features like achievements, leaderboards, transit stats, and ride history. Either way, your Chicago transit data stays private and location is never tracked when you\u2019re not actively using the app.",
  },
  {
    icon: "/images/emoji/emoji-train.svg",
    iconW: 32,
    iconH: 32,
    question: "What CTA lines and bus routes does Transit Stats support?",
    answer:
      "Transit Stats supports every CTA train line and bus route in Chicago. That includes all eight L lines (Red, Blue, Brown, Green, Orange, Pink, Purple, and Yellow) plus the full CTA bus network with over 100 routes. Whether you're commuting on the Red Line from Howard to 95th or catching the #8 Halsted bus, the app tracks your ride and adds it to your personal transit stats. We update our route data regularly to match CTA service changes so your tracking stays accurate.",
  },
  {
    icon: "/images/emoji/emoji-stats.svg",
    iconW: 44,
    iconH: 44,
    question: "How are CO\u2082 savings calculated?",
    answer:
      "Every time you track a CTA ride, Transit Stats calculates how much carbon dioxide you saved compared to driving the same distance alone in a car. We use EPA emissions data for the average passenger vehicle (about 400 grams of CO\u2082 per mile) and subtract the per-rider emissions of CTA trains and buses. The difference is your savings. Over time these add up fast. The average Chicago CTA rider in our app saves over 2,000 pounds of CO\u2082 per year just by choosing public transit over driving.",
  },
  {
    icon: "/images/emoji/emoji-history.svg",
    iconW: 44,
    iconH: 44,
    question: "Can I see my complete CTA ride history?",
    answer:
      "Yes. Transit Stats saves every ride you track and organizes it into a complete CTA ride history. You can scroll back through all your past trips and see the date, time, route, direction, stops, distance, and CO\u2082 saved for each one. You can also filter by train or bus, sort by date or distance, and view monthly or yearly breakdowns. It's like having a personal logbook of every CTA trip you've ever taken in Chicago.",
  },
  {
    icon: "/images/emoji/emoji-tracking.svg",
    iconW: 33,
    iconH: 44,
    question: "Does Transit Stats work on both iPhone and Android?",
    answer:
      "Yes. Transit Stats is available as a free download on both the Apple App Store for iPhone and Google Play for Android. The app works the same on both platforms with full access to live CTA ride tracking, personal transit stats, achievements, city leaderboards, and CO\u2082 savings. Your account syncs across devices so you can switch phones without losing your Chicago transit data or ride history.",
  },
  {
    icon: "/images/emoji/emoji-achievements.svg",
    iconW: 44,
    iconH: 44,
    question: "What are achievements and how do I unlock them?",
    answer:
      "Achievements are milestones you earn by riding CTA. Transit Stats tracks your rides and automatically awards achievements when you hit certain goals, like completing your first 10 rides, riding all eight L lines, or logging 100 miles on CTA buses. There are dozens of achievements to unlock across categories like distance, frequency, and exploration. They give you something fun to work toward and help you discover parts of the Chicago transit system you might not have tried yet.",
  },
];

export default function FAQPage() {
  return (
    <div className="rounded-b-[36px] bg-white">
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
      <div className="container flex flex-col gap-16 py-10 md:py-[74px] lg:gap-20">
        {/* Heading */}
        <h1 className="text-4xl font-bold leading-[1.2] text-brand md:text-5xl lg:text-6xl lg:leading-[72px]">
          FAQ
        </h1>

        {/* FAQ items */}
        <div className="flex flex-col gap-14 lg:gap-20">
          {faqs.map((faq) => (
            <article key={faq.question} className="flex flex-col gap-3.5">
              <div className="flex items-center gap-5">
                <Image src={faq.icon} alt="" width={faq.iconW} height={faq.iconH} className="h-8 w-auto" aria-hidden="true" />
                <h2 className="text-2xl font-semibold leading-tight text-brand md:text-3xl lg:text-4xl">
                  {faq.question}
                </h2>
              </div>
              <p className="text-sm leading-6 text-dark md:text-base md:leading-7">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>

        {/* ── Download CTA ── */}
        <DownloadCTA />
      </div>
    </div>
  );
}
