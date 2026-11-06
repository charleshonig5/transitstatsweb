import Link from "next/link";
import StatGrid from "@/components/charts/StatGrid";
import HorizontalBarChart from "@/components/charts/HorizontalBarChart";
import DonutChart from "@/components/charts/DonutChart";

// 2026 figures: City of Chicago open data, "CTA - Ridership - Daily Boarding
// Totals" (6iiy-9s97), Jan 1 - Aug 31 2026 vs the same 243 days of 2025.
// Both years use the CTA's restated (March 2026) counting method.
const ytdStats = [
  { value: "230.0M", label: "CTA rides, Jan to Aug 2026" },
  { value: "+2.6%", label: "Vs. the same months of 2025" },
  { value: "1.06M", label: "Rides on an average weekday" },
  { value: "134", label: "Days over 1 million rides" },
];

const monthlyGrowth = [
  { name: "February", value: 6.3 },
  { name: "June", value: 4.7 },
  { name: "July", value: 3.2 },
  { name: "May", value: 2.2 },
  { name: "March", value: 2.1 },
  { name: "April", value: 1.8 },
  { name: "January", value: 0.9 },
  { name: "August", value: 0.2 },
];

const weekdayAverages = [
  { name: "Wednesday", value: 1099 },
  { name: "Tuesday", value: 1093 },
  { name: "Thursday", value: 1079 },
  { name: "Friday", value: 1002 },
  { name: "Monday", value: 977 },
  { name: "Saturday", value: 781 },
  { name: "Sunday", value: 603 },
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
        Chicago CTA ridership is still growing in 2026. From January through
        August, the CTA carried 230.0 million rides, up 2.6% from the same months
        of 2025, and every single month beat its 2025 total. That builds on 2025,
        the fourth straight year of transit ridership growth in the Chicago
        region.
      </p>
      <p>
        We built <Link href="/">Transit Stats</Link> to show individual riders
        their own commutes, but we watch the city&rsquo;s numbers closely too.
        Below are the 2026 figures from the City of Chicago&rsquo;s open data,
        the CTA&rsquo;s recount of 2025, and how both compare with what our
        riders log.
      </p>

      <h2>CTA ridership in 2026 so far</h2>
      <StatGrid stats={ytdStats} />
      <p>
        Through the end of August 2026, the CTA recorded 230.0 million rides,
        compared with 224.1 million over the same stretch of 2025. Ridership topped
        one million on 134 days, up from 118 days in the first eight months of
        2025.
      </p>
      <ul>
        <li>Total CTA rides (January to August 2026): 230.0 million</li>
        <li>Change from the same period of 2025: +2.6%</li>
        <li>Average weekday rides: 1.06 million (up 2.3%)</li>
        <li>Average weekend and holiday rides: 689,000 (up 3.8%)</li>
        <li>Days with more than 1 million rides: 134 (vs. 118)</li>
      </ul>

      <h2>Every month of 2026 has beaten 2025</h2>
      <p>
        The growth is spread out. All eight months of 2026 so far carried more
        riders than the same month in 2025. February posted the
        biggest jump at 6.3%, followed by June at 4.7%. August was nearly flat,
        up 0.2%. Year-over-year change by month (percent):
      </p>
      <HorizontalBarChart data={monthlyGrowth} valueSuffix="%" />
      <ol>
        <li>February: +6.3%</li>
        <li>June: +4.7%</li>
        <li>July: +3.2%</li>
        <li>May: +2.2%</li>
        <li>March: +2.1%</li>
        <li>April: +1.8%</li>
        <li>January: +0.9%</li>
        <li>August: +0.2%</li>
      </ol>

      <h2>Rail is growing faster than bus</h2>
      <p>
        CTA buses still carry most riders, but the L is growing faster. Through
        August 2026, buses carried 135.7 million rides (up 1.9%) and trains
        carried 94.3 million (up 3.7%). See which{" "}
        <Link href="/busiest-cta-stations-bus-routes">stations and bus routes
        are busiest</Link>.
      </p>
      <DonutChart trainRides={94340263} busRides={135655218} />
      <ul>
        <li>CTA bus rides: 135.7 million (59%), up 1.9%</li>
        <li>CTA rail rides: 94.3 million (41%), up 3.7%</li>
      </ul>
      <p>
        Our own{" "}
        <Link href="/cta-ridership-data">Transit Stats ridership data</Link>{" "}
        flips that ratio: rail edges out bus. That&rsquo;s sample bias. Our users
        skew toward riders who actively track their commutes, and GPS tracking
        is most accurate on fixed rail routes, so trains show up more in our
        data than they do citywide. The{" "}
        <Link href="/most-popular-cta-stops-lines">Red Line</Link> is the
        most-used line among our riders by a wide margin.
      </p>

      <h2>Weekend ridership has passed pre-pandemic levels</h2>
      <p>
        In June 2026, the CTA reported that{" "}
        <a
          href="https://abc7chicago.com/post/chicago-cta-report-shows-crime-down-5-months-row-ridership-increase/19275127/"
          target="_blank"
          rel="noopener noreferrer"
        >
          weekend ridership has surpassed pre-COVID levels
        </a>{" "}
        and bus ridership has reached 90% of pre-COVID levels.
      </p>
      <p>
        The daily numbers back that up. Weekend and holiday ridership grew faster
        than weekday ridership in 2026 (3.8% vs. 2.3%). Rail is further behind
        than bus: L ridership through August was still about two-thirds of the
        same months in 2019. The weekday train commute has the most ground left
        to make up.
      </p>

      <h2>The busiest days of the week on the CTA</h2>
      <p>
        Midweek is peak CTA. In 2026, Wednesday averaged 1.10 million rides,
        just ahead of Tuesday and Thursday. Sunday is the quietest day at about
        600,000 rides. Average rides by day of the week in 2026 (thousands):
      </p>
      <HorizontalBarChart data={weekdayAverages} valueSuffix="K" />
      <p>
        Our own <Link href="/cta-rush-hour-data">CTA rush hour data</Link> shows
        the same midweek peak. Tuesday is the busiest day for Transit Stats
        riders, with Wednesday and Thursday close behind.
      </p>

      <h2>2025 recap: 338 million CTA rides after a recount</h2>
      <p>
        In March 2026, the CTA{" "}
        <a
          href="https://www.transitchicago.com/assets/1/6/MEMO_-_Ridership_Update_3.20.2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          restated its 2025 ridership
        </a>{" "}
        after switching to a new counting method. It now uses counts from its new
        cash fareboxes and automatic passenger counters on buses, which capture
        rides the old method missed, mostly unpaid ones. The recount raised 2025
        from 319.2 million to 338.0 million rides, an increase of 5.9%.
      </p>
      <ul>
        <li>2025 CTA total: 338.0 million rides (originally 319.2 million)</li>
        <li>CTA bus: 199.6 million (originally 184.0 million, +8.5%)</li>
        <li>CTA rail: 138.4 million (originally 135.2 million, +2.4%)</li>
      </ul>
      <p>
        Every 2026 comparison in this article uses the new method for both
        years, so the growth figures aren&rsquo;t inflated by the recount.
      </p>

      <h2>The Chicago region hit 373.5 million rides in 2025</h2>
      <p>
        Before the CTA&rsquo;s recount, the{" "}
        <a
          href="https://www.rtachicago.org/about-rta/press-releases/regional-transit-ridership-continues-to-grow-in-2025-with-12-3m-more-rides-year-over-year"
          target="_blank"
          rel="noopener noreferrer"
        >
          Regional Transportation Authority reported
        </a>{" "}
        that the region&rsquo;s fixed-route system (CTA, Metra, and Pace
        combined) recorded 373.5 million rides in 2025, 12.3 million more than in
        2024. Daily regional ridership crossed one million on 236 days. Those
        totals use the CTA&rsquo;s original count. Here&rsquo;s how the RTA
        broke down 2025 by agency (millions of rides):
      </p>
      <HorizontalBarChart data={ridershipByAgency} valueSuffix="M" />
      <ol>
        <li>CTA Bus: 184 million rides</li>
        <li>CTA Rail: 135.2 million rides</li>
        <li>Metra: 38 million rides</li>
        <li>Pace: 16.4 million rides</li>
      </ol>
      <p>
        The CTA carried about 85% of all fixed-route trips in the region. By
        mode, Metra grew fastest in 2025, followed by CTA rail, while Pace
        ridership dipped 3%. Year-over-year growth in 2025 (percent):
      </p>
      <HorizontalBarChart data={growthByMode} valueSuffix="%" />
      <ol>
        <li>Metra: +8%</li>
        <li>CTA Rail: +6%</li>
        <li>CTA Overall: +3%</li>
        <li>CTA Bus: +1%</li>
        <li>Pace: -3%</li>
      </ol>
      <p>
        The RTA&rsquo;s report also tracked rail stations that had been made
        accessible. From August through December 2025, those stations recorded
        368,000 more rides than a year earlier, a 22% increase.
      </p>

      <h2>NITA replaced the RTA in September 2026</h2>
      <p>
        The biggest Chicago transit story of 2026 is about funding and who runs
        the system. Governor Pritzker signed the Northern Illinois Transit Authority
        (NITA) Act in December 2025, and on September 1, 2026,{" "}
        <a
          href="https://gov-pritzker-newsroom.prezly.com/northern-illinois-transit-authority-nita-officially-launches"
          target="_blank"
          rel="noopener noreferrer"
        >
          NITA officially replaced the RTA
        </a>{" "}
        as the agency overseeing the CTA, Metra, and Pace.
      </p>
      <p>
        The law brings about $1.5 billion a year in new transit funding,
        according to the governor&rsquo;s office, including{" "}
        <a
          href="https://nita.illinois.gov/transit-funding/moving-the-system"
          target="_blank"
          rel="noopener noreferrer"
        >
          $180 million a year for capital projects
        </a>
        . For CTA riders, the money heads off the service cuts that were on the
        table before the law passed.
      </p>

      <h2>What this means for Chicago CTA riders</h2>
      <p>
        Counting 2026 so far, Chicago transit ridership has grown five years in a
        row. Chicagoans are riding the CTA more than at any point since the pandemic.
        Weekends are back above 2019 levels, and the weekday L commute is the
        last big piece still recovering.
      </p>
      <p>
        <Link href="/">Transit Stats</Link> riders have tracked more than 48,000
        of their own CTA rides, which lets us look at the system one commute at
        a time. See our full{" "}
        <Link href="/cta-ridership-data">CTA ridership data breakdown</Link>, the{" "}
        <Link href="/cta-commute-pairs">most common commute routes</Link>, and the{" "}
        <Link href="/co2-savings-cta-riders">CO2 savings every ride generates</Link>.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a
            href="https://data.cityofchicago.org/Transportation/CTA-Ridership-Daily-Boarding-Totals/6iiy-9s97"
            target="_blank"
            rel="noopener noreferrer"
          >
            City of Chicago Data Portal: CTA Ridership, Daily Boarding Totals
          </a>{" "}
          (2026 figures, through August 31, 2026)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/assets/1/6/MEMO_-_Ridership_Update_3.20.2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA memo: Ridership Process Change and 2025 Ridership Restatement
          </a>{" "}
          (March 17, 2026)
        </li>
        <li>
          <a
            href="https://www.rtachicago.org/about-rta/press-releases/regional-transit-ridership-continues-to-grow-in-2025-with-12-3m-more-rides-year-over-year"
            target="_blank"
            rel="noopener noreferrer"
          >
            RTA: Regional transit ridership continues to grow in 2025
          </a>{" "}
          (January 30, 2026)
        </li>
        <li>
          <a
            href="https://abc7chicago.com/post/chicago-cta-report-shows-crime-down-5-months-row-ridership-increase/19275127/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ABC7 Chicago: CTA report shows ridership increase
          </a>{" "}
          (June 11, 2026)
        </li>
        <li>
          <a
            href="https://gov-pritzker-newsroom.prezly.com/northern-illinois-transit-authority-nita-officially-launches"
            target="_blank"
            rel="noopener noreferrer"
          >
            Office of the Governor: NITA officially launches
          </a>{" "}
          (September 1, 2026)
        </li>
      </ul>
    </>
  );
}
