import Link from "next/link";
import StatGrid from "@/components/charts/StatGrid";
import DonutChart from "@/components/charts/DonutChart";

const bigPictureStats = [
  { value: "23,478", label: "Total rides" },
  { value: "82,933", label: "Miles traveled" },
  { value: "5,847", label: "Hours on the CTA" },
  { value: "32.7", label: "Avg rides per user" },
];

export default function ArticleContent() {
  return (
    <>
      <p>
        Real CTA ridership statistics from thousands of Chicago riders and 23,000
        trips in 2026. How Chicagoans commute, which routes dominate, and what
        the data reveals about Chicago public transit.
      </p>
      <p>
        We built <Link href="/">Transit Stats</Link>, a CTA tracker app, to
        help individual Chicago L train riders track their rides. But when you
        zoom out and look at the data from thousands of users, patterns start to
        emerge about how Chicago actually commutes.
      </p>
      <p>
        Here&rsquo;s what 23,478 tracked CTA rides tell us about public transit
        in Chicago.
      </p>

      <h2>The Big Picture: CTA Ridership Data in 2026</h2>
      <StatGrid stats={bigPictureStats} />
      <ul>
        <li>Total rides: 23,478</li>
        <li>Miles traveled: 82,933</li>
        <li>Hours on the CTA: 5,847</li>
        <li>Average rides per user: 32.7</li>
      </ul>
      <p>
        That last number is interesting. The average Transit Stats user has
        logged nearly 33 rides, which suggests these aren&rsquo;t casual
        riders. These are daily commuters who tap their Ventra cards and rely on
        public transit as their primary way of getting around the city. All
        those miles add up to a real environmental impact. Our riders have
        saved over{" "}
        <Link href="/co2-savings-cta-riders">24,656 kg of CO2</Link> by
        choosing the CTA over driving.
      </p>

      <h2>CTA Train Riders Slightly Outnumber Bus Riders</h2>
      <p>
        Out of 23,478 total rides, 12,801 were on CTA trains and 10,677 were on
        buses. That&rsquo;s a 55/45 split favoring the Chicago L train.
      </p>
      <DonutChart trainRides={12801} busRides={10677} />
      <ul>
        <li>CTA train rides: 12,801 (55%)</li>
        <li>CTA bus rides: 10,677 (45%)</li>
      </ul>
      <p>
        This doesn&rsquo;t mean more Chicagoans ride trains than buses overall.
        CTA system-wide ridership data actually shows bus ridership is higher.
        But Transit Stats users skew slightly toward train riders, likely
        because live GPS tracking works especially well on fixed rail routes.
      </p>

      <h2>The North Side Dominates CTA Ridership</h2>
      <p>
        Look at the{" "}
        <Link href="/most-popular-cta-stops-lines">
          busiest CTA stops
        </Link>{" "}
        and a clear geographic pattern emerges. Belmont, Fullerton, Addison,
        Bryn Mawr, Sheridan. The top stops are overwhelmingly on the North Side
        of Chicago.
      </p>
      <p>
        The top bus routes tell the same story. The 36 Broadway, 77 Belmont, and
        151 Sheridan all run through North Side neighborhoods like Lakeview,
        Lincoln Park, Edgewater, and Uptown.
      </p>
      <p>
        This likely reflects the demographics of early Transit Stats adopters
        rather than CTA ridership overall. But it does highlight just how
        transit-dependent Chicago&rsquo;s North Side neighborhoods really are.
      </p>

      <h2>Nearly 6,000 Hours on the CTA</h2>
      <p>
        Chicago riders on our platform have collectively spent 5,847 hours on
        the CTA. That&rsquo;s over 243 days of nonstop riding. If one person
        tried to ride for that long straight, it would take them from January
        through most of August without stopping.
      </p>
      <p>
        The average CTA commute time works out to about 15 minutes per trip,
        which lines up with typical Chicago commute patterns for short to medium
        distance trips within the city.
      </p>

      <h2>What This Data Means for Chicago Transit</h2>
      <p>
        Transit Stats is still a small sample compared to the CTA&rsquo;s total
        daily ridership. But what makes this CTA ridership data unique is that
        it comes from individual riders tracking their personal habits over
        time, not from turnstile counts or fare transactions.
      </p>
      <p>
        This gives us a rider&rsquo;s-eye view of Chicago public transit. We
        can see not just which stops are busy, but how individual people move
        through the system day after day, and measure the{" "}
        <Link href="/co2-savings-cta-riders">
          real CO2 emissions savings
        </Link>{" "}
        every one of those rides generates.
      </p>
      <p>
        As <Link href="/">Transit Stats</Link> grows, this dataset will only
        get richer. We&rsquo;re building the most detailed picture of how real
        Chicagoans use the CTA, one ride at a time.
      </p>
    </>
  );
}
