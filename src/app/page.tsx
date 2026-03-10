import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Transit Stats — CTA Transit Analytics Made Personal",
  description:
    "Transit Stats turns your CTA rides into meaningful, personal data. Auto-track rides, view stats, climb leaderboards, unlock achievements, and measure your CO₂ savings. Free on iOS and Android.",
  alternates: { canonical: "https://www.transitstats.co" },
};

/* ------------------------------------------------------------------ */
/*  Feature data                                                       */
/* ------------------------------------------------------------------ */
const features = [
  {
    icon: "🚦",
    title: "Auto live tracking",
    body: (
      <>
        One tap starts the magic. Transit Stats{" "}
        <strong>automatically tracks your public transit ride in real-time</strong>,
        logging distance, time, and route details as you go. Smart GPS detects
        your line and stops, and we handle everything else with
        battery-optimized tracking that never gets in your way.
      </>
    ),
    image: "/images/feature-tracking.png",
    alt: "Auto live tracking feature showing real-time ride logging with distance, time, and route details",
  },
  {
    icon: "📊",
    title: "In-depth stats",
    body: (
      <>
        See how your daily commutes add up. Track your{" "}
        <strong>total distance, ride time, number of trips, CO₂ emissions saved,</strong>{" "}
        and even your <strong>most used line.</strong> Compare trends over time
        with weekly, monthly, and yearly views — all personalized to your
        transit habits.
      </>
    ),
    image: "/images/feature-stats.png",
    alt: "In-depth stats showing total distance, ride time, trips, CO₂ saved, and most used CTA line",
  },
  {
    icon: "🏆",
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
    alt: "City leaderboards showing rankings for most trips, greatest distance, and most emissions saved",
  },
  {
    icon: "📓",
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
    alt: "Ride history with complete list of past rides, coverage map, and stops visited across Chicago's transit network",
  },
  {
    icon: "🔓",
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
    alt: "Achievements system with transit milestones, ride streaks, and CTA line mastery badges",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO (white, rounded bottom to reveal orange) ===== */}
      <div className="rounded-b-[36px] bg-white">
        <section className="relative overflow-hidden py-10 md:py-14">
          <div className="container flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
            {/* Left — copy */}
            <div className="w-full flex-1 flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  <h1 className="text-3xl font-bold leading-[1.2] text-brand md:text-4xl lg:text-5xl lg:leading-[58px]">
                    CTA transit analytics{" "}
                    <span className="font-normal">made personal</span>
                  </h1>
                  <p className="text-sm text-dark md:text-base">
                    <strong>
                      Transit Stats turns your public transit rides into
                      meaningful, personal data.{" "}
                    </strong>
                    Every transit ride saves you money and helps the
                    environment, and Transit Stats shows you exactly how much.
                    Plus, you get city leaderboards, achievements, ride history,
                    and in-depth insights you&apos;ve never seen before!
                  </p>
                </div>

                {/* Badges */}
                <div className="flex items-center gap-11">
                  <span className="flex items-center gap-2.5">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                      <rect x="2" y="6" width="24" height="16" rx="3" fill="#16a34a" />
                      <rect x="6" y="9" width="4" height="8" rx="1" fill="white" />
                      <rect x="12" y="6" width="4" height="14" rx="1" fill="#F7752C" />
                    </svg>
                    <span className="text-sm text-dark md:text-base">Available for free</span>
                  </span>
                  <span className="flex items-center gap-2.5">
                    <svg width="20" height="28" viewBox="0 0 20 28" fill="none" aria-hidden="true">
                      <rect x="4" y="5" width="12" height="22" rx="3" fill="#16a34a" />
                      <rect x="4" y="1" width="12" height="6" rx="2" fill="#84cc16" />
                      <circle cx="10" cy="13" r="3" fill="white" />
                    </svg>
                    <span className="text-sm text-dark md:text-base">Battery efficient</span>
                  </span>
                </div>
              </div>

              {/* App Store buttons */}
              <div className="flex gap-6">
                <a
                  href="#"
                  className="flex h-14 w-48 items-center justify-center gap-3 rounded-[100px] bg-brand text-white transition-colors hover:bg-brand-dark"
                  aria-label="Download Transit Stats on the App Store"
                >
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor" aria-hidden="true">
                    <path d="M16.52 12.46c-.03-2.85 2.33-4.22 2.44-4.29-1.33-1.94-3.4-2.21-4.14-2.24-1.76-.18-3.43 1.04-4.33 1.04-.9 0-2.28-1.01-3.74-.99-1.93.03-3.71 1.12-4.7 2.85-2 3.47-.51 8.62 1.44 11.44.96 1.38 2.1 2.93 3.6 2.88 1.44-.06 1.99-.93 3.73-.93s2.24.93 3.76.9c1.56-.03 2.54-1.41 3.49-2.8 1.1-1.6 1.55-3.15 1.58-3.23-.03-.01-3.03-1.16-3.06-4.63zM13.67 3.88C14.47 2.92 15.02 1.6 14.87.25c-1.14.05-2.52.76-3.33 1.72-.73.84-1.37 2.19-1.2 3.48 1.27.1 2.57-.65 3.33-1.57z" />
                  </svg>
                  <span className="flex flex-col items-start text-left">
                    <span className="text-[10px] leading-tight">Download on the</span>
                    <span className="text-base font-semibold leading-tight">App Store</span>
                  </span>
                </a>
                <a
                  href="#"
                  className="flex h-14 w-48 items-center justify-center gap-2.5 rounded-[100px] bg-brand text-white transition-colors hover:bg-brand-dark"
                  aria-label="Get Transit Stats on Google Play"
                >
                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" aria-hidden="true">
                    <path d="M0.5 1.1v19.8l10.4-9.9L0.5 1.1z" fill="#4285F4" />
                    <path d="M0.5 1.1l10.4 9.9 3.2-3-13.6-6.9z" fill="#34A853" />
                    <path d="M0.5 20.9l13.6-6.9-3.2-3L0.5 20.9z" fill="#EA4335" />
                    <path d="M14.1 14l-3.2-3 3.2-3 5.3 3L14.1 14z" fill="#FBBC05" />
                  </svg>
                  <span className="flex flex-col items-start text-left">
                    <span className="text-[10px] leading-tight uppercase">Get it on</span>
                    <span className="text-base font-semibold leading-tight">Google Play</span>
                  </span>
                </a>
              </div>
            </div>

            {/* Right — phone mockups */}
            <div className="relative h-[545px] w-[531px] shrink-0 hidden lg:block">
              <div className="absolute -inset-24 opacity-[0.06]">
                <Image
                  src="/images/transit-map-bg.png"
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
              <div className="absolute left-0 top-[22px] w-[260px] origin-top-left -rotate-[5deg]">
                <div className="overflow-hidden rounded-[32px] border-[3px] border-gray-800 bg-white shadow-2xl">
                  <Image
                    src="/images/hero-phone-tracking.png"
                    alt="Transit Stats tracking screen showing live ride tracking, ride streak, weekly stats, and CTA service alerts"
                    width={283}
                    height={528}
                    className="w-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute right-0 top-0 w-[260px] origin-top-right rotate-[5deg]">
                <div className="overflow-hidden rounded-[32px] border-[3px] border-gray-800 bg-white shadow-2xl">
                  <Image
                    src="/images/hero-phone-history.png"
                    alt="Transit Stats history screen showing ride history, coverage map, and 23.4% of CTA stops visited"
                    width={283}
                    height={528}
                    className="w-full"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:hidden">
              <div className="w-[260px] overflow-hidden rounded-[32px] border-[3px] border-gray-800 bg-white shadow-2xl">
                <Image
                  src="/images/hero-phone-tracking.png"
                  alt="Transit Stats tracking screen showing live ride tracking, ride streak, weekly stats, and CTA service alerts"
                  width={283}
                  height={528}
                  className="w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== FEATURES (on orange gradient bg) ===== */}
      <section
        className="py-10 md:py-14"
        aria-labelledby="features-heading"
      >
        <h2 id="features-heading" className="sr-only">
          Core Features
        </h2>
        <div className="container flex flex-col">
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
                <div className="w-full flex-1 flex flex-col gap-3.5">
                  <div className="flex items-center gap-5">
                    <span className="text-4xl" role="img" aria-hidden="true">
                      {feature.icon}
                    </span>
                    <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl lg:text-4xl">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-white md:text-base md:leading-7">
                    {feature.body}
                  </p>
                </div>

                {/* Image with orange glow */}
                <div className="relative h-[465px] w-full flex-1 flex items-center justify-center overflow-hidden">
                  {/* Orange radial glow behind phone */}
                  <div
                    className="absolute h-[235px] w-[473px] rounded-[250px]"
                    style={{
                      background:
                        "radial-gradient(ellipse 50% 50% at 50% 50%, #F7752C 0%, #FF5C00 100%)",
                    }}
                    aria-hidden="true"
                  />
                  {/* Export each feature graphic as a single image from Figma */}
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={476}
                    height={465}
                    className="relative z-10"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ===== BEYOND THE DATA (full-bleed white, rounded top corners) ===== */}
      <section
        className="w-full rounded-[36px] bg-white py-10 md:py-14"
        style={{ boxShadow: "0 0 55px rgba(0, 0, 0, 0.16)" }}
        aria-labelledby="beyond-heading"
      >
        <div className="container flex flex-col gap-10">
            <h2
              id="beyond-heading"
              className="text-center text-2xl font-bold text-brand md:text-3xl lg:text-4xl"
            >
              Beyond the data
            </h2>

            <div className="flex w-full flex-col gap-10">
              {/* Climate change */}
              <article className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-20">
                <div className="flex flex-1 flex-col gap-3.5">
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
                <div className="w-full flex-1">
                  {/* Export illustration from Figma as SVG/PNG */}
                  <Image
                    src="/images/illustration-climate.png"
                    alt="Illustration of data analytics showing CO₂ savings from choosing public transit over driving"
                    width={486}
                    height={415}
                    className="w-full h-auto"
                  />
                </div>
              </article>

              {/* Supported cities */}
              <article className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-20">
                <div className="order-2 lg:order-1 w-full flex-1">
                  <Image
                    src="/images/illustration-cities.png"
                    alt="Illustration of a CTA bus and Chicago cityscape representing supported transit systems"
                    width={439}
                    height={415}
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 lg:order-2 flex flex-1 flex-col gap-3.5">
                  <h3 className="text-2xl font-semibold text-brand md:text-3xl lg:text-4xl">
                    Supported cities
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
              </article>

              {/* Data safety */}
              <article className="flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:gap-20">
                <div className="flex flex-1 flex-col gap-3.5">
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
                <div className="w-full flex-1">
                  <Image
                    src="/images/illustration-security.png"
                    alt="Shield and lock illustration representing data privacy and industry-standard security protection"
                    width={486}
                    height={415}
                    className="w-full h-auto"
                  />
                </div>
              </article>
            </div>
          </div>
      </section>
    </>
  );
}
