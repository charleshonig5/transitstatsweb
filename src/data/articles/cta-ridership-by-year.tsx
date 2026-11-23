import Link from "next/link";
import StatGrid from "@/components/charts/StatGrid";
import HorizontalBarChart from "@/components/charts/HorizontalBarChart";
import DonutChart from "@/components/charts/DonutChart";

// Annual totals, 1988-2025: City of Chicago open data, "CTA - Ridership -
// Annual Boarding Totals" (w8km-9pzd), bus + rail only (paratransit, which
// the dataset counts through 2006, is left out). 2016 rail is 238,645,812,
// the figure in the CTA's 2017 annual report and the daily data; the annual
// dataset lists 239,645,812, which does not add up to its own total.
// 2026 and every daily average: "CTA - Ridership - Daily Boarding Totals"
// (6iiy-9s97), through September 30, 2026.
const headlineStats = [
  { value: "516.0M", label: "Rides in 2015, the highest of these years" },
  { value: "196.0M", label: "Rides in 2021, the lowest of these years" },
];

const recentYears = [
  { name: "2025", value: 338041687 },
  { name: "2024", value: 309197026 },
  { name: "2023", value: 279146501 },
  { name: "2022", value: 243538803 },
  { name: "2021", value: 195980563 },
  { name: "2020", value: 197499793 },
  { name: "2019", value: 455743541 },
  { name: "2018", value: 468067963 },
  { name: "2017", value: 479435218 },
  { name: "2016", value: 497704252 },
  { name: "2015", value: 515964831 },
];

// Each year's bus + rail total as a share of 2019 (455,743,541)
const shareOf2019 = [
  { name: "2025", value: 74 },
  { name: "2024", value: 68 },
  { name: "2023", value: 61 },
  { name: "2022", value: 53 },
  { name: "2021", value: 43 },
  { name: "2020", value: 43 },
];

// Average weekday rides (day type W in the daily data)
const weekdayAverages = [
  { name: "2026 (Jan to Sep)", value: 1072358 },
  { name: "2025", value: 1042505 },
  { name: "2024", value: 953787 },
  { name: "2023", value: 870615 },
  { name: "2022", value: 762564 },
  { name: "2021", value: 601803 },
  { name: "2020", value: 623202 },
  { name: "2019", value: 1468731 },
];

export default function ArticleContent() {
  return (
    <>
      <p>
        The CTA carried 338.0 million rides in 2025, its highest annual total
        since 2019 and about 74% of that year&rsquo;s ridership. In the City of
        Chicago&rsquo;s data, which goes back to 1988, the busiest year is 1988
        itself at 604.5 million rides. The highest year after 1990 is 2012 at
        545.6 million, and the lowest of any year is 2021 at 196.0 million.
      </p>
      <p>
        We built <Link href="/">Transit Stats</Link> to show riders their own
        trips, and we keep an eye on the system&rsquo;s numbers too. Below is
        CTA ridership for every year from 1988 through 2025, split into bus
        and rail, along with 2026 through September and the reason 2025
        can&rsquo;t be compared directly with the years before it.
      </p>

      <h2 id="by-year">CTA ridership by year, 2015 to 2025</h2>
      <StatGrid stats={headlineStats} />
      <p>
        CTA ridership fell every year from 2016 through 2019 and collapsed in
        2020. It has grown four years in a row since the 2021 low. Total bus
        and rail rides by year:
      </p>
      <HorizontalBarChart data={recentYears} />
      <ul>
        <li>2025: 338.0 million (bus 199.6 million, rail 138.4 million)</li>
        <li>2024: 309.2 million (bus 181.7 million, rail 127.5 million)</li>
        <li>2023: 279.1 million (bus 161.7 million, rail 117.4 million)</li>
        <li>2022: 243.5 million (bus 140.0 million, rail 103.5 million)</li>
        <li>2021: 196.0 million (bus 117.4 million, rail 78.6 million)</li>
        <li>2020: 197.5 million (bus 121.4 million, rail 76.0 million)</li>
        <li>2019: 455.7 million (bus 237.3 million, rail 218.5 million)</li>
        <li>2018: 468.1 million (bus 242.2 million, rail 225.9 million)</li>
        <li>2017: 479.4 million (bus 249.2 million, rail 230.2 million)</li>
        <li>2016: 497.7 million (bus 259.1 million, rail 238.6 million)</li>
        <li>2015: 516.0 million (bus 274.3 million, rail 241.7 million)</li>
      </ul>

      <h2 id="earlier-years">CTA ridership by year, 1988 to 2014</h2>
      <p>
        The City&rsquo;s annual dataset starts in 1988. The totals here are bus
        and rail only. The dataset also counts paratransit through 2006, and we
        left it out so that every year measures the same thing.
      </p>
      <h3>2005 to 2014</h3>
      <ul>
        <li>2014: 514.2 million (bus 276.1 million, rail 238.1 million)</li>
        <li>2013: 529.2 million (bus 300.1 million, rail 229.1 million)</li>
        <li>2012: 545.6 million (bus 314.4 million, rail 231.2 million)</li>
        <li>2011: 532.0 million (bus 310.4 million, rail 221.6 million)</li>
        <li>2010: 516.9 million (bus 306.0 million, rail 210.8 million)</li>
        <li>2009: 521.2 million (bus 318.7 million, rail 202.6 million)</li>
        <li>2008: 526.3 million (bus 328.2 million, rail 198.1 million)</li>
        <li>2007: 499.5 million (bus 309.3 million, rail 190.3 million)</li>
        <li>2006: 493.6 million (bus 298.4 million, rail 195.2 million)</li>
        <li>2005: 490.0 million (bus 303.2 million, rail 186.8 million)</li>
      </ul>
      <h3>1995 to 2004</h3>
      <ul>
        <li>2004: 472.7 million (bus 294.0 million, rail 178.7 million)</li>
        <li>2003: 472.9 million (bus 291.8 million, rail 181.1 million)</li>
        <li>2002: 483.7 million (bus 303.3 million, rail 180.4 million)</li>
        <li>2001: 483.4 million (bus 301.7 million, rail 181.7 million)</li>
        <li>2000: 478.3 million (bus 302.1 million, rail 176.3 million)</li>
        <li>1999: 465.5 million (bus 299.1 million, rail 166.5 million)</li>
        <li>1998: 444.1 million (bus 290.5 million, rail 153.6 million)</li>
        <li>1997: 438.6 million (bus 287.6 million, rail 151.0 million)</li>
        <li>1996: 444.2 million (bus 302.1 million, rail 142.0 million)</li>
        <li>1995: 441.5 million (bus 306.1 million, rail 135.5 million)</li>
      </ul>
      <h3>1988 to 1994</h3>
      <ul>
        <li>1994: 475.1 million (bus 331.5 million, rail 143.6 million)</li>
        <li>1993: 462.0 million (bus 326.7 million, rail 135.4 million)</li>
        <li>1992: 507.7 million (bus 370.3 million, rail 137.4 million)</li>
        <li>1991: 539.7 million (bus 392.1 million, rail 147.6 million)</li>
        <li>1990: 586.9 million (bus 421.2 million, rail 165.7 million)</li>
        <li>1989: 589.2 million (bus 420.6 million, rail 168.7 million)</li>
        <li>1988: 604.5 million (bus 430.1 million, rail 174.4 million)</li>
      </ul>

      <h2 id="peak-years">When CTA ridership peaked</h2>
      <p>
        The highest year in the data is the first one. In 1988 the CTA carried
        604.5 million bus and rail rides, 430.1 million of them on buses.
        Ridership then slid for most of a decade and reached 438.6 million in
        1997, the lowest total in the data until the pandemic.
      </p>
      <p>
        From there it climbed 24% over 15 years. The 2012 total of 545.6
        million was the CTA&rsquo;s highest in 22 years, according to its
        annual report for that year, and no year since has matched it.
        Ridership stayed above 500 million every year from 2008 through 2015.
      </p>
      <p>
        After 2012 the total fell in six of the next seven years. The exception
        was 2015, up 0.3%. By 2019 the CTA was down to 455.7 million rides, 16%
        below the 2012 high. Its annual reports for those years mention the
        five-month shutdown of the Red Line&rsquo;s Dan Ryan branch for
        reconstruction in 2013, and a polar vortex and a Chicago Public Schools
        strike in 2019.
      </p>
      <ul>
        <li>Highest year in the data: 1988, with 604.5 million rides</li>
        <li>Lowest year before the pandemic: 1997, with 438.6 million</li>
        <li>Highest year after 1990: 2012, with 545.6 million</li>
        <li>Highest year for rail: 2015, with 241.7 million</li>
        <li>Lowest year: 2021, with 196.0 million</li>
      </ul>

      <h2 id="bus-vs-rail">CTA bus and rail ridership by year</h2>
      <p>
        Buses have carried more riders than trains in every year of the data,
        but the gap narrowed over three decades. In 1988 buses carried 71% of
        CTA rides. By 2018 the split was 52% bus and 48% rail.
      </p>
      <p>
        Bus ridership fell from 430.1 million in 1988 to 237.3 million in 2019,
        a drop of 45%. Rail went the other way. From a low of 135.4 million in
        1993 it grew to a record 241.7 million in 2015, and the CTA&rsquo;s
        annual report for that year described a long-term shift toward rail.
      </p>
      <p>
        The pandemic reversed that. Train ridership fell harder than bus
        ridership in 2020 and has made up less of the loss, so buses carried
        59% of CTA rides in 2025. For the stations and routes behind those totals,
        see the{" "}
        <Link href="/busiest-cta-stations-bus-routes">
          busiest CTA stations and bus routes
        </Link>
        .
      </p>
      <DonutChart trainRides={138392897} busRides={199648790} />
      <ul>
        <li>CTA bus rides in 2025: 199.6 million (59%)</li>
        <li>CTA rail rides in 2025: 138.4 million (41%)</li>
      </ul>

      <h2 id="pandemic">CTA ridership since the pandemic</h2>
      <p>
        Illinois&rsquo;s stay-at-home order began on March 21, 2020. CTA
        ridership for the year fell 57%, from 455.7 million to 197.5 million.
        Trains lost more than buses: rail ridership dropped 65% and bus
        ridership 49%.
      </p>
      <p>
        The next year was slightly lower still. At 196.0 million rides, 2021 is
        the lowest year in the data. Ridership has grown every year since. CTA
        ridership as a share of 2019, by year (percent):
      </p>
      <HorizontalBarChart data={shareOf2019} valueSuffix="%" />
      <ul>
        <li>2025: 74% of 2019</li>
        <li>2024: 68%</li>
        <li>2023: 61%</li>
        <li>2022: 53%</li>
        <li>2021: 43%</li>
        <li>2020: 43%</li>
      </ul>
      <p>
        The recovery is uneven. In 2025 buses were at 84% of their 2019
        ridership and trains at 63%. Weekends are closer to normal than
        weekdays: the average Saturday in 2025 had 88% of the rides of a 2019
        Saturday, and the average weekday had 71%.
      </p>

      <h2 id="2025-recount">Why 2025 isn&rsquo;t comparable with earlier years</h2>
      <p>
        In March 2026 the CTA{" "}
        <a
          href="https://www.transitchicago.com/assets/1/6/MEMO_-_Ridership_Update_3.20.2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          restated its 2025 ridership
        </a>{" "}
        after changing how it counts. Actual counts from its new cash fareboxes
        replaced estimates, and a process built on automatic passenger
        counters replaced the old video-based one for rides the fareboxes
        miss. Rail rides that weren&rsquo;t fully paid for were refigured at
        2025 rates. The restatement goes back to January 1, 2025 and no
        further. One reason the CTA gives is that most 2024 rides were
        recorded on the old fareboxes.
      </p>
      <p>
        The recount raised 2025 from 319.2 million rides to 338.0 million. Most
        of the added rides are on buses, and the CTA says they are free trips
        that brought in no fare revenue. Its annual report shows the same
        thing. On an average weekday, paid bus rides went from 498,375 in 2024
        to 503,772 in 2025, while underpaid bus rides went from 66,093 to
        117,388.
      </p>
      <ul>
        <li>2025 as first counted: 319.2 million, about 3% above 2024</li>
        <li>2025 restated: 338.0 million, 9.3% above 2024</li>
        <li>
          Added by the recount: 18.9 million rides (15.7 million bus, 3.2
          million rail)
        </li>
      </ul>
      <p>
        So of the increase of 28.8 million rides from 2024 to 2025, at least
        two thirds comes from the new method. The first count wasn&rsquo;t a
        clean comparison with 2024 either, because 2025 is the first year the
        CTA&rsquo;s totals include underpaid rail rides. Read 2025 and 2026 as
        one series and 2024 and earlier as another. Every 2025 and 2026 figure
        in this article uses the restated count, including the 74% of 2019
        above. On the original count, 2025 was about 70% of 2019.
      </p>

      <h2 id="2026-ridership">CTA ridership in 2026 compared with 2025</h2>
      <p>
        From January through September 2026 the CTA carried 262.0 million
        rides, up 2.7% from 255.0 million in the same months of 2025. Both
        years use the new counting method, so the comparison is a fair one.
      </p>
      <ul>
        <li>Total CTA rides, January to September 2026: 262.0 million (up 2.7%)</li>
        <li>CTA bus rides: 154.0 million (up 2.0%)</li>
        <li>CTA rail rides: 107.9 million (up 3.8%)</li>
        <li>Share of the same months of 2019: 77%</li>
      </ul>
      <p>
        The last three months of 2025 carried 83.1 million rides. If October
        through December 2026 only match that, the year will finish near 345
        million. For each month&rsquo;s numbers, see{" "}
        <Link href="/cta-ridership-growth-2026">
          CTA ridership growth in 2026
        </Link>
        .
      </p>

      <h2 id="daily-ridership">CTA daily ridership by year</h2>
      <p>
        On an average weekday in 2025 the CTA carried 1.04 million rides. The
        City&rsquo;s daily data starts in 2001. Its high is 2012, at 1.73
        million rides on an average weekday, and its low is 2021, at about
        602,000. Average weekday rides by year:
      </p>
      <HorizontalBarChart data={weekdayAverages} />
      <ul>
        <li>2026 (January to September): 1,072,358</li>
        <li>2025: 1,042,505</li>
        <li>2024: 953,787</li>
        <li>2023: 870,615</li>
        <li>2022: 762,564</li>
        <li>2021: 601,803</li>
        <li>2020: 623,202</li>
        <li>2019: 1,468,731</li>
      </ul>
      <p>
        Weekends are quieter. In 2025 the average Saturday had 755,000 rides
        and the average Sunday or holiday had 568,000. Across all 365 days the
        CTA averaged 926,000 rides a day.
      </p>
      <p>
        The CTA topped one million rides on 249 days in 2019 and on none in
        2021 or 2022. It did so on 181 days in 2025 and on 155 of the first 273
        days of 2026.
      </p>
      <h3>The busiest CTA days since 2001</h3>
      <p>
        Only one day in the data tops two million rides: July 3, 2008, the day
        of the downtown Fourth of July celebration, with 2,049,519. Second is
        November 4, 2016, the day of the Cubs&rsquo; World Series parade, with
        1,945,417. The 1,146,516 rail rides that day are a CTA record for the
        L. Third is November 4, 2008, the day of Barack Obama&rsquo;s election
        night speech in Grant Park, with 1,938,738.
      </p>
      <p>
        The busiest day since the stay-at-home order began is August 27, 2026,
        with 1,261,099 rides.
      </p>

      <h2 id="counting-rides">How the CTA counts ridership</h2>
      <p>
        Every figure here is a count of boardings, which is what the CTA means
        by ridership. A trip that uses a bus and then a train counts as two
        rides. Rail totals also include free transfers between lines inside a
        station, such as between the Red, Orange and Green lines at Roosevelt,
        where nobody passes a turnstile.
      </p>
      <ul>
        <li>
          Annual totals for 1988 through 2025 come from the City&rsquo;s annual
          boarding dataset. The 2026 figures and every daily average come from
          its daily dataset, which runs through September 30, 2026.
        </li>
        <li>
          The annual dataset lists 239.6 million rail rides for 2016. The
          CTA&rsquo;s own annual report and the daily data both show 238.6
          million, so we used that.
        </li>
        <li>
          Six holidays count as Sundays: New Year&rsquo;s Day, Memorial Day,
          Independence Day, Labor Day, Thanksgiving and Christmas.
        </li>
        <li>
          Percent changes are worked out from the yearly totals. The CTA&rsquo;s
          reports adjust for the mix of weekdays and weekends in each year, so
          its percentages differ slightly. It reports 2025 as 9.7% above 2024.
        </li>
        <li>
          Figures are rounded, so sums and differences can be off by 0.1
          million.
        </li>
      </ul>
      <p>
        These are the system&rsquo;s totals. For what individual riders do, see
        our{" "}
        <Link href="/cta-ridership-data">Transit Stats ridership data</Link>,
        built from more than 48,000 rides logged in the app.
      </p>

      <h2 id="sources">Sources</h2>
      <ul>
        <li>
          <a
            href="https://data.cityofchicago.org/Transportation/CTA-Ridership-Annual-Boarding-Totals/w8km-9pzd"
            target="_blank"
            rel="noopener noreferrer"
          >
            City of Chicago Data Portal: CTA Ridership, Annual Boarding Totals
          </a>{" "}
          (1988 to 2025, updated May 15, 2026)
        </li>
        <li>
          <a
            href="https://data.cityofchicago.org/Transportation/CTA-Ridership-Daily-Boarding-Totals/6iiy-9s97"
            target="_blank"
            rel="noopener noreferrer"
          >
            City of Chicago Data Portal: CTA Ridership, Daily Boarding Totals
          </a>{" "}
          (2001 through September 30, 2026)
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
            href="https://www.transitchicago.com/assets/1/6/2025_Annual_Ridership_Report.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Annual Ridership Report, Calendar Year 2025
          </a>{" "}
          (includes the restated 2025 figures)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/ridership/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Ridership Reports
          </a>{" "}
          (annual reports for 2012, 2013, 2015, 2017, 2019 and 2020)
        </li>
        <li>
          <a
            href="https://chicago.suntimes.com/2016/11/11/18379088/cubs-parade-sets-ridership-records-on-cta-metra-trains"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chicago Sun-Times: Cubs parade sets ridership records on CTA, Metra
            trains
          </a>{" "}
          (November 11, 2016)
        </li>
      </ul>
    </>
  );
}
