import Link from "next/link";
import DonutChart from "@/components/charts/DonutChart";

export default function ArticleContent() {
  return (
    <>
      <p>
        We analyzed 48,000+ tracked CTA rides through October 2026 to measure the
        real CO2 emissions impact of riding public transit in Chicago.
        Here&rsquo;s how much carbon CTA riders actually save.
      </p>
      <p>
        Everyone knows Chicago public transit is better for the environment than
        driving. But how much better? We wanted real numbers.
      </p>
      <p>
        <Link href="/">Transit Stats</Link> riders have tracked 48,306 CTA rides
        across Chicago, and we calculated the CO2 savings for every one of them.
        The total has more than doubled since we first ran the numbers in March
        2026.
      </p>

      <h2>The numbers</h2>
      <p>
        Across all tracked rides, CTA riders on Transit Stats have saved a
        combined <strong>52,073 kg of CO2</strong>. That&rsquo;s nearly 115,000
        pounds of carbon dioxide that stayed out of the air because people took
        the bus or train instead of driving. It works out to about 1.1 kg (2.4
        pounds) per ride.
      </p>
      <p>
        Using the{" "}
        <a
          href="https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          EPA&rsquo;s greenhouse gas equivalencies
        </a>
        , 52,073 kg of CO2 is roughly the same as:
      </p>
      <ul>
        <li>Taking 12 cars off the road for an entire year</li>
        <li>Saving nearly 5,900 gallons of gasoline</li>
        <li>Powering an average American home for about 7 years</li>
      </ul>

      <h2>CTA train vs. bus: which saves more CO2?</h2>
      <p>
        Chicago L trains save more CO2 per kilometer than buses because they run
        on electricity and carry more passengers per trip. Here&rsquo;s how our
        riders&rsquo; trips split between the two:
      </p>
      <DonutChart trainRides={26342} busRides={21964} />
      <ul>
        <li>CTA train rides: 26,342 (55%)</li>
        <li>CTA bus rides: 21,964 (45%)</li>
      </ul>
      <p>
        Those rides covered 175,143 miles on transit instead of in cars, and the
        average rider has logged about 64 trips. The{" "}
        <Link href="/most-popular-cta-stops-lines">
          Red Line is the most popular CTA line
        </Link>{" "}
        among our riders, with more than 10,000 of those tracked trips.
      </p>

      <h2>How we calculate CO2 savings</h2>
      <p>
        Every ride&rsquo;s savings comes from its distance. Transit Stats credits
        0.2 kg of CO2 per kilometer for train rides and 0.15 kg per kilometer
        for bus rides, the emissions avoided by not making the same trip by car.
        A typical 3.6-mile ride saves about 1 kg of CO2.
      </p>

      <h2>Why it helps to see your own number</h2>
      <p>
        Most people don&rsquo;t think about the environmental impact of their
        commute because they can&rsquo;t see it. You tap your Ventra card, ride
        the Red Line to work, and go about your day. Every one of those rides
        still saves a measurable amount of CO2.
      </p>
      <p>
        Transit Stats is a CTA tracker app that adds up your CO2 savings
        automatically for every ride you take. You can see your daily, weekly,
        monthly, and all-time total right in the app.
      </p>

      <h2>What it adds up to for Chicago</h2>
      <p>
        The CTA carried about 1.06 million rides on an average weekday in 2026,
        and{" "}
        <Link href="/cta-ridership-growth-2026">ridership is still growing</Link>.
        At about 1 kg per ride, a round-trip commute five days a week saves
        roughly half a metric ton of CO2 a year.
      </p>
      <p>
        Our{" "}
        <Link href="/cta-ridership-data">CTA ridership data</Link> from 48,000+
        rides is a small sample of all that, but the math scales. Multiply half a
        ton by every daily commuter on the CTA and you get a sense of how much
        driving the system keeps off Chicago&rsquo;s roads.
      </p>
    </>
  );
}
