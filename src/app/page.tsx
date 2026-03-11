import type { Metadata } from "next";
import Image from "next/image";
import DownloadCTA from "@/components/DownloadCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Transit Stats | Chicago Transit Data & CTA Statistics Made Personal",
  description:
    "Transit Stats turns your Chicago CTA rides into personal data and stats. Auto-track rides, view transit insights, and measure CO₂ savings. Free on iOS & Android.",
  alternates: { canonical: "https://www.transitstats.co" },
};

/* ------------------------------------------------------------------ */
/*  Feature data                                                       */
/* ------------------------------------------------------------------ */
const features = [
  {
    icon: "/images/emoji/emoji-tracking.svg",
    iconW: 33,
    iconH: 44,
    title: "Auto live tracking",
    body: (
      <>
        One tap starts the magic. Transit Stats is a{" "}
        <strong>CTA tracker that automatically logs your ride in real-time</strong>,
        capturing distance, time, and route details as you go. Smart GPS detects
        your line and stops across Chicago transit, and we handle everything
        else with battery-optimized tracking that never gets in your way.
      </>
    ),
    image: "/images/feature-tracking.png",
    alt: "CTA tracker feature showing real-time Chicago transit ride logging with distance, time, and route details",
  },
  {
    icon: "/images/emoji/emoji-stats.svg",
    iconW: 44,
    iconH: 44,
    title: "In-depth CTA stats",
    body: (
      <>
        See how your daily commutes add up with detailed CTA statistics. Track your{" "}
        <strong>total distance, ride time, number of trips, CO₂ emissions saved,</strong>{" "}
        and even your <strong>most used line.</strong> Compare your Chicago transit data
        over time with weekly, monthly, and yearly views, all personalized to
        your transit habits.
      </>
    ),
    image: "/images/feature-stats.png",
    alt: "In-depth CTA statistics dashboard showing transit data including distance, ride time, trips, and CO₂ saved",
  },
  {
    icon: "/images/emoji/emoji-leaderboards.svg",
    iconW: 44,
    iconH: 44,
    title: "City leaderboards",
    body: (
      <>
        Compete with other riders across the city and climb the ranks. Whether
        you&apos;re taking the most trips, traveling the greatest distance, or
        saving the most emissions,{" "}
        <strong>Transit Stats shows you where you stand.</strong> Filter by time
        period to see your progress and motivation build over time.
      </>
    ),
    image: "/images/feature-leaderboards.png",
    alt: "Chicago transit leaderboards showing CTA rider rankings for trips, distance, and emissions saved",
  },
  {
    icon: "/images/emoji/emoji-history.svg",
    iconW: 44,
    iconH: 44,
    title: "Ride history",
    body: (
      <>
        View a complete history of your past rides in one place. See when,
        where, and how you traveled — sorted by recency, and filterable by
        transit type.{" "}
        <strong>
          Explore your personal coverage map to discover which stops you&apos;ve
          visited and track your progress
        </strong>{" "}
        across Chicago&apos;s entire transit network.
      </>
    ),
    image: "/images/feature-history.png",
    alt: "CTA ride history showing past trips, coverage map, and stops visited across Chicago's transit network",
  },
  {
    icon: "/images/emoji/emoji-achievements.svg",
    iconW: 44,
    iconH: 44,
    title: "Unlock achievements",
    body: (
      <>
        Every mile, every ride, and every streak counts. Our{" "}
        <strong>
          Achievements System is designed to celebrate your transit milestones
        </strong>{" "}
        and keep you motivated. From your first ride to mastering every CTA
        line, there&apos;s always a new goal to reach.
      </>
    ),
    image: "/images/feature-achievements.png",
    alt: "Transit Stats achievements system with CTA milestones, ride streaks, and Chicago transit line mastery badges",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO (white, rounded bottom to reveal orange) ===== */}
      <div className="animate-[hero-slide-down_0.7s_ease-out_both] overflow-hidden rounded-b-[36px] bg-white">
        <section className="relative pt-10 pb-10 md:pt-14 md:pb-[74px]">
          <div className="container flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-6">
            {/* Left — copy */}
            <div className="relative z-10 w-full flex flex-col gap-12 lg:shrink-0 lg:basis-[44%]">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  <h1 className="animate-[hero-fade-up_0.6s_ease-out_0.3s_both] text-4xl font-bold leading-[1.2] text-brand md:text-5xl lg:text-6xl lg:leading-[72px]">
                    CTA transit data{" "}
                    <span className="font-normal">made personal</span>
                  </h1>
                  <p className="animate-[hero-fade-up_0.6s_ease-out_0.45s_both] max-w-[90%] text-sm text-dark md:text-base">
                    <strong>
                      Transit Stats turns your CTA rides into meaningful,
                      personal data.{" "}
                    </strong>
                    Every ride on Chicago transit saves you money and helps the
                    environment, and Transit Stats shows you exactly how much.
                    Get detailed CTA statistics, city leaderboards, achievements,
                    ride history, and in-depth transit data you&apos;ve never
                    seen before!
                  </p>
                </div>

                {/* Social proof — marquee on mobile, static row on sm+ */}
                <div className="animate-[hero-fade-up_0.6s_ease-out_0.6s_both] -m-[30px] overflow-hidden p-[30px] sm:m-0 sm:overflow-visible sm:p-0">
                  <div className="flex w-max gap-3 animate-[marquee_12s_linear_infinite] sm:w-auto sm:flex-wrap sm:gap-4 sm:animate-none">
                    {/* Original cards */}
                    <div className="flex shrink-0 flex-col whitespace-nowrap rounded-[10px] bg-white px-4 py-3 shadow-[0_0_30px_rgba(0,0,0,0.08)] sm:transition-all sm:duration-200 sm:hover:-translate-y-1 sm:hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                      <span className="flex items-center gap-1.5 text-xl font-bold text-brand md:text-2xl">
                        4.7
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-brand" aria-hidden="true">
                          <path d="M10 1.25l2.47 5.01 5.53.8-4 3.9.94 5.51L10 13.77l-4.94 2.6.94-5.51-4-3.9 5.53-.8L10 1.25z" />
                        </svg>
                      </span>
                      <span className="mt-0.5 text-xs font-medium uppercase tracking-widest text-dark/40">Rating</span>
                    </div>
                    <div className="flex shrink-0 flex-col whitespace-nowrap rounded-[10px] bg-white px-4 py-3 shadow-[0_0_30px_rgba(0,0,0,0.08)] sm:transition-all sm:duration-200 sm:hover:-translate-y-1 sm:hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                      <span className="text-xl font-bold text-brand md:text-2xl">1,500+</span>
                      <span className="mt-0.5 text-xs font-medium uppercase tracking-widest text-dark/40">Active users</span>
                    </div>
                    <div className="flex shrink-0 flex-col whitespace-nowrap rounded-[10px] bg-white px-4 py-3 shadow-[0_0_30px_rgba(0,0,0,0.08)] sm:transition-all sm:duration-200 sm:hover:-translate-y-1 sm:hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                      <span className="text-xl font-bold text-brand md:text-2xl">100% Free</span>
                      <span className="mt-0.5 text-xs font-medium uppercase tracking-widest text-dark/40">On iOS &amp; Android</span>
                    </div>
                    {/* Cloned cards for seamless loop */}
                    <div className="flex shrink-0 flex-col whitespace-nowrap rounded-[10px] bg-white px-4 py-3 shadow-[0_0_30px_rgba(0,0,0,0.08)] sm:hidden" aria-hidden="true">
                      <span className="flex items-center gap-1.5 text-xl font-bold text-brand">
                        4.7
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-brand" aria-hidden="true">
                          <path d="M10 1.25l2.47 5.01 5.53.8-4 3.9.94 5.51L10 13.77l-4.94 2.6.94-5.51-4-3.9 5.53-.8L10 1.25z" />
                        </svg>
                      </span>
                      <span className="mt-0.5 text-xs font-medium uppercase tracking-widest text-dark/40">Rating</span>
                    </div>
                    <div className="flex shrink-0 flex-col whitespace-nowrap rounded-[10px] bg-white px-4 py-3 shadow-[0_0_30px_rgba(0,0,0,0.08)] sm:hidden" aria-hidden="true">
                      <span className="text-xl font-bold text-brand">1,500+</span>
                      <span className="mt-0.5 text-xs font-medium uppercase tracking-widest text-dark/40">Active users</span>
                    </div>
                    <div className="flex shrink-0 flex-col whitespace-nowrap rounded-[10px] bg-white px-4 py-3 shadow-[0_0_30px_rgba(0,0,0,0.08)] sm:hidden" aria-hidden="true">
                      <span className="text-xl font-bold text-brand">100% Free</span>
                      <span className="mt-0.5 text-xs font-medium uppercase tracking-widest text-dark/40">On iOS &amp; Android</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* App Store buttons */}
              <div className="animate-[hero-fade-up_0.6s_ease-out_0.75s_both] flex flex-wrap gap-4 sm:gap-6">
                <a
                  href="https://apps.apple.com/us/app/transit-stats-cta-analytics/id6747690858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 whitespace-nowrap rounded-[100px] bg-brand px-6 py-3 text-white transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_20px_rgba(247,117,44,0.4)]"
                  aria-label="Download Transit Stats on the App Store"
                >
                  <svg width="32" height="38" viewBox="0 0 32 38" fill="currentColor" aria-hidden="true">
                    <path d="M26.43 19.94c-.05-4.56 3.73-6.75 3.9-6.86-2.12-3.1-5.43-3.53-6.62-3.58-2.82-.29-5.49 1.66-6.92 1.66-1.43 0-3.65-1.62-5.99-1.58-3.08.05-5.93 1.8-7.52 4.56-3.2 5.55-.82 13.78 2.3 18.3 1.53 2.21 3.36 4.69 5.76 4.6 2.31-.09 3.18-1.49 5.97-1.49 2.79 0 3.58 1.49 6.02 1.44 2.49-.04 4.06-2.25 5.58-4.47 1.76-2.57 2.48-5.05 2.53-5.18-.06-.02-4.85-1.86-4.9-7.4zM21.87 6.21c1.28-1.54 2.14-3.66 1.9-5.79-1.84.07-4.05 1.22-5.36 2.75-1.17 1.35-2.19 3.51-1.92 5.58 2.04.16 4.12-1.04 5.38-2.54z" />
                  </svg>
                  <span className="flex flex-col items-start text-left">
                    <span className="text-xs leading-tight">Download on the</span>
                    <span className="text-lg font-semibold leading-tight">App Store</span>
                  </span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.mycompany.transitstatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 whitespace-nowrap rounded-[100px] bg-brand px-6 py-3 text-white transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_20px_rgba(247,117,44,0.4)]"
                  aria-label="Get Transit Stats on Google Play"
                >
                  <svg width="34" height="38" viewBox="0 0 34 38" fill="none" aria-hidden="true">
                    <path d="M0.83 1.76v34.48l18.1-17.24L0.83 1.76z" fill="#4285F4" />
                    <path d="M0.83 1.76L18.93 19l5.57-5.22L0.83 1.76z" fill="#34A853" />
                    <path d="M0.83 36.24L24.5 24.22 18.93 19 0.83 36.24z" fill="#EA4335" />
                    <path d="M24.5 24.22l-5.57-5.22 5.57-5.22 9.22 5.22-9.22 5.22z" fill="#FBBC05" />
                  </svg>
                  <span className="flex flex-col items-start text-left">
                    <span className="text-xs leading-tight uppercase">Get it on</span>
                    <span className="text-lg font-semibold leading-tight">Google Play</span>
                  </span>
                </a>
              </div>
            </div>

            {/* Right — phone mockups */}
            <div className="animate-[hero-fade-up_0.8s_ease-out_0.5s_both] w-full lg:flex-1">
              <Image
                src="/images/hero-phones.png"
                alt="Transit Stats CTA tracker app showing Chicago transit data, live ride tracking, ride history, and coverage map"
                width={769}
                height={683}
                className="h-auto w-full scale-110 lg:origin-right"
                priority
              />
            </div>
          </div>
        </section>
      </div>

      {/* ===== FEATURES (on orange gradient bg) ===== */}
      <section
        className="py-10 md:py-[74px]"
        aria-labelledby="features-heading"
      >
        <h2 id="features-heading" className="sr-only">
          Core Features
        </h2>
        <div className="container flex flex-col gap-10 md:gap-14">
          {features.map((feature, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <article
                key={feature.title}
                className={`flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <ScrollReveal direction={isReversed ? "right" : "left"} className="order-1 w-full flex-1 lg:order-none">
                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-center gap-5">
                      <Image src={feature.icon} alt="" width={feature.iconW} height={feature.iconH} className="h-9 w-auto" aria-hidden="true" />
                      <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl lg:text-4xl">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-6 text-white md:text-base md:leading-7">
                      {feature.body}
                    </p>
                  </div>
                </ScrollReveal>

                {/* Image */}
                <ScrollReveal direction={isReversed ? "left" : "right"} delay={100} className="order-2 w-full flex-1 lg:order-none">
                  <div className="flex items-center justify-center">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={744}
                      height={727}
                      className="h-auto w-full max-w-[818px] transition-transform duration-300 hover:scale-[1.03]"
                    />
                  </div>
                </ScrollReveal>
              </article>
            );
          })}
        </div>
      </section>

      {/* ===== BEYOND THE DATA (full-bleed white, rounded top corners) ===== */}
      <section
        className="w-full rounded-[36px] bg-white py-10 md:py-[74px]"
        style={{ boxShadow: "0 0 55px rgba(0, 0, 0, 0.16)" }}
      >
        <div className="container flex flex-col gap-10 md:gap-14">
              {/* Climate change */}
              <article className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
                <ScrollReveal direction="left" className="flex-1">
                  <div className="flex flex-col gap-3.5">
                    <h3 className="text-2xl font-semibold leading-tight text-brand md:text-3xl lg:text-4xl">
                      Every transit ride fights climate change
                    </h3>
                    <p className="text-sm text-dark md:text-base">
                      When you choose the train or bus over driving, you&apos;re
                      making a difference.{" "}
                      <strong>
                        Transit Stats shows you exactly how much CO₂ you save
                        with every ride
                      </strong>{" "}
                      – and how Chicago riders are collectively helping the
                      planet.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={100} className="w-full flex-1">
                  <Image
                    src="/images/illustration-climate.png"
                    alt="Chicago transit CO₂ savings illustration showing environmental impact of CTA rides versus driving"
                    width={365}
                    height={311}
                    className="h-auto w-full max-w-[420px] mx-auto transition-transform duration-300 hover:scale-105"
                  />
                </ScrollReveal>
              </article>

              {/* Supported cities */}
              <article className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
                <ScrollReveal direction="left" delay={100} className="order-2 lg:order-1 w-full flex-1">
                  <Image
                    src="/images/illustration-cities.png"
                    alt="CTA bus and Chicago cityscape illustration representing supported Chicago transit systems"
                    width={329}
                    height={311}
                    className="h-auto w-full max-w-[420px] mx-auto transition-transform duration-300 hover:scale-105"
                  />
                </ScrollReveal>
                <ScrollReveal direction="right" className="order-1 lg:order-2 flex-1">
                  <div className="flex flex-col gap-3.5">
                    <h3 className="text-2xl font-semibold text-brand md:text-3xl lg:text-4xl">
                      Supported cities
                    </h3>
                    <p className="text-sm text-dark md:text-base">
                      Transit Stats currently supports{" "}
                      <strong>Chicago transit — including every CTA train line and bus route.</strong>{" "}
                      We pull real-time CTA data to power ride tracking, stats,
                      and leaderboards across the entire network. More cities
                      coming soon.
                    </p>
                  </div>
                </ScrollReveal>
              </article>

              {/* Data safety */}
              <article className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
                <ScrollReveal direction="left" className="flex-1">
                  <div className="flex flex-col gap-3.5">
                    <h3 className="text-2xl font-semibold leading-tight text-brand md:text-3xl lg:text-4xl">
                      Data safety and security
                    </h3>
                    <p className="text-sm text-dark md:text-base">
                      Transit Stats collects only the essentials needed to show
                      you real-time transit information.{" "}
                      <strong>
                        We don&apos;t collect or sell personal information to
                        third parties
                      </strong>
                      , and we never track sensitive data or financial
                      information. Your account data is protected with
                      industry-standard security measures and is automatically
                      deleted when you close your account.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal direction="right" delay={100} className="w-full flex-1">
                  <Image
                    src="/images/illustration-security.png"
                    alt="Shield and lock illustration representing data privacy and industry-standard security protection"
                    width={365}
                    height={311}
                    className="h-auto w-full max-w-[420px] mx-auto transition-transform duration-300 hover:scale-105"
                  />
                </ScrollReveal>
              </article>

            {/* ── Download CTA ── */}
            <div className="mt-4 md:mt-10">
              <DownloadCTA />
            </div>
          </div>
      </section>
    </>
  );
}
