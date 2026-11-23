import Link from "next/link";
import StatGrid from "@/components/charts/StatGrid";
import HorizontalBarChart from "@/components/charts/HorizontalBarChart";

// The 146 total is the CTA's own count (Facts at a Glance, updated March
// 2026). stationsPerLine is our count from the CTA's List of 'L' Stops on the
// City of Chicago Data Portal (rows last updated November 19, 2025): 302
// stops grouped into 144 stations, with a station counted for every line the
// list marks it for. The 11 ends of the line are our count from the CTA's
// line pages. Fares, the State/Lake closure and the accessibility figure are
// from the CTA's pages as read on November 22, 2026.
const headlineStats = [
  { value: "146", label: "L stations counted by the CTA" },
  { value: "11", label: "Ends of the line to ride out to" },
  { value: "8:58:55", label: "Guinness record for every station" },
  { value: "$5", label: "1-Day pass with unlimited rides" },
];

const stationsPerLine = [
  { name: "Red Line", value: 33 },
  { name: "Blue Line", value: 33 },
  { name: "Green Line", value: 31 },
  { name: "Brown Line", value: 27 },
  { name: "Purple Line", value: 26 },
  { name: "Pink Line", value: 22 },
  { name: "Orange Line", value: 16 },
  { name: "Yellow Line", value: 3 },
];

export default function ArticleContent() {
  return (
    <>
      <p>
        The CTA counts 146 L stations on eight lines, and people do ride to
        every one of them in a day. The Guinness World Record is 8 hours, 58
        minutes and 55 seconds, set by three riders on November 10, 2025. You
        can also take months over it. For a one-day run, a 1-Day pass costs $5
        and covers every train and bus you need. One station, State/Lake on
        the Loop elevated, is closed for rebuilding into 2029, so nobody can
        get on or off there for now.
      </p>
      <p>
        We built <Link href="/">Transit Stats</Link> so riders can log every
        CTA trip, and its coverage map shows which stops you have been to.
      </p>

      <h2 id="how-many">How many CTA L stations are there?</h2>
      <StatGrid stats={headlineStats} />
      <p>
        The CTA says its trains serve 146 stations on eight lines. Guinness
        World Records used the same number for its record.
      </p>
      <p>
        The CTA&rsquo;s published station list comes out slightly lower, at 144
        when each station is counted once. We don&rsquo;t know which two
        stations make the difference. Stations on each line, from that list:
      </p>
      <HorizontalBarChart data={stationsPerLine} />
      <p>
        The Red and Blue Lines tie at 33. A station on several lines counts
        once for each, so the bars add up to 191. The Purple Line&rsquo;s 26
        includes the stops its Express trains make on the way to the Loop and
        around it in weekday rush periods. Between Linden and Howard, where it
        runs the rest of the time, it has nine. The Yellow Line has three:
        Howard, Oakton-Skokie and Dempster-Skokie.
      </p>
      <p>
        Most stations, 122 of the 144, are on one line. Clark/Lake has the
        most, with six: the Blue, Brown, Green, Orange, Pink and Purple Lines
        all stop there. It is also first in our ranking of{" "}
        <Link href="/busiest-cta-stations-bus-routes">
          the busiest CTA stations and bus routes
        </Link>{" "}
        in 2026.
      </p>
      <p>
        Counting by name doesn&rsquo;t work. Twenty-three names are used by
        more than one station. Five stations are called Western, two of them
        on the Blue Line, and Damen, Kedzie and Pulaski are each the name of
        four.
      </p>
      <p>
        One station is closed. State/Lake on the Loop elevated shut on January
        5, 2026 for a rebuild the CTA says will run into 2029, and it sends
        riders to Clark/Lake or Washington/Wabash. It is the only L station
        closed as of November 2026.
      </p>
      <p>
        The CTA says 110 of its 146 stations are accessible, about 75%, and its
        All Stations Accessibility Program aims to make the rest accessible by
        2038. If you need an elevator, check the CTA&rsquo;s elevator alerts on
        the day you ride.
      </p>

      <h2 id="l-challenge">The L Challenge and the record times</h2>
      <p>
        People have been racing to every L station for at least 15 years.
        Streetsblog Chicago credits Adham Fisher, a rail enthusiast visiting
        from the UK, with more or less starting the L Challenge in March 2011.
        He reached the 143 stations then open in 9 hours, 36 minutes and 33
        seconds.
      </p>
      <p>
        The rules Streetsblog describes are short. You travel by train, by bus
        and on foot. Cars, taxis, bikes and scooters are out. When a new
        station opens, the old record is frozen and the competition starts
        over. The standings it published in July 2019 also split runs into two
        classes: one where the train doors have to open at every station, and
        one where passing through a station counts.
      </p>
      <p>
        These are the fastest times for each station count, from those
        standings and from Guinness:
      </p>
      <ul>
        <li>
          143 stations, doors open at every station: Adham Fisher, 8:56:33, on
          April 29, 2012, down from his 9:36:33 the year before
        </li>
        <li>
          145 stations, doors open at every station: David Barber, 8:47:58, on
          November 11, 2016
        </li>
        <li>
          145 stations, passing through counts: Bill Cash and Alex Pisarski,
          8:40:03, on July 5, 2019
        </li>
        <li>
          146 stations, the Guinness World Record: Joabe Bayer Barbosa, James
          Barbosa and Matthew Plese, 8:58:55, on November 10, 2025
        </li>
      </ul>
      <p>
        The first three come from standings compiled by Daniel Resner and
        published by Streetsblog in July 2019. Someone may have beaten them
        since.
      </p>
      <p>
        Guinness lists its record as the fastest time to travel to all Chicago
        subway stations, and the three riders are its first holders. Its
        account of the day says they left Linden at 7:22 a.m. on a Monday and
        finished at O&rsquo;Hare on the Blue Line that afternoon, in the first
        snowstorm of the season. Guinness requires a team to travel together as
        one unit, and applicants have to be 16 or older.
      </p>
      <p>
        The Guinness time is slower than the two 145-station records. It was set
        under Guinness&rsquo;s own rules, with one more station and in snow, so
        we wouldn&rsquo;t compare them directly.
      </p>

      <h2 id="route">Planning a route through every station</h2>
      <p>
        The eight lines end at 11 places where no other line continues:
      </p>
      <ul>
        <li>Blue Line: O&rsquo;Hare and Forest Park</li>
        <li>Red Line: 95th/Dan Ryan</li>
        <li>Green Line: Harlem/Lake, Ashland/63rd and Cottage Grove</li>
        <li>Brown Line: Kimball</li>
        <li>Orange Line: Midway</li>
        <li>Pink Line: 54th/Cermak</li>
        <li>Purple Line: Linden</li>
        <li>Yellow Line: Dempster-Skokie</li>
      </ul>
      <p>
        Ride a train to any of those and the only way onward by rail is back
        the way you came. That is why the 2019 record route used buses to get
        between lines. Howard is different. The Red, Purple and Yellow Lines
        all meet there.
      </p>
      <p>Streetsblog reported the route Cash and Pisarski took in 2019:</p>
      <ol>
        <li>
          Start at Linden at 5:18 a.m. and ride the Purple Line to Howard.
        </li>
        <li>Take the Yellow Line to Dempster-Skokie and back.</li>
        <li>Ride a Purple Line Express train from Howard to Belmont.</li>
        <li>
          Take the Red Line south to 95th/Dan Ryan, then back north to 63rd.
        </li>
        <li>
          Catch a bus west to Ashland/63rd, ride the Green Line to Halsted,
          then catch another bus east to Cottage Grove.
        </li>
        <li>
          Ride the Green Line north to Roosevelt and change to the Orange Line
          for Midway.
        </li>
        <li>
          Take a Cicero Avenue bus north to the Pink Line, go one stop west to
          54th/Cermak, then ride back toward the Loop.
        </li>
        <li>
          Change at Clinton to a Green Line train west to Harlem/Lake, and take
          a bus to Forest Park.
        </li>
        <li>
          Ride the Blue Line through downtown to O&rsquo;Hare, then back to
          Jefferson Park.
        </li>
        <li>
          Take the 81 Lawrence bus to Kimball, the end of the Brown Line, and
          head downtown.
        </li>
        <li>Go around the Loop elevated and finish at State/Lake.</li>
      </ol>
      <p>
        Their Express train ran past most of the Red Line stations between
        Howard and Belmont without stopping, which is why the standings count
        the run as passing through every station. To have the doors open at
        each of those, take the Red Line from Howard. State/Lake, where they
        finished, is the station that is closed now.
      </p>
      <p>The CTA&rsquo;s schedules set a few limits:</p>
      <ul>
        <li>
          Purple Line Express trains run only in weekday rush periods. You
          don&rsquo;t need one. Only eight stations are on the Purple Line
          alone, the ones from Linden to South Boulevard. Every other Purple
          Line stop is also on the Red Line or the Brown Line.
        </li>
        <li>
          The Yellow Line keeps the shortest hours. Its first train leaves
          Howard at 4:40 a.m. on weekdays and 6:15 a.m. on weekends and
          holidays, and its last one leaves Howard at 11:00 p.m.
        </li>
        <li>
          The Red and Blue Lines run all night, so they can go first or last.
          Hours for every line are in our guide to{" "}
          <Link href="/which-cta-lines-run-24-hours">
            which CTA lines run 24 hours
          </Link>
          .
        </li>
        <li>
          The Blue and Red Lines are also the longest, at about 27.6 and 21.9
          miles from end to end. We measured all eight for our ranking of{" "}
          <Link href="/longest-cta-bus-routes-train-lines">
            the longest CTA bus routes and train lines
          </Link>
          .
        </li>
      </ul>

      <h2 id="cost">How much it costs to ride every station</h2>
      <p>
        A 1-Day CTA/Pace Pass costs $5. It gives unlimited rides on the CTA and
        Pace for 24 hours from the first time you use it. You can load one onto
        a Ventra Card or a contactless bank card at a Ventra vending machine,
        or buy a disposable 1-Day Ventra Ticket from the machine for the same
        $5.
      </p>
      <p>
        On a route like the one above, paying by the ride costs more. The
        regular fare is $2.50 on the L and $2.25 on a bus, with up to two more
        rides free within two hours. Two L fares already add up to $5, and that
        route took more than eight hours and five buses.
      </p>
      <p>
        The pass also covers O&rsquo;Hare. Entering the O&rsquo;Hare station
        costs $5 with a regular fare, and the CTA says an unlimited ride pass
        boards there at no extra charge. Our guide to{" "}
        <Link href="/cta-ohare-midway-airport">
          riding the CTA to O&rsquo;Hare and Midway
        </Link>{" "}
        covers both airport stations.
      </p>
      <p>
        If you spread the stations over months of regular riding, there is
        nothing extra to buy. You pay your usual fares and get off somewhere
        new now and then.
      </p>

      <h2 id="tracking">Keeping track of stations you visit</h2>
      <p>
        A record attempt needs proof. Guinness had its record holders take a
        selfie and write down the time at every stop, and witnesses signed
        their logs.
      </p>
      <p>
        For your own count, decide what a visit means before you start. The L
        Challenge standings treat doors opening at a station and passing
        through it as different things. A checklist works if it has the line
        next to each name, so you can tell the five Westerns apart.
      </p>
      <p>
        Transit Stats can keep the count for you. When you log a ride, the
        stops where it started and ended are marked on the coverage map in the
        History tab. Tap a stop to see its lines, how many times you have been
        there and when you last visited. A card shows how many train stops and
        bus stops you have visited and what share of all CTA stops that is.
      </p>
      <p>
        The map counts a stop when a ride starts or ends there. Riding through
        a station doesn&rsquo;t mark it, so a one-day run like the route above
        would fill in only the places where you got on and off. It suits the
        slow version better, where you get off at a station you haven&rsquo;t
        used before on trips you were taking anyway.
      </p>

      <h2 id="method">How we counted L stations</h2>
      <p>
        The 146 stations and eight lines are the CTA&rsquo;s own figures.
        Stations per line, shared stations and repeated names are our counts
        from the station list the CTA publishes on the City of Chicago&rsquo;s
        data portal. That list is older than the State/Lake closure and still
        includes the station. The 11 ends of the line are our count too.
      </p>
      <p>
        Record times and routes are as reported by Guinness World Records and
        Streetsblog Chicago. We haven&rsquo;t timed a route ourselves.
      </p>
      <p>
        Fares, hours and closures change. Check the CTA&rsquo;s alerts before
        you set out.
      </p>

      <h2 id="sources">Sources</h2>
      <ul>
        <li>
          <a
            href="https://www.transitchicago.com/facts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Facts at a Glance
          </a>{" "}
          (number of stations and train lines)
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
          (stations on each line, shared stations and repeated names)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/station/stlk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: State/Lake Station Information
          </a>{" "}
          (the closure and the stations to use instead)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/alerts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: System Status &amp; Alerts
          </a>{" "}
          (station closures)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/accessibility/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Accessible transit
          </a>{" "}
          (number of accessible stations)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/accessibility/asap/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: All Stations Accessibility Program (ASAP)
          </a>{" "}
          (share of stations accessible and the 2038 goal)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/fares/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Fare Information
          </a>{" "}
          (train and bus fares, the 1-Day pass and the O&rsquo;Hare fare)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/passes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Unlimited Ride Passes
          </a>{" "}
          (how passes start and where to load them)
        </li>
        <li>
          <a
            href="https://www.guinnessworldrecords.com/world-records/515085-fastest-time-to-travel-to-all-chicago-subway-stations"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guinness World Records: Fastest time to travel to all Chicago
            subway stations
          </a>{" "}
          (the record time, date, holders and rules)
        </li>
        <li>
          <a
            href="https://www.guinnessworldrecords.com/news/2026/1/a-friend-groups-mission-to-ride-every-subway-stop-and-run-every-street-in-chicago"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guinness World Records: A friend group&rsquo;s mission to ride
            every subway stop, and run every street, in Chicago
          </a>{" "}
          (the account of the record day)
        </li>
        <li>
          <a
            href="https://chi.streetsblog.org/2019/07/05/meet-chicagos-newest-l-racing-champs-bill-cash-and-alex-pisarski"
            target="_blank"
            rel="noopener noreferrer"
          >
            Streetsblog Chicago: Meet Chicago&rsquo;s Newest &lsquo;L&rsquo;
            Racing Champs, Bill Cash and Alex Pisarski
          </a>{" "}
          (the L Challenge rules, earlier record times and the 2019 route)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/purpleline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Purple Line
          </a>{" "}
          (when Express trains run)
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
          (the eight line pages, for where each line ends)
        </li>
      </ul>
    </>
  );
}
