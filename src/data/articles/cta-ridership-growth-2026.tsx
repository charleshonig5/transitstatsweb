import Link from "next/link";
import StatGrid from "@/components/charts/StatGrid";
import HorizontalBarChart from "@/components/charts/HorizontalBarChart";
import DonutChart from "@/components/charts/DonutChart";

const bigPictureStats = [
  { value: "373.5M", label: "Total regional rides" },
  { value: "+12.3M", label: "Rides vs last year" },
  { value: "319.2M", label: "CTA rides" },
  { value: "236", label: "Days over 1 million rides" },
];

const ridershipByAgency = [
  { name: "CTA Bus", value: 184 },
  { name: "CTA Rail", value: 135.2 },
  { name: "Metra", value: 38 },
  { name: "Pace", value: 16.4 },
];

const growthByMode = [
  { name: "Metra", value: 8 },
  { name: "CTA Rail", value: 6 },
  { name: "CTA Overall", value: 3 },
  { name: "CTA Bus", value: 1 },
];

export default function ArticleContent() {
  return (
    <>
      <p>
        Chicago CTA ridership grew 3% in 2025, the fourth straight year of growth
        across the regional transit system. Here&rsquo;s the latest CTA ridership
        data and where things stand heading into 2026.
      </p>
      <p>
        Four years after pandemic ridership lows, Chicago&rsquo;s transit network is
        on its strongest growth stretch since recovery began. The{" "}
        <a
          href="https://www.rtachicago.org/about-rta/press-releases/regional-transit-ridership-continues-to-grow-in-2025-with-12-3m-more-rides-year-over-year"
          target="_blank"
          rel="noopener noreferrer"
        >
          Regional Transit Authority
        </a>{" "}
        just released its 2025 numbers, and Chicago has carried that growth into
        2026.
      </p>
      <p>
        We built <Link href="/">Transit Stats</Link> to give individual CTA riders
        insight into their own commutes. But the regional numbers tell a bigger
        story. Here&rsquo;s what the system-wide CTA ridership data shows, and how
        it lines up with what we&rsquo;re seeing in our own rider dataset.
      </p>

      <h2>Chicago Transit Hit 373.5 Million Rides in 2025</h2>
      <StatGrid stats={bigPictureStats} />
      <p>
        The regional system (CTA, Metra, and Pace combined) recorded 373.5 million
        fixed-route rides in 2025, a jump of 12.3 million rides over 2024. Daily
        ridership crossed the one million mark on 236 days of the year.
      </p>
      <ul>
        <li>Total regional rides: 373.5 million</li>
        <li>Year-over-year increase: +12.3 million</li>
        <li>Days over 1 million rides: 236</li>
        <li>CTA systemwide ridership: 319.2 million</li>
      </ul>
      <p>
        &ldquo;For the fourth year in a row, we have seen ridership increases,&rdquo;
        said RTA Executive Director Leanne Redden. That four-year streak means
        Chicago transit is no longer in recovery mode. It&rsquo;s in growth mode.
      </p>

      <h2>CTA Bus Outpaces Rail in Total Volume</h2>
      <p>
        Across the CTA system, riders took 319.2 million trips in 2025. Bus
        ridership came in at 184 million, while rail ridership totaled 135.2
        million. That works out to a 58/42 split favoring buses over the Chicago L
        train.
      </p>
      <DonutChart trainRides={135200000} busRides={184000000} />
      <ul>
        <li>CTA bus rides: 184 million (58%)</li>
        <li>CTA rail rides: 135.2 million (42%)</li>
      </ul>
      <p>
        That ratio actually flips when you look at our own{" "}
        <Link href="/cta-ridership-data">
          Transit Stats ridership data
        </Link>
        , where rail edges out bus 55/45. The difference is sample bias. Our users
        skew toward riders who actively track their commutes, and GPS tracking is
        especially accurate on fixed rail routes, so trains are slightly
        overrepresented in our dataset.
      </p>

      <h2>Total Ridership by Agency in 2025</h2>
      <p>
        Here&rsquo;s how 2025&rsquo;s 373.5 million rides break down across
        Chicago&rsquo;s regional transit agencies (in millions):
      </p>
      <HorizontalBarChart data={ridershipByAgency} valueSuffix="M" />
      <ol>
        <li>CTA Bus: 184 million rides</li>
        <li>CTA Rail: 135.2 million rides</li>
        <li>Metra: 38 million rides</li>
        <li>Pace: 16.4 million rides</li>
      </ol>
      <p>
        The CTA carries the vast majority of regional transit ridership. Combined,
        CTA bus and rail accounted for roughly 85% of all 2025 fixed-route trips
        across the entire region.
      </p>

      <h2>Rail Ridership Grew Faster Than Bus</h2>
      <p>
        Not every part of the system grew at the same pace. Metra led with an 8%
        year-over-year increase, followed by CTA rail at 6%. CTA bus posted a
        smaller 1% gain, and Pace saw ridership dip 3%.
      </p>
      <HorizontalBarChart data={growthByMode} valueSuffix="%" />
      <ol>
        <li>Metra: +8% year over year</li>
        <li>CTA Rail: +6%</li>
        <li>CTA Overall: +3%</li>
        <li>CTA Bus: +1%</li>
        <li>Pace: -3%</li>
      </ol>
      <p>
        The faster growth on rail tracks with what we see in our own data. The{" "}
        <Link href="/most-popular-cta-stops-lines">Red Line</Link> remains the
        single most heavily used line in the CTA network, and it&rsquo;s a major
        driver of overall rail volume.
      </p>

      <h2>CTA Bus Recovery Is Still Below 2019</h2>
      <p>
        Even with 2025&rsquo;s growth, CTA bus ridership remains at 78% of
        pre-pandemic levels. Pace is recovering more slowly at 67%. Rail has
        rebounded faster than bus in most major U.S. cities since 2020, and
        Chicago is no exception.
      </p>
      <p>
        For Chicago, that gap is significant. The CTA bus network is enormous,
        with more than 100 routes covering neighborhoods across the city. Closing
        the recovery gap could mean tens of millions of additional rides per
        year. The{" "}
        <Link href="/most-popular-cta-stops-lines">busiest CTA bus routes</Link>{" "}
        are already running at near pre-pandemic levels, but the broader network
        has more room to grow.
      </p>

      <h2>Accessible Station Upgrades Drove a 22% Ridership Jump</h2>
      <p>
        One of the most notable data points from the RTA report was the impact of
        accessibility upgrades. From August through December 2025, accessible
        rail stations recorded 368,000 more rides than the same period the year
        before, a 22% increase.
      </p>
      <p>
        Better access, more riders. It&rsquo;s one of the cleanest cause-and-effect
        signals in the entire report.
      </p>

      <h2>Thursday Was the Fastest-Growing Day of the Week</h2>
      <p>
        At the regional level, Thursday saw the largest day-of-week percentage
        increase in 2025. Tuesday and Wednesday had the highest overall ride
        totals.
      </p>
      <p>
        That pattern lines up almost exactly with what we found in our own{" "}
        <Link href="/cta-rush-hour-data">CTA rush hour data</Link>. Thursday was
        the busiest day for Transit Stats users too, and weekday ridership
        peaked midweek. The same shape shows up in our small-sample dataset and
        the system-wide numbers.
      </p>

      <h2>The NITA Act Is Set to Fuel Continued Growth</h2>
      <p>
        Looking ahead into 2026, the recently signed NITA Act (Northern Illinois
        Transit Act) is the biggest factor to watch. The legislation, signed in
        December 2025, provides an estimated $1.2 billion in annual operating
        funding for the regional transit system, plus $180 million per year for
        capital projects.
      </p>
      <p>
        For CTA riders, that funding stabilizes service and pays for improvements
        that have been on hold. Combined with the ongoing accessibility upgrades,
        that should keep ridership growing through 2026.
      </p>

      <h2>What This Means for Chicago CTA Riders</h2>
      <p>
        Four straight years of ridership growth says something concrete.
        Chicagoans are riding the CTA more than at any point since the pandemic,
        and 2025&rsquo;s 319.2 million rides shows the recovery has turned into
        real, sustained growth.
      </p>
      <p>
        Our small slice of that picture comes from individual riders.{" "}
        <Link href="/">Transit Stats</Link> has tracked over 23,000 personal CTA
        rides, giving us a rider&rsquo;s-eye view of how Chicagoans actually use
        the system. See our full{" "}
        <Link href="/cta-ridership-data">CTA ridership data breakdown</Link>, our{" "}
        <Link href="/cta-commute-pairs">most common commute routes</Link>, and the{" "}
        <Link href="/co2-savings-cta-riders">CO2 savings every ride generates</Link>.
      </p>
    </>
  );
}
