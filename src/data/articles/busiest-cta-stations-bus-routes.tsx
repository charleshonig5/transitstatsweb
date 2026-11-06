import Link from "next/link";
import StatGrid from "@/components/charts/StatGrid";
import HorizontalBarChart from "@/components/charts/HorizontalBarChart";

// City of Chicago open data, January 1 - August 31 2026 vs the same 243 days
// of 2025:
//   'L' Station Entries - Daily Totals (5neh-572f)
//   Bus Routes - Daily Totals by Route (jyb9-n7fm)
const bigPictureStats = [
  { value: "80.6M", label: "L station entries, Jan to Aug" },
  { value: "+4.5%", label: "Station entries vs. 2025" },
  { value: "135.3M", label: "Bus route rides, Jan to Aug" },
  { value: "+2.2%", label: "Bus rides vs. 2025" },
];

const stationData = [
  { name: "Clark/Lake", value: 2664003 },
  { name: "Lake (Red)", value: 2348607 },
  { name: "O'Hare (Blue)", value: 2218561 },
  { name: "Washington/Wabash", value: 2204188 },
  { name: "Fullerton", value: 1846778 },
  { name: "Washington (Blue)", value: 1815390 },
  { name: "Chicago (Red)", value: 1776949 },
  { name: "Belmont (Red, Brown, Purple)", value: 1775484 },
  { name: "Roosevelt", value: 1737006 },
  { name: "Grand (Red)", value: 1659478 },
];

const busRouteData = [
  { name: "9 Ashland", value: 4271150 },
  { name: "53 Pulaski", value: 3914609 },
  { name: "79 79th", value: 3835460 },
  { name: "66 Chicago", value: 3647188 },
  { name: "8 Halsted", value: 3461965 },
  { name: "3 King Drive", value: 3379113 },
  { name: "77 Belmont", value: 3279177 },
  { name: "4 Cottage Grove", value: 3271560 },
  { name: "22 Clark", value: 3269689 },
  { name: "49 Western", value: 3220871 },
];

export default function ArticleContent() {
  return (
    <>
      <p>
        Clark/Lake is the busiest CTA station in 2026, with 2.66 million
        entries from January through August. The busiest bus route is the 9
        Ashland, with 4.27 million rides. Here are the top 10 stations and bus
        routes, from the CTA&rsquo;s own ridership counts.
      </p>
      <p>
        Our <Link href="/most-popular-cta-stops-lines">most popular CTA stops
        and lines</Link> ranking comes from rides tracked by{" "}
        <Link href="/">Transit Stats</Link> users. This one uses the CTA&rsquo;s
        counts, published on the City of Chicago data portal, which cover every
        rider, not just our users.
      </p>

      <h2>CTA station and bus ridership in 2026</h2>
      <StatGrid stats={bigPictureStats} />
      <p>
        From January through August 2026, riders entered CTA L stations 80.6
        million times, up 4.5% from the same months of 2025. Bus routes carried
        135.3 million rides, up 2.2%.
      </p>
      <p>
        Station entries count people passing through a station&rsquo;s fare
        gates. Riders changing trains behind the gates aren&rsquo;t counted, so
        a station&rsquo;s total reflects trips that start there. That&rsquo;s
        also why entries add up to less than the CTA&rsquo;s total rail rides,
        which were{" "}
        <Link href="/cta-ridership-growth-2026">94.3 million over the same
        months</Link>.
      </p>

      <h2>The 10 busiest CTA L stations in 2026</h2>
      <p>Station entries from January through August 2026:</p>
      <HorizontalBarChart data={stationData} />
      <ol>
        <li>Clark/Lake: 2,664,003 entries</li>
        <li>Lake (Red Line): 2,348,607 entries</li>
        <li>O&rsquo;Hare (Blue Line): 2,218,561 entries</li>
        <li>Washington/Wabash: 2,204,188 entries</li>
        <li>Fullerton: 1,846,778 entries</li>
        <li>Washington (Blue Line): 1,815,390 entries</li>
        <li>Chicago (Red Line): 1,776,949 entries</li>
        <li>Belmont (Red, Brown, and Purple Lines): 1,775,484 entries</li>
        <li>Roosevelt: 1,737,006 entries</li>
        <li>Grand (Red Line): 1,659,478 entries</li>
      </ol>
      <p>
        Seven of the top 10 are downtown, in and around the Loop. O&rsquo;Hare
        stands out: the Blue Line&rsquo;s airport station is third by total
        entries, about 9,500 on an average weekday. The other two are Fullerton
        and Belmont, the North Side transfer stations for the Red, Brown, and
        Purple Lines.
      </p>

      <h2>Why Clark/Lake and Washington/Wabash jumped</h2>
      <p>
        The State/Lake elevated station{" "}
        <a
          href="https://abc7chicago.com/post/chicago-traffic-downtown-cta-state-lake-station-closes-3-years-monday-commuters-brace-issues/18354510/"
          target="_blank"
          rel="noopener noreferrer"
        >
          closed on January 5, 2026
        </a>{" "}
        for a three-year rebuild, and the CTA sent its riders to Clark/Lake and
        Washington/Wabash. Clark/Lake gained 526,000 entries over 2025 (up 25%),
        and Washington/Wabash gained 723,000 (up 49%). Together that&rsquo;s
        about 1.25 million entries. Even after allowing for ridership growth
        across the system, that&rsquo;s roughly 60% of the 1.78 million entries
        State/Lake had in the first eight months of 2025.
      </p>
      <p>
        That shift is why Clark/Lake took the top spot this year. It already
        connects the Blue Line subway with five elevated lines, and it&rsquo;s
        one of the two stations taking State/Lake&rsquo;s riders while it&rsquo;s
        closed.
      </p>

      <h2>The 10 busiest CTA bus routes in 2026</h2>
      <p>Rides from January through August 2026:</p>
      <HorizontalBarChart data={busRouteData} />
      <ol>
        <li>9 Ashland: 4,271,150 rides</li>
        <li>53 Pulaski: 3,914,609 rides</li>
        <li>79 79th: 3,835,460 rides</li>
        <li>66 Chicago: 3,647,188 rides</li>
        <li>8 Halsted: 3,461,965 rides</li>
        <li>3 King Drive: 3,379,113 rides</li>
        <li>77 Belmont: 3,279,177 rides</li>
        <li>4 Cottage Grove: 3,271,560 rides</li>
        <li>22 Clark: 3,269,689 rides</li>
        <li>49 Western: 3,220,871 rides</li>
      </ol>
      <p>
        The busiest bus routes run long distances along major streets, and most
        of them serve the South and West Sides: Ashland, Pulaski, Western, 79th,
        King Drive, and Cottage Grove. The 53 Pulaski grew the most of the top
        10, up 19.7% from 2025. Three carried fewer riders than last year: the
        66 Chicago (down 10.8%), the 8 Halsted (down 5.4%), and the 79 79th
        (down 0.4%).
      </p>

      <h2>Biggest gains: the rebuilt Red Line stations</h2>
      <p>
        Outside the Loop, the biggest gains came at the four Red Line stations
        that{" "}
        <a
          href="https://news.wttw.com/2025/07/21/newly-reconstructed-lawrence-argyle-berwyn-and-bryn-mawr-red-line-stations-are-now-open"
          target="_blank"
          rel="noopener noreferrer"
        >
          reopened on July 20, 2025
        </a>
        , after four years of reconstruction. Lawrence and Berwyn were closed
        until then, and this year they&rsquo;ve had 463,000 and 426,000
        entries. Bryn Mawr, which ran as a temporary station during
        construction, is up 69%.
      </p>

      <h2>How this compares with Transit Stats riders</h2>
      <p>
        Transit Stats riders&rsquo; busiest stops are Belmont, Fullerton, and
        Chicago, and their top bus routes are the 77 Belmont and 36 Broadway,
        because our users skew toward the North Side. See the{" "}
        <Link href="/most-popular-cta-stops-lines">Transit Stats ranking</Link>
        , the <Link href="/cta-commute-pairs">most common commute routes</Link>,
        and the <Link href="/cta-ridership-growth-2026">CTA ridership growth
        data</Link>. Flying out? Here&rsquo;s{" "}
        <Link href="/cta-ohare-midway-airport">how to get to O&rsquo;Hare and
        Midway on the CTA</Link>.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a
            href="https://data.cityofchicago.org/Transportation/CTA-Ridership-L-Station-Entries-Daily-Totals/5neh-572f"
            target="_blank"
            rel="noopener noreferrer"
          >
            City of Chicago Data Portal: CTA L Station Entries, Daily Totals
          </a>{" "}
          (January 1 to August 31, 2025 and 2026)
        </li>
        <li>
          <a
            href="https://data.cityofchicago.org/Transportation/CTA-Ridership-Bus-Routes-Daily-Totals-by-Route/jyb9-n7fm"
            target="_blank"
            rel="noopener noreferrer"
          >
            City of Chicago Data Portal: CTA Bus Routes, Daily Totals by Route
          </a>{" "}
          (January 1 to August 31, 2025 and 2026)
        </li>
        <li>
          <a
            href="https://abc7chicago.com/post/chicago-traffic-downtown-cta-state-lake-station-closes-3-years-monday-commuters-brace-issues/18354510/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ABC7 Chicago: State/Lake station closure takes effect
          </a>{" "}
          (January 5, 2026)
        </li>
        <li>
          <a
            href="https://news.wttw.com/2025/07/21/newly-reconstructed-lawrence-argyle-berwyn-and-bryn-mawr-red-line-stations-are-now-open"
            target="_blank"
            rel="noopener noreferrer"
          >
            WTTW: Lawrence, Argyle, Berwyn and Bryn Mawr stations reopen
          </a>{" "}
          (July 21, 2025)
        </li>
      </ul>
    </>
  );
}
