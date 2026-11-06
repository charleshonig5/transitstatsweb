import Link from "next/link";
import HorizontalBarChart from "@/components/charts/HorizontalBarChart";

// Transit Stats rides through October 31, 2026 (48,306 completed rides).
const trainLineData = [
  { name: "Red Line", value: 10407 },
  { name: "Brown Line", value: 6237 },
  { name: "Blue Line", value: 3828 },
  { name: "Purple Line", value: 2003 },
  { name: "Green Line", value: 1656 },
];

const busRouteData = [
  { name: "77 Belmont", value: 1712 },
  { name: "36 Broadway", value: 1691 },
  { name: "151 Sheridan", value: 1459 },
  { name: "22 Clark", value: 1249 },
  { name: "8 Halsted", value: 1034 },
];

const stopsData = [
  { name: "Belmont", value: 5307 },
  { name: "Fullerton", value: 2480 },
  { name: "Chicago", value: 1922 },
  { name: "Bryn Mawr", value: 1705 },
  { name: "Addison", value: 1663 },
  { name: "Grand", value: 1454 },
  { name: "Clark/Lake", value: 1439 },
  { name: "Lake", value: 1406 },
  { name: "Jackson", value: 1145 },
  { name: "Merchandise Mart", value: 1127 },
];

export default function ArticleContent() {
  return (
    <>
      <p>
        These are the most popular CTA stops, L lines, and bus routes, based on
        48,000+ real rides tracked across the L and bus network through October
        2026.
      </p>
      <p>
        If you ride the CTA, you probably already have a guess about which stops
        and lines are the busiest. We counted.{" "}
        <Link href="/">Transit Stats</Link> riders have logged twice as many
        rides as when we first published this breakdown in March 2026, and a
        few of the rankings have changed since then.
      </p>

      <h2>The busiest CTA train lines in 2026</h2>
      <p>
        Chicago&rsquo;s L train system has eight lines, but CTA train ridership
        is far from even. The Red Line dominates with 10,407 tracked rides, about
        two-thirds more than the second-place Brown Line at 6,237 rides.
      </p>
      <HorizontalBarChart data={trainLineData} />
      <ol>
        <li>Red Line: 10,407 rides</li>
        <li>Brown Line: 6,237 rides</li>
        <li>Blue Line: 3,828 rides</li>
        <li>Purple Line: 2,003 rides</li>
        <li>Green Line: 1,656 rides</li>
      </ol>
      <p>
        The Red Line&rsquo;s lead makes sense. It runs north-south through some
        of the city&rsquo;s densest neighborhoods, connecting Edgewater and
        Rogers Park to the Loop and beyond. The Brown Line&rsquo;s strong
        showing reflects its popularity with North Side commuters traveling
        through Lincoln Park, Lakeview, and Lincoln Square. Of the top five
        lines, the Brown Line has grown fastest since March, more than doubling
        its tracked rides.
      </p>

      <h2>The most popular CTA bus routes</h2>
      <p>
        Chicago has over 100 bus routes, but our riders lean hard on a handful
        of them.
      </p>
      <HorizontalBarChart data={busRouteData} />
      <ol>
        <li>77 Belmont: 1,712 rides</li>
        <li>36 Broadway: 1,691 rides</li>
        <li>151 Sheridan: 1,459 rides</li>
        <li>22 Clark: 1,249 rides</li>
        <li>8 Halsted: 1,034 rides</li>
      </ol>
      <p>
        The 77 Belmont and 36 Broadway are practically tied at the top, with the
        77 edging ahead since March. Both run through busy North Side corridors
        and connect riders to major L stations. The 151 Sheridan is a lakefront
        favorite, running along the east side of the city from Devon down to
        Union Station.
      </p>

      <h2>The most visited CTA stops</h2>
      <p>
        When it comes to individual stops, Belmont wins by a landslide with
        5,307 total visits (rides starting or ending there). That&rsquo;s more
        than double second-place Fullerton.
      </p>
      <HorizontalBarChart data={stopsData} />
      <ol>
        <li>Belmont: 5,307 visits</li>
        <li>Fullerton: 2,480 visits</li>
        <li>Chicago: 1,922 visits</li>
        <li>Bryn Mawr: 1,705 visits</li>
        <li>Addison: 1,663 visits</li>
        <li>Grand: 1,454 visits</li>
        <li>Clark/Lake: 1,439 visits</li>
        <li>Lake: 1,406 visits</li>
        <li>Jackson: 1,145 visits</li>
        <li>Merchandise Mart: 1,127 visits</li>
      </ol>
      <p>
        Belmont&rsquo;s lead isn&rsquo;t a surprise. Three lines (Red, Brown,
        and Purple) stop there, in the middle of Lakeview. The rest of the list
        splits between North Side neighborhood stations and the downtown stops
        those riders head to, like Chicago, Grand, Clark/Lake, and Jackson. For a deeper look at overall ridership patterns, see our{" "}
        <Link href="/cta-ridership-data">
          full CTA ridership data breakdown
        </Link>
        , or the{" "}
        <Link href="/cta-commute-pairs">stop-to-stop commutes</Link> that connect
        these stations.
      </p>

      <h2>How we collected this data</h2>
      <p>
        This data comes from <Link href="/">Transit Stats</Link>, a free CTA
        tracker app that lets Chicago riders track their rides and see their own
        transit stats. It counts every completed ride logged in the app through
        October 31, 2026, more than 48,000 rides from thousands of riders. We
        also use it to measure how much{" "}
        <Link href="/co2-savings-cta-riders">
          CO2 riders save by choosing the CTA
        </Link>
        . For the system-wide picture, see the latest{" "}
        <Link href="/cta-ridership-growth-2026">CTA ridership growth data</Link>.
      </p>
    </>
  );
}
