import Link from "next/link";
import StatGrid from "@/components/charts/StatGrid";
import HorizontalBarChart from "@/components/charts/HorizontalBarChart";

// Hours come from the CTA's train line pages, its schedules page and its bus
// route pages, as read on November 22, 2026. Every time is when the first or
// last train or bus leaves a terminal. weekdayHours is our own arithmetic:
// the hours from the first weekday departure at either end of a line to the
// last one. The Loop counts as an end for the lines that circle it (Purple
// Line: Monday to Thursday, between Linden and Howard).
const headlineStats = [
  { value: "2", label: "Train lines that run 24 hours" },
  { value: "6", label: "Train lines that stop overnight" },
  { value: "17", label: "Bus routes with Owl service" },
  { value: "11:15 p.m.", label: "Last Yellow Line train from Skokie" },
];

const weekdayHours = [
  { name: "Red Line", value: 24 },
  { name: "Blue Line", value: 24 },
  { name: "Brown Line", value: 22.1 },
  { name: "Orange Line", value: 22 },
  { name: "Green Line", value: 21.4 },
  { name: "Pink Line", value: 21.4 },
  { name: "Purple Line", value: 21 },
  { name: "Yellow Line", value: 18.6 },
];

export default function ArticleContent() {
  return (
    <>
      <p>
        Two CTA train lines run 24 hours a day, every day: the Red Line and the
        Blue Line. The other six stop overnight. Their last trains leave
        between 11:15 p.m. on the Yellow Line and 2:05 a.m. on the Brown Line,
        and on weekdays the first ones start again between 3:30 and 4:40 a.m.
        Seventeen bus routes also run overnight. The CTA calls that Owl
        service.
      </p>
      <p>
        We built <Link href="/">Transit Stats</Link> so riders can log every
        CTA trip, the late ones included. Every time below is when a train or
        bus leaves the end of the line, so it reaches stops along the way later
        than that.
      </p>

      <h2 id="all-night-trains">CTA train lines that run 24 hours</h2>
      <StatGrid stats={headlineStats} />
      <p>
        Two lines run at all times, every day, over their whole length:
      </p>
      <ul>
        <li>
          Red Line: Howard to 95th/Dan Ryan, through the downtown subway
        </li>
        <li>
          Blue Line: O&rsquo;Hare to Forest Park, through the downtown subway
        </li>
      </ul>
      <p>
        Each has 33 stations. They are also the two longest lines in the
        system, at about 27.6 miles for the Blue Line and 21.9 for the Red
        Line. We measured every line for our ranking of{" "}
        <Link href="/longest-cta-bus-routes-train-lines">
          the longest CTA bus routes and train lines
        </Link>
        . Our guide to{" "}
        <Link href="/ride-every-cta-l-station">
          riding every CTA L station
        </Link>{" "}
        has a route through all eight lines.
      </p>
      <p>
        The other six lines shut down for part of the night. Hours of service
        on a weekday, from the first train to the last:
      </p>
      <HorizontalBarChart data={weekdayHours} />
      <p>
        The Brown Line comes closest to running around the clock. Monday
        through Friday nights, its last train leaves the Loop at 2:05 a.m. and
        the next morning&rsquo;s first train leaves Kimball at 4:00 a.m., a gap
        of just under two hours. The Yellow Line has the shortest day. Its last
        trains leave Howard at 11:00 p.m. and Dempster-Skokie at 11:15 p.m.,
        every day of the week.
      </p>
      <p>
        Late rides are a small share of what riders log in Transit Stats. Of
        the 48,306 rides in our{" "}
        <Link href="/cta-rush-hour-data">CTA rush hour data</Link>, which runs
        through October 2026, 2,127 started between 11 p.m. and 6 a.m. That is
        about 4%.
      </p>

      <h2 id="last-trains">When the other CTA trains stop running</h2>
      <p>
        The CTA counts a train after midnight as part of the night before, so
        the last train on a Friday night leaves early on Saturday morning.
        These are the first and last trains from each end of the six lines
        that stop overnight:
      </p>
      <ul>
        <li>
          Brown Line: the first trains leave Kimball at 4:00 a.m. and the Loop
          at 4:35 a.m. (5:00 and 5:35 a.m. on Sundays and holidays). The last
          trains leave Kimball at 1:30 a.m. and the Loop at 2:05 a.m. (1:00 and
          1:35 a.m. on Sunday and holiday nights).
        </li>
        <li>
          Orange Line: on weekdays the first trains leave Midway at 3:30 a.m.
          and the Loop at 3:55 a.m. Both are half an hour later on Saturdays
          and an hour later on Sundays and holidays. The last trains leave
          Midway at 1:05 a.m. and the Loop at 1:30 a.m. every night.
        </li>
        <li>
          Green Line: on weekdays the first trains leave Harlem/Lake at 3:45
          a.m., Ashland/63rd at 3:50 a.m. and Cottage Grove at 4:10 a.m. All
          three are an hour later on weekends and holidays. The last trains
          leave Harlem/Lake at 12:45 a.m. for Cottage Grove and 1:00 a.m. for
          Ashland/63rd. Going the other way, the last ones leave Ashland/63rd
          at 12:50 a.m. and Cottage Grove at 1:10 a.m.
        </li>
        <li>
          Pink Line: on weekdays the first trains leave 54th/Cermak at 4:00
          a.m. and the Loop at 4:25 a.m. Both are an hour later on weekends and
          holidays. The last trains leave 54th/Cermak at 1:00 a.m. and the Loop
          at 1:25 a.m. every night.
        </li>
        <li>
          Purple Line: Monday through Friday the first trains leave Howard at
          4:35 a.m. and Linden at 5:05 a.m. On Saturdays those are 5:05 and
          5:30 a.m., and on Sundays and holidays 6:05 and 6:25 a.m. The last
          train leaves Linden at 1:35 a.m., or 2:05 a.m. on Friday and Saturday
          nights. The last train from Howard to Linden leaves earlier: 1:10
          a.m. Monday through Thursday nights, 1:40 a.m. on Friday nights, 1:50
          a.m. on Saturday nights and 1:20 a.m. on Sunday and holiday nights.
          Express trains to the Loop run only in weekday rush periods.
        </li>
        <li>
          Yellow Line: on weekdays the first trains leave Howard at 4:40 a.m.
          and Dempster-Skokie at 4:55 a.m. (6:15 and 6:30 a.m. on weekends and
          holidays). The last trains leave Howard at 11:00 p.m. and
          Dempster-Skokie at 11:15 p.m. every night.
        </li>
      </ul>
      <p>
        Five of these lines use the Loop elevated tracks downtown. The last
        train out of the Loop is the Brown Line&rsquo;s, at 2:05 a.m. The first
        morning trains don&rsquo;t leave their terminals until 3:30 a.m. or
        later, so for more than an hour the only trains running downtown are in
        the Red and Blue Line subways.
      </p>

      <h2 id="owl-buses">CTA bus routes that run all night</h2>
      <p>
        Of the CTA&rsquo;s 127 bus routes, 17 have overnight Owl service. They
        don&rsquo;t all work the same way. These six run their regular route
        at all times, every day:
      </p>
      <ul>
        <li>
          20 Madison, between Austin and Michigan. Some weekday morning and
          afternoon trips continue east to Columbus/Randolph.
        </li>
        <li>22 Clark, between Howard and Clark/Harrison</li>
        <li>
          34 South Michigan, between 131st/Ellis and the 95th/Dan Ryan Red Line
          station
        </li>
        <li>49 Western, between Western/79th and Western/Berwyn</li>
        <li>
          63 63rd, between the Midway Orange Line station and 63rd/Stony Island
        </li>
        <li>
          81 Lawrence, between the Jefferson Park Blue Line station and
          Wilson/Marine
        </li>
      </ul>
      <p>
        These five keep the main part of the route running at all times. Their
        longer trips stop for part of the night, some as early as 10 p.m., so
        check the route page for the last bus that goes the whole way:
      </p>
      <ul>
        <li>
          4 Cottage Grove, between 95th/Cottage Grove and Columbus/Randolph.
          The full route starts at 115th/Cottage Grove. Some late evening,
          overnight and early morning trips run from the 95th/Dan Ryan Red Line
          station instead.
        </li>
        <li>
          53 Pulaski, between the Pulaski Orange Line station and Irving Park
          Road. The full route runs from Ford City Mall to Peterson/Pulaski.
        </li>
        <li>
          77 Belmont, between Belmont/Harlem and Belmont/Halsted. Longer trips
          run west to Belmont/Cumberland and east to Lake Shore/Diversey.
        </li>
        <li>
          79 79th, between 79th/Western and the lakefront. Longer trips start
          at Ford City Mall.
        </li>
        <li>
          87 87th, between the 87th Red Line station and 87th/Western. The full
          route runs from 88th/Cicero to 91st/Commercial.
        </li>
      </ul>
      <p>These five run a shorter or different route overnight:</p>
      <ul>
        <li>
          9 Ashland: Owl buses run between the 95th/Dan Ryan Red Line station
          and North/Clark.
        </li>
        <li>
          55 Garfield: between the Museum of Science and Industry and 55th/St.
          Louis. By day the route continues west to Midway.
        </li>
        <li>
          60 Blue Island/26th: between Washington/State downtown and the
          54th/Cermak Pink Line station.
        </li>
        <li>
          62 Archer: between State/Washington downtown and Midway Airport, by
          way of State, Roosevelt, Halsted, Archer and Cicero. You may see
          these buses called the N62.
        </li>
        <li>
          66 Chicago: between State/Washington downtown and Chicago/Austin. By
          day the route runs east to Navy Pier.
        </li>
      </ul>
      <p>
        The last one, the N5 South Shore Night Bus, runs only at night. It
        connects the 95th/Dan Ryan and 69th Red Line stations. Buses leave 95th
        from 11:50 p.m. to 4:20 a.m., and until 4:50 a.m. on the Sunday
        schedule.
      </p>
      <p>
        Several Owl routes meet the trains that run all night. The 22, 34, 87,
        N5, the overnight 9 and some overnight trips on the 4 all start or end
        at a Red Line station, and the 81 ends at Jefferson Park on the Blue
        Line.
      </p>
      <p>
        For when an Owl bus reaches your stop, check the route&rsquo;s schedule
        or the CTA&rsquo;s trip planner.
      </p>

      <h2 id="airports">Getting to O&rsquo;Hare and Midway overnight</h2>
      <p>The Blue Line runs to O&rsquo;Hare at all times, every day.</p>
      <p>
        Midway takes more planning, because the Orange Line stops overnight.
        The last train leaves the Loop for Midway at 1:30 a.m., and the last
        one leaves Midway at 1:05 a.m. On weekdays the first train leaves
        Midway at 3:30 a.m. and the first one leaves the Loop for Midway at
        3:55 a.m. Both are half an hour later on Saturdays and an hour later on
        Sundays and holidays.
      </p>
      <p>
        Overnight, the 62 Archer&rsquo;s Owl buses run between State/Washington
        downtown and Midway Airport. Check the schedule before counting on one.
        The 63 63rd bus also runs at all times between the Midway Orange Line
        station and 63rd/Stony Island, and it stops at the Red Line&rsquo;s
        63rd station. Our guide to{" "}
        <Link href="/cta-ohare-midway-airport">
          riding the CTA to O&rsquo;Hare and Midway
        </Link>{" "}
        covers train fares and where each airport&rsquo;s station is.
      </p>

      <h2 id="holidays">CTA hours on Sundays and holidays</h2>
      <p>
        Trains start later on Sundays. On each of the six lines that stop
        overnight, the first Sunday train leaves at least an hour later than
        the first weekday one. The Brown Line also ends half an hour earlier on
        Sunday nights. Its last train leaves the Loop at 1:35 a.m.
      </p>
      <p>
        The CTA runs Sunday schedules on six holidays, or on the day each is
        observed: New Year&rsquo;s Day, Memorial Day, Independence Day, Labor
        Day, Thanksgiving and Christmas. The Red and Blue Lines still run at
        all times on those days.
      </p>

      <h2 id="method">How we checked CTA hours</h2>
      <p>
        Every time here comes from the CTA&rsquo;s line and route pages and was
        current in November 2026. The hours in the chart run from the first
        weekday train to the last. The Purple Line&rsquo;s are for Linden to
        Howard, Monday through Thursday. The last train still has to finish
        its trip, so trains are on the tracks a little longer than the chart
        shows.
      </p>
      <p>
        Schedules change, and the CTA&rsquo;s service alerts list temporary bus
        reroutes. Check the line or route page before a late trip.
      </p>

      <h2 id="sources">Sources</h2>
      <ul>
        <li>
          <a
            href="https://www.transitchicago.com/redline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Red Line
          </a>{" "}
          (service at all times, every day)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/blueline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Blue Line
          </a>{" "}
          (service at all times, every day)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/brownline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Brown Line
          </a>{" "}
          (first and last trains)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/orangeline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Orange Line
          </a>{" "}
          (first and last trains)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/greenline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Green Line
          </a>{" "}
          (first and last trains on both branches)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/pinkline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Pink Line
          </a>{" "}
          (first and last trains)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/purpleline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Purple Line
          </a>{" "}
          (first and last trains, Express hours)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/yellowline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Yellow Line
          </a>{" "}
          (first and last trains)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/schedules/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Schedules and Route Info
          </a>{" "}
          (the 17 routes marked Owl, and each route&rsquo;s page with its
          overnight service)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/bus/62/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: 62 Archer
          </a>{" "}
          (Owl buses to Midway Airport, the N62 name in a service alert and
          the holiday schedule rule)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/bus/63/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: 63 63rd
          </a>{" "}
          (service at all times to the Midway Orange Line station)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/bus/N5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: N5 South Shore Night Bus
          </a>{" "}
          (hours of the night-only route)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/facts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Facts at a Glance
          </a>{" "}
          (number of bus routes and the CTA&rsquo;s description of overnight
          service)
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
          (station counts for the Red and Blue Lines)
        </li>
      </ul>
    </>
  );
}
