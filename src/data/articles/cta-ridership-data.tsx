import Link from "next/link";
import StatGrid from "@/components/charts/StatGrid";
import DonutChart from "@/components/charts/DonutChart";

// Transit Stats rides through October 31, 2026 (completed rides only).
const bigPictureStats = [
  { value: "48,306", label: "Total rides" },
  { value: "175,143", label: "Miles traveled" },
  { value: "12,298", label: "Hours on the CTA" },
  { value: "64.4", label: "Avg rides per user" },
];

export default function ArticleContent() {
  return (
    <>
      <p>
        Real CTA ridership statistics from thousands of Chicago riders and
        48,000+ trips through October 2026: how Chicagoans commute, which routes
        they use most, and what the numbers say about Chicago public transit.
      </p>
      <p>
        We built <Link href="/">Transit Stats</Link>, a CTA tracker app, so
        individual Chicago riders could track their own rides. Put thousands of
        those riders together and you start to see how the city actually
        commutes.
      </p>
      <p>
        This breakdown covers 48,306 tracked CTA rides, more than double the
        23,478 we analyzed when we first published it in March 2026.
      </p>

      <h2>The big picture: CTA ridership data in 2026</h2>
      <StatGrid stats={bigPictureStats} />
      <ul>
        <li>Total rides: 48,306</li>
        <li>Miles traveled: 175,143</li>
        <li>Hours on the CTA: 12,298</li>
        <li>Average rides per user: 64.4</li>
      </ul>
      <p>
        The average Transit Stats user has logged about 64 rides, nearly double
        the average in March. Many of our users track a daily commute, which is
        why that number keeps climbing. All those miles have saved over{" "}
        <Link href="/co2-savings-cta-riders">52,000 kg of CO2</Link> compared
        with driving.
      </p>

      <h2>CTA train riders slightly outnumber bus riders</h2>
      <p>
        Out of 48,306 total rides, 26,342 were on CTA trains and 21,964 were on
        buses. That&rsquo;s a 55/45 split favoring the Chicago L train, the same
        split we saw in March.
      </p>
      <DonutChart trainRides={26342} busRides={21964} />
      <ul>
        <li>CTA train rides: 26,342 (55%)</li>
        <li>CTA bus rides: 21,964 (45%)</li>
      </ul>
      <p>
        Citywide, it goes the other way.{" "}
        <Link href="/cta-ridership-growth-2026">
          CTA system-wide ridership data
        </Link>{" "}
        shows buses carry about 59% of all rides. Our users lean toward trains,
        likely because live GPS tracking works especially well on fixed rail
        routes.
      </p>

      <h2>The North Side dominates our data</h2>
      <p>
        Look at the{" "}
        <Link href="/most-popular-cta-stops-lines">
          busiest CTA stops
        </Link>{" "}
        and the geography is obvious: Belmont, Fullerton, Bryn Mawr, Addison.
        The top neighborhood stops are almost all on the North Side, and the
        rest of the top 10 are the downtown stations those riders travel to.
      </p>
      <p>
        The top bus routes say the same thing. The 77 Belmont, 36 Broadway, and
        151 Sheridan all run through North Side neighborhoods like Lakeview,
        Lincoln Park, Edgewater, and Uptown.
      </p>
      <p>
        That probably says more about who downloaded Transit Stats first than
        about CTA ridership overall. Still, these neighborhoods clearly run on
        transit.
      </p>

      <h2>More than 12,000 hours on the CTA</h2>
      <p>
        Chicago riders on our platform have collectively spent 12,298 hours on
        the CTA. That&rsquo;s over 512 days of nonstop riding. One person riding
        that long without a break would have boarded on New Year&rsquo;s Day 2025
        and still been riding at the end of May 2026.
      </p>
      <p>
        The average trip takes about 15 minutes and covers about 3.6 miles,
        which fits the short and medium-length trips most people make within the
        city.
      </p>

      <h2>What this data adds</h2>
      <p>
        Transit Stats is a small sample compared to the CTA&rsquo;s total daily
        ridership. The difference is where the data comes from: individual riders
        tracking their own habits over time, rather than turnstile counts or fare
        transactions.
      </p>
      <p>
        That lets us see things fare data can&rsquo;t, like{" "}
        <Link href="/cta-rush-hour-data">when people ride</Link>, the{" "}
        <Link href="/cta-commute-pairs">routes they repeat every day</Link>,
        and the{" "}
        <Link href="/co2-savings-cta-riders">
          CO2 savings
        </Link>{" "}
        from each trip. The dataset grows with every ride our users log, and
        we&rsquo;ll keep updating these numbers.
      </p>

      <h2>How we collected this data</h2>
      <p>
        These figures count every completed ride logged in Transit Stats through
        October 31, 2026, both live-tracked and manually added. Miles and hours
        come from each ride&rsquo;s recorded distance and duration.
      </p>
    </>
  );
}
