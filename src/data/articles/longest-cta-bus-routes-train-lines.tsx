import Link from "next/link";
import StatGrid from "@/components/charts/StatGrid";
import HorizontalBarChart from "@/components/charts/HorizontalBarChart";

// Lengths are our own measurements, in miles one way. Bus routes: City of
// Chicago open data, "CTA - Bus Routes" (6uva-a5ei, updated January 2025),
// longest path along each mapped route between stops on the CTA's stop
// lists dated August 18, 2026. Train lines: "CTA - 'L' (Rail) Lines"
// (xbyr-jnvx, updated July 2024), terminal to terminal, with one lap of the
// Loop (2.0 miles) for the lines that circle it. The 53 Pulaski is an
// estimate: the map ends at 31st Street and the route now runs to Ford City.
const headlineStats = [
  { value: "27.6 mi", label: "Longest train line, the Blue Line" },
  { value: "18.9 mi", label: "Longest bus route, the 26" },
];

const longestBusRoutes = [
  { name: "26 South Shore Express", value: 18.9 },
  { name: "9 Ashland (longest trips)", value: 18.6 },
  { name: "53 Pulaski (estimate)", value: 17 },
  { name: "X9 Ashland Express", value: 17 },
  { name: "94 California", value: 16.3 },
  { name: "169 69th/UPS Express", value: 16.1 },
  { name: "X49 Western Express", value: 15.8 },
  { name: "49 Western", value: 15.8 },
  { name: "J14 Jeffery Jump", value: 15.7 },
  { name: "4 Cottage Grove", value: 15 },
];

const allDayRoutes = [
  { name: "9 Ashland", value: 17.4 },
  { name: "53 Pulaski (estimate)", value: 17 },
  { name: "94 California", value: 16.3 },
  { name: "49 Western", value: 15.8 },
  { name: "J14 Jeffery Jump", value: 15.7 },
  { name: "4 Cottage Grove", value: 15 },
];

const trainLines = [
  { name: "Blue Line", value: 27.6 },
  { name: "Red Line", value: 21.9 },
  { name: "Green Line (to Ashland/63rd)", value: 19 },
  { name: "Purple Line (rush Express)", value: 16.3 },
  { name: "Orange Line", value: 12.4 },
  { name: "Brown Line", value: 11.4 },
  { name: "Pink Line", value: 10.5 },
  { name: "Yellow Line", value: 4.9 },
];

export default function ArticleContent() {
  return (
    <>
      <p>
        The longest CTA bus route is the 26 South Shore Express, which covers
        about 18.9 miles each way between 103rd/Stony Island and Chicago Avenue
        in Streeterville. It runs on weekdays only. The longest routes that run
        all day, every day are the 9 Ashland at about 17.4 miles and the 53
        Pulaski at about 17. The longest train line is the Blue Line, about
        27.6 miles from O&rsquo;Hare to Forest Park.
      </p>
      <p>
        We built <Link href="/">Transit Stats</Link> to show riders their own
        trips, including how far each one went, so we wanted to know how far
        the routes themselves go. The CTA doesn&rsquo;t list a length for any
        route or line, so we measured every bus route and train line on the
        City of Chicago&rsquo;s route maps. Every figure here is one way and
        should be right to within about half a mile.
      </p>

      <h2 id="longest-bus-routes">The 10 longest CTA bus routes</h2>
      <StatGrid stats={headlineStats} />
      <p>
        The CTA runs 127 bus routes. These are the ten longest, in miles one
        way, each measured over its longest regular trip:
      </p>
      <HorizontalBarChart data={longestBusRoutes} />
      <ol>
        <li>
          26 South Shore Express: 18.9 miles, 103rd/Stony Island to Chicago
          Avenue in Streeterville. Weekdays only. Northbound buses leave from
          4:15 a.m. to 1:45 p.m. and southbound buses from 1:15 to 9:20 p.m.
        </li>
        <li>
          9 Ashland: 18.6 miles, Vincennes/104th to the Ravenswood Metra
          station, on some weekday morning and afternoon trips. Its regular
          route starts at Ashland/95th and covers 17.4 miles.
        </li>
        <li>
          53 Pulaski: about 17 miles, Ford City Mall to Peterson/Pulaski, every
          day. This one is our estimate, explained in the last section.
        </li>
        <li>
          X9 Ashland Express: 17.0 miles, Ashland/95th to Irving Park/Sheridan,
          in weekday rush periods only.
        </li>
        <li>94 California: 16.3 miles, 74th/Damen to Rockwell/Addison, every day.</li>
        <li>
          169 69th/UPS Express: 16.1 miles, the 69th Red Line station to the
          UPS facility in Hodgkins, for weekday shift changes only.
        </li>
        <li>
          X49 Western Express: 15.8 miles, Western/79th to Western/Berwyn, in
          weekday rush periods only.
        </li>
        <li>
          49 Western: 15.8 miles, Western/79th to Western/Berwyn, every day at
          all hours.
        </li>
        <li>
          J14 Jeffery Jump: 15.7 miles, 103rd/Stony Island to
          Washington/Jefferson, every day.
        </li>
        <li>
          4 Cottage Grove: 15.0 miles, 115th/Cottage Grove to
          Columbus/Randolph, every day.
        </li>
      </ol>
      <p>
        Some of these are too close to rank with confidence. The 9&rsquo;s
        longest trips come out less than half a mile shorter than the 26. The 53
        Pulaski and the X9 Ashland Express both come out at about 17 miles, and
        the 94, 169, X49, 49 and J14 are within about half a mile of each
        other.
      </p>
      <p>
        Four of the ten run on weekdays only: the 26, X9, 169 and X49. Nine of
        the ten run mostly north and south. The 169 is the exception. It heads
        west from the 69th Red Line station to a UPS facility in suburban
        Hodgkins. The 26 and the J14 start from the same terminal at
        103rd/Stony Island, and neither stops between 67th/Jeffery and the
        Museum Campus.
      </p>
      <p>
        Just outside the ten are the 28 Stony Island (14.2 miles on its longest
        trips) and the 8 Halsted (13.9).
      </p>

      <h2 id="all-day-routes">The longest all-day CTA bus routes</h2>
      <p>
        Take out the weekday-only trips and routes and the list looks
        different. These are the longest routes that cover their full length
        every day of the week, from early morning into the night, in miles one
        way:
      </p>
      <HorizontalBarChart data={allDayRoutes} />
      <p>
        The 9 Ashland and the 53 Pulaski are close enough that we
        wouldn&rsquo;t call a winner, since our figure for the 53 is an
        estimate. They are also the two busiest bus routes in the system.
        From January through August 2026 the 9 carried 4.27 million rides and
        the 53 carried 3.91 million, and the 4 Cottage Grove and 49 Western are
        in the top ten as well. The full ranking is in our list of the{" "}
        <Link href="/busiest-cta-stations-bus-routes">
          busiest CTA stations and bus routes
        </Link>
        .
      </p>
      <p>
        Of these six, the 49 Western is the only one that runs its whole route
        at all times, every day. The 9, 53 and 4 have overnight Owl service
        too, but not end to end. Overnight, the 9 runs between the 95th/Dan
        Ryan Red Line station and North/Clark, the 53 between the Pulaski
        Orange Line station and Irving Park Road, and the 4 between 95th Street
        and Columbus/Randolph, with some overnight trips starting at the
        95th/Dan Ryan Red Line station. All 17 Owl routes are in our guide
        to{" "}
        <Link href="/which-cta-lines-run-24-hours">
          which CTA lines run 24 hours
        </Link>
        .
      </p>

      <h2 id="train-lines">CTA train lines ranked by length</h2>
      <p>
        The CTA has eight train lines. Measured in miles from one end to the
        other on the City&rsquo;s map of the L, the Blue Line is the longest by
        more than five miles:
      </p>
      <HorizontalBarChart data={trainLines} />
      <ul>
        <li>Blue Line: 27.6 miles, O&rsquo;Hare to Forest Park</li>
        <li>Red Line: 21.9 miles, Howard to 95th/Dan Ryan</li>
        <li>
          Green Line: 19.0 miles, Harlem/Lake to Ashland/63rd. To Cottage
          Grove, the other branch, it is 17.3 miles.
        </li>
        <li>
          Purple Line: 16.3 miles on weekday rush Express trips, Linden to the
          Loop and around it. The rest of the time it covers 3.9 miles, Linden
          to Howard.
        </li>
        <li>Orange Line: 12.4 miles, Midway to the Loop and around it</li>
        <li>Brown Line: 11.4 miles, Kimball to the Loop and around it</li>
        <li>Pink Line: 10.5 miles, 54th/Cermak to the Loop and around it</li>
        <li>Yellow Line: 4.9 miles, Dempster-Skokie to Howard</li>
      </ul>
      <p>
        For the lines that circle the Loop, we counted the trip in and one full
        lap, which is about 2 miles around. The longest bus route, the 26, is
        about 8.7 miles shorter than the Blue Line.
      </p>
      <p>
        The CTA&rsquo;s own totals measure something else. It says its trains
        run on 224.1 miles of track and its buses cover 1,526 route miles.
        It also counts 146 train stations, and we wrote a guide to{" "}
        <Link href="/ride-every-cta-l-station">
          riding every CTA L station
        </Link>
        .
      </p>

      <h2 id="blue-line">How long is the Blue Line?</h2>
      <p>
        The Blue Line is about 27.6 miles long from O&rsquo;Hare to Forest
        Park, with 33 stations. About 17.1 of those miles are between
        O&rsquo;Hare and Clark/Lake downtown. The other 10.5 are between
        Clark/Lake and Forest Park.
      </p>
      <p>
        It is one of two CTA lines that run at all times, every day. The Red
        Line is the other. Our guide to{" "}
        <Link href="/cta-ohare-midway-airport">
          riding the CTA to O&rsquo;Hare and Midway
        </Link>{" "}
        covers the ride time, the fare and where to board.
      </p>

      <h2 id="red-line">How long is the Red Line?</h2>
      <p>
        The Red Line is about 21.9 miles long from Howard to 95th/Dan Ryan,
        with 33 stations. Downtown sits close to the middle: Howard to the
        Lake station is about 10.5 miles, and Lake to 95th/Dan Ryan is about
        11.4.
      </p>
      <p>
        The CTA is extending the Red Line 5.5 miles south from 95th/Dan Ryan to
        130th Street, with four new stations near 103rd Street, 111th Street,
        Michigan Avenue and 130th Street. Added to
        today&rsquo;s line, that would bring the Red Line to about 27 miles,
        nearly as long as the Blue Line.
      </p>

      <h2 id="shortest-line">The shortest CTA train line</h2>
      <p>
        The Yellow Line is the shortest CTA train line at about 4.9 miles. It
        has three stations: Dempster-Skokie, Oakton-Skokie and Howard. The CTA
        says the line is still commonly known by its original name, the Skokie
        Swift, which began service on April 20, 1964.
      </p>
      <p>
        For most of the week the Purple Line covers even less ground. Outside
        the weekday rush periods it runs only between Linden and Howard, about
        3.9 miles. Express trips to the Loop run Monday through Friday. They
        leave Linden from 5:05 to 9:15 a.m. and from 2:05 to 6:25 p.m.
      </p>

      <h2 id="method">How we measured CTA route lengths</h2>
      <p>
        These are our own measurements, not official figures. The CTA
        doesn&rsquo;t list a length for any route or line, so we measured them
        on the City of Chicago&rsquo;s maps of CTA bus routes and L lines.
      </p>
      <ul>
        <li>
          Each bus route is measured over its longest regular trip, and each
          train line from one end to the other.
        </li>
        <li>
          The 53 Pulaski now runs to Ford City Mall, farther south than the
          City&rsquo;s map shows, so its length is an estimate.
        </li>
        <li>
          As a check, the train lines we measured add up to 102.7 miles. The
          CTA&rsquo;s own figures for its elevated, ground level, embankment
          and subway sections add up to 102.8.
        </li>
        <li>
          Station counts come from the City&rsquo;s list of L stops, and hours
          come from the CTA&rsquo;s route pages as of November 2026.
        </li>
      </ul>
      <p>
        Most riders cover only part of a route. In the rides logged in
        Transit Stats, the longest average train ride is on the Orange Line at
        6.8 miles, ahead of the Blue Line at 5.9, and the J14 Jeffery Jump
        leads the buses at 7.6 miles per ride. The full list is in{" "}
        <Link href="/cta-commute-pairs">the most common CTA commutes</Link>.
      </p>

      <h2 id="sources">Sources</h2>
      <ul>
        <li>
          <a
            href="https://data.cityofchicago.org/Transportation/CTA-Bus-Routes/6uva-a5ei"
            target="_blank"
            rel="noopener noreferrer"
          >
            City of Chicago Data Portal: CTA Bus Routes
          </a>{" "}
          (route map used for bus lengths, updated January 8, 2025)
        </li>
        <li>
          <a
            href="https://data.cityofchicago.org/Transportation/CTA-L-Rail-Lines/xbyr-jnvx"
            target="_blank"
            rel="noopener noreferrer"
          >
            City of Chicago Data Portal: CTA &lsquo;L&rsquo; (Rail) Lines
          </a>{" "}
          (line map used for train lengths, updated July 23, 2024)
        </li>
        <li>
          <a
            href="https://data.cityofchicago.org/Transportation/CTA_BusStops/qs84-j7wh"
            target="_blank"
            rel="noopener noreferrer"
          >
            City of Chicago Data Portal: CTA Bus Stops
          </a>{" "}
          (stop locations, last updated June 16, 2022, used to place each
          route&rsquo;s stops on the map)
        </li>
        <li>
          <a
            href="https://data.cityofchicago.org/Transportation/CTA-System-Information-List-of-L-Stops/8pix-ypme"
            target="_blank"
            rel="noopener noreferrer"
          >
            City of Chicago Data Portal: CTA System Information, List of
            &lsquo;L&rsquo; Stops
          </a>{" "}
          (station counts by line)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/schedules/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Schedules and Route Info
          </a>{" "}
          (the route list, each route&rsquo;s hours and its stop list dated
          August 18, 2026)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/bus/26/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: 26 South Shore Express
          </a>{" "}
          (terminals and hours)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/bus/9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: 9 Ashland
          </a>{" "}
          (terminals, longer weekday trips and overnight service)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/bus/53/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: 53 Pulaski
          </a>{" "}
          (terminals and overnight service)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/bus/49/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: 49 Western
          </a>{" "}
          (service at all times)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/blueline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Blue Line
          </a>{" "}
          (terminals and hours)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/redline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Red Line
          </a>{" "}
          (terminals and hours)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/purpleline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Purple Line
          </a>{" "}
          (Express hours)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/yellowline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Yellow Line
          </a>{" "}
          (terminals and the Skokie Swift name)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/rle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Red Line Extension Project
          </a>{" "}
          (length and stations of the extension)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/facts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Facts at a Glance
          </a>{" "}
          (number of routes, route miles, track miles and the Skokie Swift
          opening date)
        </li>
      </ul>
    </>
  );
}
