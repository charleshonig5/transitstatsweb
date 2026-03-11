import Link from "next/link";
import HorizontalBarChart from "@/components/charts/HorizontalBarChart";

const trainLineData = [
  { name: "Red Line", value: 5136 },
  { name: "Brown Line", value: 2715 },
  { name: "Blue Line", value: 1829 },
  { name: "Purple Line", value: 1129 },
  { name: "Green Line", value: 1006 },
];

const busRouteData = [
  { name: "36 Broadway", value: 891 },
  { name: "77 Belmont", value: 890 },
  { name: "151 Sheridan", value: 763 },
  { name: "22 Clark", value: 696 },
  { name: "8 Halsted", value: 423 },
];

const stopsData = [
  { name: "Belmont", value: 2241 },
  { name: "Fullerton", value: 1079 },
  { name: "Addison", value: 1020 },
  { name: "Chicago", value: 933 },
  { name: "Bryn Mawr", value: 818 },
  { name: "Grand", value: 698 },
  { name: "Clark/Lake", value: 693 },
  { name: "Lake", value: 648 },
  { name: "Sheridan", value: 604 },
  { name: "Jackson", value: 593 },
];

export default function ArticleContent() {
  return (
    <>
      <p>
        The most popular and busiest CTA stops and Chicago L train lines in 2026
        based on real rider data from 23,000+ tracked rides across the L and bus
        network.
      </p>
      <p>
        If you ride the CTA, you probably have a guess about which stops and
        lines are the busiest. But we have the actual CTA ridership statistics
        to back it up.
      </p>
      <p>
        <Link href="/">Transit Stats</Link> tracked over 23,000 rides across
        Chicago&rsquo;s CTA network and broke down exactly which train lines,
        bus routes, and stops riders use the most. Here&rsquo;s what we found.
      </p>

      <h2>The Busiest CTA Train Lines in 2026</h2>
      <p>
        Chicago&rsquo;s L train system has eight lines, but CTA train ridership
        is far from even. The Red Line dominates with 5,136 tracked rides,
        nearly double the second place Brown Line at 2,715 rides.
      </p>
      <HorizontalBarChart data={trainLineData} />
      <ol>
        <li>Red Line: 5,136 rides</li>
        <li>Brown Line: 2,715 rides</li>
        <li>Blue Line: 1,829 rides</li>
        <li>Purple Line: 1,129 rides</li>
        <li>Green Line: 1,006 rides</li>
      </ol>
      <p>
        The Red Line&rsquo;s lead makes sense. It runs north-south through some
        of the city&rsquo;s densest neighborhoods, connecting Edgewater and
        Rogers Park to the Loop and beyond. The Brown Line&rsquo;s strong
        showing reflects its popularity with North Side commuters traveling
        through Lincoln Park, Lakeview, and Lincoln Square.
      </p>

      <h2>The Most Popular CTA Bus Routes</h2>
      <p>
        Chicago&rsquo;s bus network is massive with over 100 routes, but a
        handful of routes see significantly more action than the rest.
      </p>
      <HorizontalBarChart data={busRouteData} />
      <ol>
        <li>36 Broadway: 891 rides</li>
        <li>77 Belmont: 890 rides</li>
        <li>151 Sheridan: 763 rides</li>
        <li>22 Clark: 696 rides</li>
        <li>8 Halsted: 423 rides</li>
      </ol>
      <p>
        The 36 Broadway and 77 Belmont are practically tied at the top. Both
        serve busy North Side corridors and connect riders to major L stations.
        The 151 Sheridan is a lakefront favorite, running along the east side of
        the city from Devon down to Union Station.
      </p>

      <h2>The Most Visited CTA Stops</h2>
      <p>
        When it comes to individual stops, Belmont wins by a landslide with
        2,241 total visits. That&rsquo;s more than double second place
        Fullerton.
      </p>
      <HorizontalBarChart data={stopsData} />
      <ol>
        <li>Belmont: 2,241 rides</li>
        <li>Fullerton: 1,079 rides</li>
        <li>Addison: 1,020 rides</li>
        <li>Chicago: 933 rides</li>
        <li>Bryn Mawr: 818 rides</li>
        <li>Grand: 698 rides</li>
        <li>Clark/Lake: 693 rides</li>
        <li>Lake: 648 rides</li>
        <li>Sheridan: 604 rides</li>
        <li>Jackson: 593 rides</li>
      </ol>
      <p>
        Belmont&rsquo;s dominance is no surprise. It&rsquo;s a transfer point
        for three lines (Red, Brown, and Purple) and sits in the heart of
        Lakeview, one of Chicago&rsquo;s most active neighborhoods. For a
        deeper look at overall ridership patterns, see our{" "}
        <Link href="/cta-ridership-data">
          full CTA ridership data breakdown
        </Link>
        .
      </p>

      <h2>How We Collected This Data</h2>
      <p>
        This data comes from <Link href="/">Transit Stats</Link>, a free CTA
        tracker app that lets Chicago riders track their Ventra card rides and
        see personal transit analytics. Thousands of riders have logged more than
        23,000 rides on the platform, giving us a unique look at how Chicagoans
        actually use Chicago public transit, and how much{" "}
        <Link href="/co2-savings-cta-riders">
          CO2 they save by choosing the CTA
        </Link>
        .
      </p>
    </>
  );
}
