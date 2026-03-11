import Link from "next/link";
import HorizontalBarChart from "@/components/charts/HorizontalBarChart";

const topCommutesData = [
  { name: "Addison to Lake", value: 117 },
  { name: "Bryn Mawr to Belmont", value: 111 },
  { name: "Grand to Belmont", value: 107 },
  { name: "Belmont to Grand", value: 106 },
  { name: "Merch Mart to Belmont", value: 97 },
  { name: "Sox-35th to Bryn Mawr", value: 92 },
  { name: "Sheridan to LaSalle", value: 92 },
  { name: "Bryn Mawr to Peterson", value: 91 },
  { name: "Sheridan to Kenmore", value: 90 },
  { name: "Lake to Addison", value: 85 },
];

const avgMilesTrainData = [
  { name: "Orange Line", value: 6.4 },
  { name: "Blue Line", value: 5.9 },
  { name: "Purple Line", value: 5.3 },
  { name: "Red Line", value: 4.5 },
  { name: "Brown Line", value: 3.5 },
];

export default function ArticleContent() {
  return (
    <>
      <p>
        The most popular CTA commute routes in Chicago in 2026 based on real
        rider data. See the top origin-destination pairs for trains and buses
        across the city.
      </p>
      <p>
        Where are Chicago CTA riders actually going? Not just which lines they
        ride, but which specific stop-to-stop routes they take the most.
      </p>
      <p>
        We pulled data from 23,000+ tracked rides on{" "}
        <Link href="/">Transit Stats</Link> and ranked the most common
        origin-destination pairs. The results paint a clear picture of how
        Chicagoans move through the city on public transit.
      </p>

      <h2>The Top 15 CTA Commutes in 2026</h2>
      <HorizontalBarChart data={topCommutesData} />
      <ol>
        <li>Addison to Lake (Red Line): 117 rides</li>
        <li>Bryn Mawr to Belmont (Red Line): 111 rides</li>
        <li>Grand to Belmont (Blue Line): 107 rides</li>
        <li>Belmont to Grand (Red Line): 106 rides</li>
        <li>Merchandise Mart to Belmont (Purple Line): 97 rides</li>
        <li>Sox-35th to Bryn Mawr (Red Line): 92 rides</li>
        <li>Sheridan &amp; Wellington to LaSalle &amp; Adams (134 Stockton-LaSalle Express bus): 92 rides</li>
        <li>Bryn Mawr Red Line to Peterson &amp; California (84 Peterson bus): 91 rides</li>
        <li>Sheridan &amp; Broadway to Sheridan &amp; Kenmore (151 Sheridan bus): 90 rides</li>
        <li>Lake to Addison (Red Line): 85 rides</li>
        <li>Peterson &amp; California to Bryn Mawr Red Line (84 Peterson bus): 85 rides</li>
        <li>Roosevelt to Roosevelt &amp; Jefferson (12 Roosevelt bus): 83 rides</li>
        <li>Belmont &amp; Washtenaw to Belmont Red/Brown/Purple Line (77 Belmont bus): 82 rides</li>
        <li>Roosevelt &amp; Jefferson to Roosevelt (12 Roosevelt bus): 79 rides</li>
        <li>Bryn Mawr to Sox-35th (Red Line): 79 rides</li>
      </ol>

      <h2>The Red Line Dominates CTA Commute Patterns</h2>
      <p>
        8 of the top 15 commute pairs are on the{" "}
        <Link href="/most-popular-cta-stops-lines">Red Line</Link>. That
        tracks with what we already know about overall CTA ridership
        statistics. The Red Line carries more riders than any other Chicago L
        train line, and its north-south route through the city connects
        residential neighborhoods to the Loop and major employment centers.
      </p>
      <p>
        What&rsquo;s interesting is that many of these top pairs are mirror
        routes. Addison to Lake is #1, and Lake to Addison is #10. Bryn Mawr
        to Sox-35th is #6, and Sox-35th to Bryn Mawr is #15. These are daily
        commuters taking the same route to work and back.
      </p>

      <h2>CTA Bus Commutes Tell a Different Story</h2>
      <p>
        The bus routes in the top 15 are more neighborhood-focused. The 84
        Peterson shows up twice (both directions between Bryn Mawr Red Line and
        Peterson &amp; California), which is a textbook last-mile connection.
        Riders are taking the Chicago L train for the long haul and then
        hopping on the 84 bus to get home.
      </p>
      <p>
        The 77 Belmont pair from Belmont &amp; Washtenaw to the
        Red/Brown/Purple Line station tells the same story from the west side
        of the neighborhood. People are using east-west bus routes to connect
        to north-south train lines.
      </p>
      <p>
        The 134 Stockton-LaSalle Express pairing (Sheridan &amp; Wellington to
        LaSalle &amp; Adams) is a direct commuter route. It takes North Side
        residents straight to the financial district without transferring.
      </p>

      <h2>Belmont Is the Center of Everything</h2>
      <p>
        Belmont shows up in 5 of the top 15 commute pairs. It&rsquo;s a
        destination from Grand, Bryn Mawr, Merchandise Mart, and Washtenaw.
        It&rsquo;s an origin for trips to Grand. This confirms what our{" "}
        <Link href="/most-popular-cta-stops-lines">
          CTA stop data
        </Link>{" "}
        already showed: Belmont is the single busiest hub in the CTA network
        for Transit Stats users.
      </p>
      <p>
        The convergence of three L lines (Red, Brown, Purple) plus major bus
        routes like the 77 Belmont makes it a natural transfer point for riders
        coming from all directions.
      </p>

      <h2>What the Longest CTA Commutes Look Like</h2>
      <p>
        The data also shows which CTA lines carry riders the farthest per
        trip:
      </p>
      <HorizontalBarChart data={avgMilesTrainData} />
      <ol>
        <li>Orange Line averages 6.4 miles per ride (Midway Airport corridor)</li>
        <li>Blue Line averages 5.9 miles per ride (O&rsquo;Hare corridor)</li>
        <li>Purple Line averages 5.3 miles per ride (Evanston express)</li>
        <li>Red Line averages 4.5 miles per ride</li>
        <li>Brown Line averages 3.5 miles per ride</li>
      </ol>
      <p>
        The Orange and Blue Lines lead because they serve the two airports and
        stretch deep into the suburbs. Brown Line rides tend to be shorter
        because the line winds through dense North Side neighborhoods where
        stops are closer together.
      </p>
      <p>
        For buses, the 192 University of Chicago Hospitals Express tops the
        list at 9.4 miles per ride, followed by the J14 Jeffery Jump at 7.6
        miles. Express bus routes naturally cover more ground since they skip
        stops along the way.
      </p>

      <h2>How We Got This Data</h2>
      <p>
        This data comes from <Link href="/">Transit Stats</Link>, a free CTA
        tracker app that lets Chicago riders track every Ventra card ride and
        see personal analytics. Thousands of riders have logged more than 23,000
        trips, creating one of the most detailed rider-level datasets of CTA
        usage available. Check out our{" "}
        <Link href="/cta-ridership-data">
          full CTA ridership data breakdown
        </Link>{" "}
        and{" "}
        <Link href="/cta-rush-hour-data">
          CTA rush hour analysis
        </Link>{" "}
        for more insights.
      </p>
    </>
  );
}
