import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Transit Stats",
  description:
    "Frequently asked questions about Transit Stats — how ride tracking works, battery usage, data privacy, Ventra compatibility, pricing, leaderboards, and location services.",
  alternates: { canonical: "https://www.transitstats.co/faq" },
  openGraph: {
    title: "FAQ — Transit Stats",
    description:
      "Frequently asked questions about Transit Stats — how ride tracking works, battery usage, data privacy, Ventra compatibility, pricing, leaderboards, and location services.",
    url: "https://www.transitstats.co/faq",
  },
};

const faqs = [
  {
    icon: "🚃",
    question: "How does ride tracking work?",
    answer:
      "You can start tracking a ride with one tap. The app uses GPS and nearby CTA data to automatically detect your line, direction, and stops in real-time. If you forget to track live, you can easily add rides manually later with our smart autofill feature that estimates time and distance using official CTA data.",
  },
  {
    icon: "🔋",
    question: "Will this drain my battery?",
    answer:
      "No — Transit Stats is optimized for minimal battery usage. We use smart GPS polling that adapts to your movement and only tracks location during active rides. Most users see less than 2% additional battery drain per day, even with regular tracking.",
  },
  {
    icon: "🔒",
    question: "Is my data private?",
    answer:
      "Absolutely. Your location is only stored during active ride tracking and is never shared with third parties. All your personal data stays on your device and in your private account.",
  },
  {
    icon: "🚌",
    question: "Do I need a Ventra account to use this app?",
    answer:
      "No — Transit Stats works independently. You don\u2019t need to connect your Ventra account to use the app.",
  },
  {
    icon: "💵",
    question: "Is Transit Stats free?",
    answer:
      "Yes — the entire core app is 100% free to use, including ride tracking, stats, achievements, and leaderboards. Transit Stats Pro ($2.99 one-time purchase) removes ads and supports continued development, but all features remain free forever.",
  },
  {
    icon: "🏆",
    question: "How often do leaderboards update?",
    answer:
      "Personal rankings update in real-time when you complete rides. Citywide leaderboards refresh hourly for all rankings to ensure fair competition.",
  },
  {
    icon: "🚩",
    question: "Do I need to keep location services on?",
    answer:
      "You only need location services enabled if you want to use live tracking or track rides automatically in the background. If you prefer to add rides manually, you can turn off location services and still use all of Transit Stats\u2019 features like achievements, leaderboards, and ride history.",
  },
];

export default function FAQPage() {
  return (
    <div className="rounded-b-[36px] bg-white">
      <div className="container flex flex-col gap-16 py-10 md:py-14 lg:gap-20">
        {/* Heading */}
        <h1 className="text-3xl font-bold leading-[1.2] text-brand md:text-4xl lg:text-5xl lg:leading-[58px]">
          FAQ
        </h1>

        {/* FAQ items */}
        <div className="flex flex-col gap-14 lg:gap-20">
          {faqs.map((faq) => (
            <article key={faq.question} className="flex flex-col gap-3.5">
              <div className="flex items-center gap-5">
                <span
                  className="text-3xl"
                  role="img"
                  aria-hidden="true"
                >
                  {faq.icon}
                </span>
                <h2 className="text-xl font-semibold leading-tight text-brand md:text-2xl lg:text-[28px]">
                  {faq.question}
                </h2>
              </div>
              <p className="text-sm leading-6 text-dark md:text-base md:leading-7">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
