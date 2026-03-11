import Link from "next/link";
import DonutChart from "@/components/charts/DonutChart";

export default function ArticleContent() {
  return (
    <>
      <p>
        We analyzed 23,000+ CTA rides in 2026 to measure the real CO2 emissions
        impact of riding public transit in Chicago. Here&rsquo;s how much carbon
        CTA riders actually save.
      </p>
      <p>
        Everyone knows Chicago public transit is better for the environment than
        driving. But how much better? We decided to put real numbers behind it.
      </p>
      <p>
        <Link href="/">Transit Stats</Link> tracked 23,478 CTA rides across
        Chicago and calculated the CO2 savings for every single one. The results
        are bigger than you might think.
      </p>

      <h2>The Numbers</h2>
      <p>
        Across all tracked rides, CTA riders on the Transit Stats platform have
        saved a combined <strong>24,656 kg of CO2</strong>. That&rsquo;s over
        54,000 pounds of carbon dioxide that didn&rsquo;t end up in the
        atmosphere because people chose the bus or train instead of a car.
      </p>
      <p>
        To put that carbon footprint reduction in perspective, 24,656 kg of CO2
        is roughly equivalent to:
      </p>
      <ul>
        <li>Taking 5 cars off the road for an entire year</li>
        <li>Saving over 2,700 gallons of gasoline</li>
        <li>Powering an average American home for nearly 3 years</li>
      </ul>
      <p>
        And that&rsquo;s just from 1,300 riders. Imagine the sustainability
        impact if every CTA rider in Chicago could see these numbers.
      </p>

      <h2>CTA Train vs Bus: Which Saves More CO2?</h2>
      <p>
        Chicago L trains save more CO2 per kilometer than buses because they run
        on electricity and carry more passengers per trip. Here&rsquo;s how the
        CTA ridership numbers break down:
      </p>
      <DonutChart trainRides={12801} busRides={10677} />
      <ul>
        <li>CTA train rides: 12,801 (55%)</li>
        <li>CTA bus rides: 10,677 (45%)</li>
      </ul>
      <p>
        With 82,933 total miles on public transit instead of in cars, CTA riders
        on our platform averaged 32.7 rides per person. That means the typical
        Transit Stats user is saving real, measurable carbon with their daily
        commute. The{" "}
        <Link href="/most-popular-cta-stops-lines">
          Red Line is the most popular CTA line
        </Link>{" "}
        among our riders, accounting for over 5,000 of those tracked trips.
      </p>

      <h2>Why Tracking Your Emissions Impact Matters</h2>
      <p>
        Most people don&rsquo;t think about the environmental impact of their
        commute because they can&rsquo;t see it. You tap your Ventra card, ride
        the Red Line to work, and go about your day. But every one of those
        rides has a measurable CO2 benefit.
      </p>
      <p>
        Transit Stats is a CTA tracker app that calculates your personal CO2
        savings automatically for every ride you take. You can see your daily,
        weekly, monthly, and all-time environmental impact right in the app. It
        turns something invisible into something tangible.
      </p>

      <h2>Chicago&rsquo;s Collective Sustainability Impact</h2>
      <p>
        Chicago has one of the largest public transit systems in the country.
        The CTA serves roughly 1.5 million rides on an average weekday. If even
        a fraction of those riders tracked their environmental impact, the
        collective CO2 savings would be staggering.
      </p>
      <p>
        Our{" "}
        <Link href="/cta-ridership-data">CTA ridership data</Link> from 23,000+
        rides is just a snapshot, but it proves the point. Every CTA ride
        matters. Every bus trip and every Chicago L train commute is a small but
        real contribution to reducing Chicago&rsquo;s carbon footprint.
      </p>
    </>
  );
}
