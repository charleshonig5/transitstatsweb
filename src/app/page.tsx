import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import AppStoreButton from "@/components/AppStoreButton";
import ContactButton from "@/components/ContactButton";
import DownloadCTA from "@/components/DownloadCTA";
import ScrollReveal from "@/components/ScrollReveal";
import InfoSwitcher, { type InfoItem } from "@/components/home/InfoSwitcher";
import LeaderboardPreview from "@/components/home/LeaderboardPreview";
import PhonePair from "@/components/home/PhonePair";
import ReviewsMarquee, { type Review } from "@/components/home/ReviewsMarquee";
import { getBoards } from "@/lib/leaderboard-data";
import { shareMetadata } from "@/lib/seo";

/* The page is rebuilt at most once an hour, which is how often the live
   leaderboard is read again. */
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Transit Stats | Chicago CTA transit app for personal stats",
  description:
    "Transit Stats turns your Chicago CTA rides into meaningful, personal data. Get detailed statistics, leaderboards, achievements, ride history, and more.",
  alternates: { canonical: "https://www.transitstats.co" },
  ...shareMetadata({
    title: "Transit Stats | Chicago CTA transit app for personal stats",
    description:
      "Transit Stats turns your Chicago CTA rides into meaningful, personal data. Get detailed statistics, leaderboards, achievements, ride history, and more.",
    path: "",
  }),
};

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
const stats: { value: ReactNode; label: string }[] = [
  {
    value: (
      <>
        4.7
        <Image src="/images/home/star.svg" alt="" width={23} height={21} aria-hidden="true" />
      </>
    ),
    label: "Rating",
  },
  { value: "1,600+", label: "Active Users" },
  { value: "Free", label: "on iOS" },
];

/* The four notes floating over the hero phones. Each sits at the design's
   spot on the 769 x 772 art grid (--u is one design pixel), so the whole
   picture scales as one piece. On small phones the notes stop shrinking
   (--c, see the hero) and grow inward from their outer edge, so the two on
   the left keep their left edge and the two on the right their right edge.
   `pop` is the note's entrance: how far off its spot it starts (in design
   pixels), how far turned, and when. The four come in out of order and at
   uneven gaps on purpose, so they read as tossed on, not dealt out. */
const chips = [
  {
    icon: "/images/emoji/emoji-tracking.svg",
    iconW: 14.78,
    iconH: 19.7,
    lines: ["Effortless", "tracking of", "every trip."],
    side: "left", left: 63, top: 277,
    pop: { x: -12, y: 14, tilt: -9, delay: 360 },
  },
  {
    icon: "/images/home/chip-leaf.svg",
    iconW: 19.45,
    iconH: 19.45,
    lines: ["See your", "environmental", "impact."],
    side: "right", left: 561, top: 277,
    pop: { x: 12, y: -10, tilt: 7, delay: 530 },
  },
  {
    icon: "/images/home/chip-bar-chart.svg",
    iconW: 18.24,
    iconH: 18.24,
    /* The drawing sits 0.6 inside its 19.45 slot in the design. */
    iconInset: 0.61,
    lines: ["Track your", "public", "transit stats."],
    side: "left", left: 79, top: 457,
    pop: { x: -14, y: -8, tilt: 6, delay: 590 },
  },
  {
    icon: "/images/home/chip-trophy.svg",
    iconW: 19.45,
    iconH: 19.45,
    lines: ["Compete on", "the city", "leaderboards."],
    side: "right", left: 545, top: 457,
    pop: { x: 10, y: 12, tilt: -8, delay: 430 },
  },
];

/* ------------------------------------------------------------------ */
/*  Feature cards                                                      */
/* ------------------------------------------------------------------ */
const features = [
  {
    title: "Auto live tracking",
    body: (
      <>
        <strong>
          Track your Chicago CTA rides in real-time with just a press of a
          button.
        </strong>{" "}
        We automatically detect your line and stops, so you can watch your time
        and distance&nbsp;grow.
      </>
    ),
    inner: {
      src: "/images/home/screen-tracking.png",
      alt: "Transit Stats tracking screen with the Start live ride button, ride streak and weekly stats",
    },
    outer: {
      src: "/images/home/screen-ride-complete.png",
      alt: "Transit Stats ride complete screen showing the line, stops, distance and time of a finished CTA ride",
    },
  },
  {
    title: "In-depth CTA stats",
    /* The design sets this card's text 411 wide, not 439 like the others. */
    textWidth: "xl:w-[411px]",
    body: (
      <>
        See how your transit usage adds up with detailed stats.{" "}
        <strong>Track your distance, time, trips, emissions saved,</strong> and
        much more. Celebrate milestones by unlocking special achievements as
        you hit each&nbsp;goal.
      </>
    ),
    inner: {
      src: "/images/home/screen-achievements.png",
      alt: "Transit Stats achievements screen with CTA milestones and badges",
    },
    outer: {
      src: "/images/home/screen-stats.png",
      alt: "Transit Stats statistics screen showing CTA rides, distance, time and emissions saved",
    },
  },
  {
    title: "City leaderboards",
    body: (
      <>
        <strong>
          Compete with other users across the city and climb the ranks.
        </strong>{" "}
        Transit Stats shows you where you stand compared to your city&rsquo;s
        most active transit&nbsp;enthusiasts.
      </>
    ),
    inner: {
      src: "/images/home/screen-profile.png",
      alt: "Transit Stats rider profile with ride streak and personal stats",
    },
    outer: {
      src: "/images/home/screen-ranking.png",
      alt: "Transit Stats ranking screen showing the Chicago leaderboard by distance",
    },
  },
  {
    title: "Ride history",
    body: (
      <>
        View a complete{" "}
        <strong>
          history of all your past rides in one place. Explore your personal
          map
        </strong>{" "}
        to see your coverage of the entire transit network build
        over&nbsp;time.
      </>
    ),
    inner: {
      src: "/images/home/screen-coverage.png",
      alt: "Transit Stats coverage map showing the CTA bus stops and stations visited across Chicago",
    },
    outer: {
      src: "/images/home/screen-history.png",
      alt: "Transit Stats ride history listing past CTA trips with line, stops, distance and time",
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Info switcher                                                      */
/* ------------------------------------------------------------------ */
const infoItems: InfoItem[] = [
  {
    title: "Supported cities",
    body: (
      <>
        We currently support <strong>Chicago&rsquo;s CTA transit system.</strong>{" "}
        Boston support is coming soon and many more cities to&nbsp;follow!
      </>
    ),
    image: "/images/home/info-chicago.jpg",
    alt: "The Chicago skyline",
    /* The design's crop: the photo is 769 x 586 in the 580 square, hanging
       189 off the left and 4 off the top. */
    imageClass: "left-[-32.586%]! top-[-0.69%]! h-[101.034%]! w-[132.586%]! max-w-none object-cover",
    imageSizes: "(max-width: 620px) 133vw, 769px",
  },
  {
    title: "Environmental impact",
    body: (
      <>
        Every time you choose the train or bus over driving,{" "}
        <strong>you&rsquo;re making an environmental difference.</strong>{" "}
        Chicago&nbsp;riders have saved over 52,000&nbsp;kg of CO₂ together
        so&nbsp;far.
      </>
    ),
    image: "/images/home/info-climate.jpg",
    alt: "A CTA train on the elevated tracks in downtown Chicago",
    /* The design's crop: the photo is 812 x 616 in the 580 square, pinned
       to the top left. */
    imageClass: "h-[106.207%]! w-[140%]! max-w-none object-cover",
    imageSizes: "(max-width: 620px) 140vw, 812px",
  },
  {
    title: "Data Security",
    body: (
      <>
        We{" "}
        <strong>
          don&rsquo;t collect or sell personal information to
          third&nbsp;parties, and never track sensitive or financial data.
        </strong>{" "}
        Your account is protected with industry-standard security and deleted
        when you close&nbsp;it.
      </>
    ),
    image: "/images/home/info-security.jpg",
    alt: "Code on a laptop screen in warm orange light",
    /* The design's crop: the photo is 585 x 878 in the 580 square, pinned
       to the top left. */
    imageClass: "h-[151.379%]! w-[100.862%]! max-w-none object-cover",
    imageSizes: "(max-width: 620px) 101vw, 585px",
  },
];

/* ------------------------------------------------------------------ */
/*  Reviews                                                            */
/* ------------------------------------------------------------------ */
const reviews: Review[] = [
  {
    source: "reddit",
    quote:
      "This is great! As a big user of Swarm / what used to be Foursquare, stuff like Last.fm, etc. I looooove the idea of this lol. Coverage map is an especially good idea lol.",
  },
  { source: "appstore", quote: "It’s like Strava for tracking transit, love it!" },
  { source: "reddit", quote: "Ridiculous overkill for neurotic transit nerds. I love it." },
  {
    source: "appstore",
    quote: "The app is a really cool concept and I find the UI to be very intuitive.",
  },
  {
    source: "reddit",
    quote:
      "Woah this is so sick. I have to say, as a UI designer the app is really well built, easy to use, and super fast! Awesome job on the backend.",
  },
];

export default async function Home() {
  const boards = await getBoards();
  return (
    /* The whole page sits on the off-white canvas, rounded at the bottom so
       the footer shows on the orange like every other page. */
    <div className="overflow-x-clip rounded-b-[44px] bg-canvas pb-10 md:pb-[74px] xl:pb-[149px]">
      {/* ===== HERO ===== From xl the art starts 27px up under the 96
          header, which puts it 69 from the top of the page as the design
          has it (the header's lower edge covers only empty map). */}
      <section className="pt-10 md:pt-14 xl:-mt-[27px] xl:pt-0">
        <div className="container flex flex-col gap-12 xl:flex-row xl:items-center xl:gap-0">
          {/* Left: copy. From xl it sits 9px above the middle of the art,
              as the design has it. As the page opens the title, the intro,
              the three cards and the buttons rise in one after the other
              (hero-rise in globals.css), a third of the way apart, so the
              whole block takes one second. */}
          <div className="relative z-10 flex w-full flex-col gap-12 xl:-mr-[3px] xl:w-[568px] xl:shrink-0 xl:-translate-y-[9px] xl:gap-16">
            <div className="flex flex-col gap-6">
              {/* The design gives the title and intro a fixed 283 of height. */}
              <div className="flex flex-col gap-3.5 xl:h-[283px]">
                <h1 className="hero-rise text-4xl font-bold leading-[1.2] text-brand md:text-5xl xl:text-6xl xl:leading-[76px]">
                  Personal stats{" "}
                  <span className="block text-balance font-medium xl:whitespace-nowrap">
                    for CTA transit rides
                  </span>
                </h1>
                <p
                  className="hero-rise text-sm text-dark md:max-w-[80%] md:text-base lg:text-xl lg:leading-[27px] xl:max-w-none"
                  style={{ "--rise-delay": "133ms" } as CSSProperties}
                >
                  <strong>
                    Transit Stats turns your Chicago CTA rides into meaningful,
                    personal data.{" "}
                  </strong>
                  Get detailed statistics, leaderboards, achievements, ride
                  history, and more from your public transit&nbsp;usage.
                </p>
              </div>

              {/* Social proof: the three cards side by side at every width.
                  On phones they sit 12 apart so all three fit on one line. */}
              <div
                className="hero-rise flex flex-wrap gap-3 sm:gap-6"
                style={{ "--rise-delay": "267ms" } as CSSProperties}
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex shrink-0 flex-col whitespace-nowrap rounded-[14px] bg-white p-[14px] shadow-[0_0_20px_rgba(0,0,0,0.08)] sm:transition-all sm:duration-200 sm:hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
                  >
                    {/* 26 type sits on its own 36 line so every browser puts
                        the letters at the same height; the pixel is taken
                        back below to keep the design's 35. */}
                    <span className="flex items-center gap-2 text-xl font-bold leading-[27px] text-brand md:-mb-px md:text-[26px] md:leading-[36px]">
                      {stat.value}
                    </span>
                    <span className="mt-0.5 text-sm leading-[19px] text-[#A4A4A4] md:text-base md:leading-[22px]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary: App Store download. Secondary: Contact, the design's
                outlined pill (white, 2px brand outline) at the same height;
                it opens the contact pop-up.
                On phones both are the header button's height. */}
            <div
              className="hero-rise flex flex-wrap gap-3 sm:gap-6"
              style={{ "--rise-delay": "400ms" } as CSSProperties}
            >
              <AppStoreButton size="responsive" tone="brand" />
              <ContactButton className="flex h-12 cursor-pointer items-center whitespace-nowrap rounded-[100px] border-2 border-brand bg-white px-6 text-base font-semibold text-brand transition-all duration-200 hover:scale-105 active:scale-[0.97] sm:h-[68px] sm:px-[34px] sm:text-xl">
                Contact us
              </ContactButton>
            </div>
          </div>

          {/* Right: two phones on a faded map, with four notes over them.
              Everything is placed on the design's 769 x 772 grid and scales
              with the box (--u is one design pixel), so the picture is the
              same at every width. From xl the art runs 14px past the right
              edge of the screen, as the design does (the page wrapper cuts
              it off). Stacked (below xl) the notes' outer edges, 612 apart
              in the design, sit on the page margins, so the picture is as
              big as the column allows and only faded map runs off the
              sides; it is pulled up by the empty band of map above the
              phones, so the phones start one regular gap under the buttons.
              --c sizes the notes: one design pixel, but never under 0.7px,
              which keeps their 12 type at 8.4 or more on small phones.
              The picture builds as the page opens (hero-fade and hero-pop
              in globals.css): the map fades in, each phone pops up from
              its foot, leaning outward, and settles straight, the front
              one first, then the notes pop in. */}
          <div className="@container mx-auto w-full max-w-[612px] shrink-0 xl:mx-0 xl:w-[min(769px,calc(50vw+49px))] xl:max-w-[769px]">
            <div className="relative -ml-[calc(var(--u)*63)] -mt-[calc(var(--u)*104.67)] aspect-[769/772] w-[calc(var(--u)*769)] [--c:max(var(--u),0.7px)] [--u:calc(100cqw/612)] xl:ml-0 xl:mt-0 xl:w-full xl:[--u:calc(100cqw/769)]">
              <Image
                src="/images/home/hero-map.png"
                alt=""
                width={755}
                height={772}
                className="hero-fade absolute left-0 top-[calc(var(--u)*1)] h-auto w-[calc(var(--u)*755)]"
                aria-hidden="true"
                priority
              />
              <Image
                src="/images/home/hero-phone-ranking.png"
                alt=""
                width={300}
                height={545}
                className="hero-pop absolute left-[calc(var(--u)*334.75)] top-[calc(var(--u)*104.67)] h-auto w-[calc(var(--u)*299.67)] origin-bottom"
                style={{ "--pop-y": "calc(var(--u) * 36)", "--pop-tilt": "7deg", "--pop-scale": 0.88, "--pop-delay": "150ms" } as CSSProperties}
                aria-hidden="true"
                priority
              />
              <Image
                src="/images/home/hero-phone-tracking.png"
                alt="Transit Stats CTA tracker app showing Chicago transit data, live ride tracking, ride streak, weekly stats and the city ranking"
                width={300}
                height={545}
                className="hero-pop absolute left-[calc(var(--u)*103.63)] top-[calc(var(--u)*104.67)] h-auto w-[calc(var(--u)*299.67)] origin-bottom"
                style={{ "--pop-y": "calc(var(--u) * 36)", "--pop-tilt": "-7deg", "--pop-scale": 0.88, "--pop-delay": "60ms" } as CSSProperties}
                priority
              />
              {chips.map((chip) => (
                <div
                  key={chip.icon}
                  className="hero-pop absolute flex h-[calc(var(--c)*106)] w-[calc(var(--c)*114)] flex-col justify-center gap-[calc(var(--c)*6)] rounded-[calc(var(--c)*14)] bg-white/90 px-[calc(var(--c)*12)] text-[length:calc(var(--c)*12)] font-medium leading-[calc(var(--c)*16)] text-dark shadow-[0_0_30px_rgba(0,0,0,0.08)] inset-ring inset-ring-white backdrop-blur-[1.5px]"
                  style={{
                    left:
                      chip.side === "left"
                        ? `calc(var(--u) * ${chip.left})`
                        : `calc(var(--u) * ${chip.left + 114} - var(--c) * 114)`,
                    top: `calc(var(--u) * ${chip.top + 53} - var(--c) * 53)`,
                    "--pop-x": `calc(var(--u) * ${chip.pop.x})`,
                    "--pop-y": `calc(var(--u) * ${chip.pop.y})`,
                    "--pop-tilt": `${chip.pop.tilt}deg`,
                    "--pop-scale": 0.6,
                    "--pop-ms": "320ms",
                    "--pop-delay": `${chip.pop.delay}ms`,
                  } as CSSProperties}
                >
                  <Image
                    src={chip.icon}
                    alt=""
                    width={chip.iconW}
                    height={chip.iconH}
                    style={{
                      width: `calc(var(--c) * ${chip.iconW})`,
                      height: "auto",
                      margin: `calc(var(--c) * ${chip.iconInset ?? 0})`,
                    }}
                    aria-hidden="true"
                  />
                  {/* The browser sets the letters two thirds of a pixel
                      higher in the line than Figma does. */}
                  <p className="relative top-[calc(var(--c)*0.66)]">
                    {chip.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10 flex flex-col gap-[94px] md:mt-[74px] md:gap-[148px] xl:mt-[31px] xl:gap-50">
        {/* ===== FEATURES ===== */}
        <section aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">
            Core Features
          </h2>
          <div className="container flex flex-col gap-10 md:gap-14 xl:gap-[54px]">
            {features.map((feature, i) => {
              /* Odd cards: text left, phones right. Even cards: mirrored. */
              const phonesLeft = i % 2 !== 0;
              return (
                <ScrollReveal key={feature.title} direction="up" className="feature-card">
                  {/* The gradient is mixed in sRGB, the way the design tool
                      mixes it (Tailwind's default mix comes out a touch
                      yellower mid-card). The inner shadow (0 -5 30, black 6%)
                      lies over the card's contents, phones included, as in
                      the design. */}
                  <article className="relative flex flex-col overflow-hidden rounded-[44px] bg-linear-to-b/srgb from-brand to-brand-dark shadow-[0_0_30px_rgba(0,0,0,0.08)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_-5px_30px_rgba(0,0,0,0.06)] xl:h-[460px]">
                    <div
                      className={`flex flex-col gap-3.5 p-8 pb-0 md:p-14 md:pb-0 xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:p-0 ${
                        feature.textWidth ?? "xl:w-[439px]"
                      } ${phonesLeft ? "xl:right-[100px]" : "xl:left-[100px]"}`}
                    >
                      <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl lg:text-4xl xl:text-[42px] xl:leading-[57px]">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-6 text-white md:text-base md:leading-7 xl:text-xl xl:leading-[27px]">
                        {feature.body}
                      </p>
                    </div>
                    <PhonePair
                      inner={feature.inner}
                      outer={feature.outer}
                      outerSide={phonesLeft ? "left" : "right"}
                      className={`mt-10 px-8 md:px-14 xl:absolute xl:top-10 xl:mt-0 xl:w-[493px] xl:px-0 ${
                        phonesLeft ? "xl:left-[60px]" : "xl:left-[647px]"
                      }`}
                    />
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ===== CITIES, SECURITY, ENVIRONMENT ===== */}
        <section aria-labelledby="beyond-heading">
          <h2 id="beyond-heading" className="sr-only">
            Why Transit Matters
          </h2>
          <ScrollReveal direction="up" className="container">
            <InfoSwitcher items={infoItems} />
          </ScrollReveal>
        </section>

        {/* ===== REVIEWS ===== */}
        <section aria-labelledby="reviews-heading">
          <h2 id="reviews-heading" className="sr-only">
            What riders say
          </h2>
          <ReviewsMarquee reviews={reviews} />
        </section>

        {/* ===== LIVE LEADERBOARD ===== Left out if the boards could not
            be read when the page was built. */}
        {boards && (
          <section>
            <ScrollReveal direction="up" className="container">
              <LeaderboardPreview
                title="Live leaderboard"
                body={
                  <>
                    Take a look at the live leaderboard, straight from the app.
                    Filter by metric and time to see who&rsquo;s in&nbsp;front.
                  </>
                }
                boards={boards}
              />
            </ScrollReveal>
          </section>
        )}

        {/* ===== DOWNLOAD CTA ===== */}
        <div className="container">
          <DownloadCTA size="lg" />
        </div>
      </div>
    </div>
  );
}
