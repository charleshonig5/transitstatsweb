import Link from "next/link";
import HorizontalBarChart from "@/components/charts/HorizontalBarChart";

// Transit Stats rides through October 31, 2026 (48,306 completed rides).
const topCommutesData = [
  { name: "Belmont to Chicago", value: 220 },
  { name: "Belmont to Grand", value: 203 },
  { name: "Bryn Mawr to Belmont", value: 196 },
  { name: "Sheridan to Kenmore", value: 180 },
  { name: "Belmont to Lake", value: 172 },
  { name: "Kedzie & 54th to Kedzie", value: 168 },
  { name: "Sox-35th to Bryn Mawr", value: 168 },
  { name: "Bryn Mawr to Peterson", value: 162 },
  { name: "Irving Park to Belden", value: 161 },
  { name: "Merch Mart to Belmont", value: 155 },
];

const avgMilesTrainData = [
  { name: "Orange Line", value: 6.8 },
  { name: "Blue Line", value: 5.9 },
  { name: "Purple Line", value: 5.0 },
  { name: "Red Line", value: 4.6 },
  { name: "Green Line", value: 3.9 },
];

export default function ArticleContent() {
  return (
    <>
      <p>
        The most popular CTA commute routes in Chicago, based on real rider data
        from 48,000+ tracked rides through October 2026. See the top
        origin-destination pairs for trains and buses across the city.
      </p>
      <p>
        Where are Chicago CTA riders actually going? We wanted the specific
        stop-to-stop trips people take most, not just the lines they ride.
      </p>
      <p>
        We pulled 48,306 tracked rides from{" "}
        <Link href="/">Transit Stats</Link> and ranked the most common
        origin-destination pairs.
      </p>

      <h2>The top 15 CTA commutes (2026 data)</h2>
      <HorizontalBarChart data={topCommutesData} />
      <ol>
        <li>Belmont to Chicago (Red Line): 220 rides</li>
        <li>Belmont to Grand (Red Line): 203 rides</li>
        <li>Bryn Mawr to Belmont (Red Line): 196 rides</li>
        <li>Sheridan &amp; Broadway to Sheridan &amp; Kenmore (151 Sheridan bus): 180 rides</li>
        <li>Belmont to Lake (Red Line): 172 rides</li>
        <li>Kedzie &amp; 54th Street to Kedzie Orange Line station (52 Kedzie bus): 168 rides</li>
        <li>Sox-35th to Bryn Mawr (Red Line): 168 rides</li>
        <li>Bryn Mawr Red Line to Peterson &amp; California (84 Peterson bus): 162 rides</li>
        <li>Broadway &amp; Irving Park to Clark &amp; Belden (36 Broadway bus): 161 rides</li>
        <li>Merchandise Mart to Belmont (Brown Line): 155 rides</li>
        <li>Belmont to Bryn Mawr (Red Line): 145 rides</li>
        <li>Belmont &amp; Washtenaw to Belmont Red/Brown/Purple Line (77 Belmont bus): 142 rides</li>
        <li>Addison to Lake (Red Line): 141 rides</li>
        <li>Lake to Belmont (Red Line): 141 rides</li>
        <li>Peterson &amp; California to Bryn Mawr Red Line (84 Peterson bus): 141 rides</li>
      </ol>

      <h2>The Red Line dominates CTA commutes</h2>
      <p>
        8 of the top 15 commute pairs are on the{" "}
        <Link href="/most-popular-cta-stops-lines">Red Line</Link>. No other L
        line comes close in our data, and its north-south route connects the
        big North Side neighborhoods to downtown jobs.
      </p>
      <p>
        The top two commutes are both new since our first ranking in March
        2026. Belmont to Chicago and Belmont to Grand weren&rsquo;t in the top
        15 then, and now they lead the list: two Red Line runs from
        Lakeview into River North and the Magnificent Mile area.
      </p>
      <p>
        Many of the top pairs are mirror routes. Bryn Mawr to Belmont is #3,
        and Belmont to Bryn Mawr is #11. Belmont to Lake is #5, and Lake to
        Belmont is #14. That&rsquo;s the same people riding to work and back.
      </p>

      <h2>CTA bus commutes look different</h2>
      <p>
        The bus routes in the top 15 are more neighborhood-focused. The 84
        Peterson shows up twice (both directions between Bryn Mawr Red Line and
        Peterson &amp; California), which is a textbook last-mile connection.
        Riders are taking the Chicago L train for the long haul and then
        hopping on the 84 bus to get home.
      </p>
      <p>
        The same thing happens elsewhere in the city. The 77 Belmont pair from
        Belmont &amp; Washtenaw feeds the Red/Brown/Purple Line station. A new
        entry since March, the 52 Kedzie from Kedzie &amp; 54th Street, feeds
        the Kedzie Orange Line station on the Southwest Side. Riders take the
        bus to the train, then the train downtown.
      </p>
      <p>
        The other two bus pairs are short neighborhood trips: the 151 Sheridan
        from Sheridan &amp; Broadway to Sheridan &amp; Kenmore, and the 36
        Broadway from Irving Park down to Clark &amp; Belden in Lincoln Park.
      </p>

      <h2>Belmont is the center of everything</h2>
      <p>
        Belmont shows up in 8 of the top 15 commute pairs. It&rsquo;s the
        origin for trips to Chicago, Grand, Lake, and Bryn Mawr, and the
        destination from Bryn Mawr, Merchandise Mart, Lake, and the 77 Belmont
        bus. This confirms what our{" "}
        <Link href="/most-popular-cta-stops-lines">
          CTA stop data
        </Link>{" "}
        already showed: Belmont is the single busiest hub in the CTA network
        for Transit Stats users.
      </p>
      <p>
        Three L lines (Red, Brown, and Purple) and the 77 Belmont bus all meet
        there, so riders transfer at Belmont from every direction.
      </p>

      <h2>The longest CTA commutes</h2>
      <p>
        The data also shows which CTA lines carry riders the farthest per
        trip:
      </p>
      <HorizontalBarChart data={avgMilesTrainData} />
      <ol>
        <li>Orange Line averages 6.8 miles per ride (Midway Airport corridor)</li>
        <li>Blue Line averages 5.9 miles per ride (O&rsquo;Hare corridor)</li>
        <li>Purple Line averages 5.0 miles per ride (Evanston express)</li>
        <li>Red Line averages 4.6 miles per ride</li>
        <li>Green Line averages 3.9 miles per ride</li>
      </ol>
      <p>
        The Orange and Blue Lines lead because they connect the Loop to the
        city&rsquo;s two airports, and the Blue Line runs on to Forest Park.
        Brown Line rides are among the shortest, averaging 3.7 miles, because
        the line winds through dense North Side neighborhoods where stops are
        closer together. Pink Line rides are the shortest of all, at 2.9 miles.
      </p>
      <p>
        For buses, the J14 Jeffery Jump tops the list at 7.6 miles per ride,
        followed by the 192 University of Chicago Hospitals Express at 6.7 miles
        and the 147 Outer DuSable Lake Shore Express at 6.2 miles. Express bus
        routes naturally cover more ground since they skip stops along the way.
      </p>

      <h2>How we got this data</h2>
      <p>
        This data comes from <Link href="/">Transit Stats</Link>, a free CTA
        tracker app that lets Chicago riders track every ride and see their own
        stats. Thousands of riders have logged more than 48,000 trips through
        October 31, 2026, and each one records where it started and ended,
        which is what makes a ranking like this possible. Check out our{" "}
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
