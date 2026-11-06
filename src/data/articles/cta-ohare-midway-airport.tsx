import Link from "next/link";
import StatGrid from "@/components/charts/StatGrid";

// Times, fares, hours and terminal directions: transitchicago.com/airports,
// /fares (fares effective February 20, 2023; unchanged in the 2026 budget)
// and /orangeline. Station entries: City of Chicago open data (5neh-572f),
// January 1 - August 31 2026.
const quickStats = [
  { value: "40-45 min", label: "O'Hare to downtown, Blue Line" },
  { value: "20-25 min", label: "Midway to downtown, Orange Line" },
  { value: "$5", label: "Fare when boarding at O'Hare" },
  { value: "$2.50", label: "Fare from Midway" },
];

export default function ArticleContent() {
  return (
    <>
      <p>
        The CTA runs trains straight into both Chicago airports. Take the Blue
        Line to O&rsquo;Hare, about 40 to 45 minutes from downtown, or the
        Orange Line to Midway, about 20 to 25 minutes. The fare is $2.50, or $5
        when you board at O&rsquo;Hare, a fraction of a taxi or rideshare.
      </p>
      <p>
        Times, fares, and directions below come from the CTA&rsquo;s airport
        and fare pages. Station counts come from the City of Chicago&rsquo;s
        open data.
      </p>

      <h2>CTA to O&rsquo;Hare and Midway at a glance</h2>
      <StatGrid stats={quickStats} />
      <ul>
        <li>O&rsquo;Hare: Blue Line, 40 to 45 minutes to downtown, runs 24 hours a day</li>
        <li>Midway: Orange Line, 20 to 25 minutes to downtown, no overnight trains</li>
        <li>Fare: $2.50, except $5 when you board at O&rsquo;Hare</li>
      </ul>

      <h2>Taking the Blue Line to O&rsquo;Hare</h2>
      <p>
        The Blue Line runs between downtown and O&rsquo;Hare 24 hours a day,
        seven days a week, so it works for red-eye flights too. Every train
        runs through downtown, and the O&rsquo;Hare station is accessible.
      </p>
      <p>
        The station sits on the lower level, connected directly to Terminals 1,
        2, and 3. From baggage claim, follow the signs for &ldquo;CTA
        Trains&rdquo; or &ldquo;Trains to City.&rdquo; The CTA says the walk
        takes under ten minutes. Flying in or out of Terminal 5? Ride the free
        Airport Transit System train between Terminal 5 and Terminal 2. There&rsquo;s
        no Terminal 4.
      </p>
      <p>
        Riding to the airport costs the regular $2.50 L fare. Leaving O&rsquo;Hare
        costs $5 (full fare), charged when you enter the O&rsquo;Hare station.
        A 1-, 3-, 7-, or 30-day pass covers it at no extra charge, and the
        1-day pass costs the same $5.
      </p>

      <h2>Taking the Orange Line to Midway</h2>
      <p>
        The Orange Line connects Midway with downtown in about 20 to 25
        minutes, at the regular $2.50 fare both ways. The station is just east
        of the terminal, connected by an enclosed walkway, and it&rsquo;s
        accessible. Follow the &ldquo;CTA Trains&rdquo; signs, or the orange
        line painted on the floor.
      </p>
      <p>
        Unlike the Blue Line, the Orange Line doesn&rsquo;t run overnight.
        Trains leave Midway from about 3:30 a.m. on weekdays (4 a.m. Saturdays,
        4:30 a.m. Sundays and holidays) until about 1 a.m. Overnight, the N62
        Archer bus runs between Midway and State/Washington downtown.
      </p>

      <h2>CTA vs. taxi vs. rideshare</h2>
      <p>
        The train is the cheapest way to either airport by a wide margin. The
        CTA&rsquo;s own comparison:
      </p>
      <ul>
        <li>CTA: $5 or less from O&rsquo;Hare, $2.50 or less from Midway</li>
        <li>Taxi: around $40 from O&rsquo;Hare, around $25 from Midway</li>
        <li>Rideshare: around $35 to $50 from O&rsquo;Hare, $25 to $40 from Midway, before surge pricing</li>
      </ul>
      <p>
        At rush hour, traffic on the Kennedy and Stevenson expressways can make
        a car slower than the train, which runs on its own tracks.
      </p>

      <h2>How to pay</h2>
      <p>
        The cheapest way is to tap a contactless bank card or phone at the fare
        gate, or use a Ventra card or the Ventra app. A single-ride ticket from
        the station machine costs $3 ($5 at O&rsquo;Hare). Tap the same card or
        phone again and you get up to two free transfers within two hours, so
        switching from the train to a bus to reach your hotel doesn&rsquo;t
        cost extra.
      </p>

      <h2>How busy the airport stations are</h2>
      <p>
        O&rsquo;Hare is the third-busiest L station by total entries, with 2.22
        million from January through August 2026, about 9,500 on an average
        weekday. Only Clark/Lake and the Red Line&rsquo;s Lake station had more.
        Midway had 1.08 million entries over the same months, about 5,100 per
        weekday. Entries count people boarding at each station. See the full
        list of the{" "}
        <Link href="/busiest-cta-stations-bus-routes">busiest CTA stations and
        bus routes</Link>.
      </p>
      <p>
        The airport lines also carry the longest rides. Among{" "}
        <Link href="/">Transit Stats</Link> riders, the Orange Line has the
        longest average ride of any L line at 6.8 miles, and the Blue Line is
        second at 5.9 miles. More in our{" "}
        <Link href="/cta-commute-pairs">CTA commute routes</Link> breakdown.
      </p>

      <h2>Before you go</h2>
      <p>
        Weekend construction sometimes replaces part of a line with shuttle
        buses, and stations and elevators occasionally close. Check{" "}
        <a
          href="https://www.transitchicago.com/airports/"
          target="_blank"
          rel="noopener noreferrer"
        >
          the CTA&rsquo;s airport page
        </a>{" "}
        for current alerts before you head out, especially with a tight
        connection.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a
            href="https://www.transitchicago.com/airports/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Getting to and from the airports
          </a>{" "}
          (travel times, hours, directions, cost comparison)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/fares/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Fares
          </a>{" "}
          (fares effective February 20, 2023)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/orangeline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Orange Line
          </a>{" "}
          (hours of service)
        </li>
        <li>
          <a
            href="https://data.cityofchicago.org/Transportation/CTA-Ridership-L-Station-Entries-Daily-Totals/5neh-572f"
            target="_blank"
            rel="noopener noreferrer"
          >
            City of Chicago Data Portal: CTA L Station Entries, Daily Totals
          </a>{" "}
          (January 1 to August 31, 2026)
        </li>
      </ul>
    </>
  );
}
