import Link from "next/link";

// Every detail about another app comes from its App Store listing or its
// maker's own pages, read November 22, 2026: the US App Store listings for
// Ventra, Transit, Transit Stop, Citymapper and Google Maps (features, prices,
// in-app purchases, last update, number of ratings), ventrachicago.com/app,
// transitchicago.com/tracker and /developers, transitapp.com/region/chicago,
// Transit's Royale FAQ and its list of agencies that give Royale to riders,
// and Google's Maps help page. "With ads" means the listing's age rating says
// "Contains Advertising". Android versions were checked on Google Play for
// Ventra, Transit, Citymapper and Google Maps only. Nothing here was tested
// side by side, and the article says so. Star ratings are left out on
// purpose. Transit Stats details match the site FAQ and privacy policy. Its
// price, PRO upgrade and version history are left out on Charles's call.

export default function ArticleContent() {
  return (
    <>
      <p>
        The best CTA app depends on what you need it to do. Ventra is the
        CTA&rsquo;s official app and handles your fare. Transit and Transit
        Stop are built around arrival times. Citymapper and Google Maps give
        you directions. Transit Stats, which we make, keeps a record of the
        rides you take.
      </p>
      <p>
        We make one of the apps on this list. What we say about the others
        comes from their App Store listings and their makers&rsquo; own pages.
        All six are free to download.
      </p>

      <h2 id="at-a-glance">Best CTA apps at a glance</h2>
      <ul>
        <li>
          <strong>Ventra</strong>, from the Chicago Transit Authority: load
          value and passes,
          check your balance, buy Metra tickets and see arrival times. Free.
        </li>
        <li>
          <strong>Transit</strong>, from Transit App, Inc.: arrival times and
          trip planning for
          the CTA, Pace and Metra. Free, with an optional subscription called
          Royale.
        </li>
        <li>
          <strong>Transit Stop: CTA Tracker</strong>, from Kramer Concepts: CTA
          bus and train
          arrival times and your favorite stops. Free with ads, and $4.99 to
          remove them.
        </li>
        <li>
          <strong>Citymapper</strong>, from Citymapper Limited: trip planning
          with turn-by-turn
          directions. Free with ads, with optional purchases called Club.
        </li>
        <li>
          <strong>Google Maps</strong>, from Google: directions and departure
          times. Free with
          ads.
        </li>
        <li>
          <strong>Transit Stats</strong>, from us: logs your CTA rides, turns
          them into stats,
          a map and achievements, and shows arrival times. Free.
        </li>
      </ul>

      <h2 id="ventra">Ventra: the official app for paying fares</h2>
      <p>
        Ventra is published by the Chicago Transit Authority, and it&rsquo;s
        the app for your fare. You can check your balance and passes, load
        value or a pass, turn autoload on or off, and buy and use Metra mobile
        tickets. It can also add a Ventra Card to your iPhone and Apple Wallet,
        so you can pay for CTA and Pace rides with your phone.
      </p>
      <p>
        It does more than fares. You get real-time arrivals and departures for
        the CTA, Metra and Pace, from a stop you pick, your favorites or the
        stops near you. Trip Tools plans trips across the CTA, Metra, Pace and
        Divvy stations. The CTA&rsquo;s own tracker page sends riders to the
        Ventra app for arrivals, trip planning and fares in one place.
      </p>
      <p>
        Ventra is free on iPhone and Android. If you use it mostly to look up
        past rides, we wrote a separate guide to{" "}
        <Link href="/cta-ventra-ride-history">
          your CTA and Ventra ride history
        </Link>
        .
      </p>

      <h2 id="transit">Transit: arrival times and trip planning</h2>
      <p>
        Transit covers the whole region in one app. It has real-time data and
        schedules for the CTA, Pace and Metra, and it shows the service changes
        in effect. You get live departure times and vehicle tracking, plus a
        trip planner that can mix modes, such as a bike and a train.
      </p>
      <p>
        Bus schedules, stop locations, subway maps and the trip planner work
        offline, which helps underground. A feature called GO sets a departure
        alarm and tells you when to get off or transfer. Riders also report how
        crowded a vehicle is, and the app shows those reports to everyone else.
      </p>
      <p>
        Transit is free on iPhone and Android, with limits. The free version
        always includes the trip planner with up to three results, GO, and
        departure times for at least three lines plus every line with a stop
        near you. Royale, the paid subscription, adds future departure times
        and vehicle tracking for any line, and more trip results. It costs
        around $5 a month or $25 a year, depending on where you live. Pace is
        one of the agencies that give their frequent riders Royale for free.
      </p>

      <h2 id="transit-stop">Transit Stop: a CTA tracker for arrivals</h2>
      <p>
        Transit Stop is a tracker for CTA buses and trains. It shows nearby
        bus and train stops on a map, with arrival times and service updates.
        You can save the stops you use most and sort them into groups, and it
        runs on Apple Watch.
      </p>
      <p>
        It also marks when live tracking or arrival information is limited, so
        you can tell a real prediction from a gap.
      </p>
      <p>
        It&rsquo;s free with ads, and a $4.99 in-app purchase removes them.
        It&rsquo;s made by Kramer Concepts and isn&rsquo;t affiliated with the
        CTA.
      </p>

      <h2 id="directions">Citymapper and Google Maps: directions</h2>
      <p>
        Use these two when you need directions.
      </p>
      <p>
        Citymapper covers Chicago. It plans a trip across buses, trains, bike
        share, ride share and walking, then gives turn-by-turn directions with
        live wait times. You can follow your bus or train on a map, get an
        alert when it&rsquo;s time to get off, and subscribe to a line to hear
        about delays. Divvy is one of its bike share partners. It&rsquo;s free
        with ads on iPhone and Android, with optional Club and Club+ purchases
        from $1.49 to $99.99.
      </p>
      <p>
        Google Maps has by far the most ratings of any app here. It gives bus
        and train directions with real-time updates. Some stations show
        real-time departures and others show a schedule. It&rsquo;s free with
        ads on iPhone and Android.
      </p>
      <p>
        For what a trip to the airport costs and how long it takes, see{" "}
        <Link href="/cta-ohare-midway-airport">
          our guide to taking the CTA to O&rsquo;Hare and Midway
        </Link>
        .
      </p>

      <h2 id="transit-stats">Transit Stats: a record of your CTA rides</h2>
      <p>
        This one is ours.{" "}
        <Link href="/">Transit Stats</Link> is the only app here built around
        a log of the rides you take. Tap Start live ride and it looks for stops
        within about 150 meters, then suggests your line and starting stop. GPS
        measures the distance as you go, and the app suggests your exit stop
        when you finish. You can also add a ride by hand. It covers all eight L
        lines and every CTA bus route.
      </p>
      <p>
        From that log you get totals for your rides, distance and time over
        the last week, month or year, or all time. There is a map of the stops
        you have visited, 40 achievements and citywide leaderboards. An
        Arrivals tab shows live arrival times for CTA train stations and bus
        stops and keeps your most used stops in one place. The app also shows
        CTA service alerts.
      </p>
      <p>What it doesn&rsquo;t do:</p>
      <ul>
        <li>
          It doesn&rsquo;t plan trips or give directions. Use Transit,
          Citymapper or Google Maps for that.
        </li>
        <li>
          It doesn&rsquo;t pay fares or connect to Ventra. It&rsquo;s an
          independent app.
        </li>
        <li>It&rsquo;s for iPhone. There is no Android version.</li>
      </ul>
      <p>
        Transit Stats is free. Logging rides, your stats, the map,
        achievements, leaderboards and arrival times all come with it. If you
        want to see what riders&rsquo; logs add up to, we publish the numbers
        in{" "}
        <Link href="/cta-ridership-data">our CTA ridership data</Link>.
      </p>

      <h2 id="cta-app">Does the CTA have an app?</h2>
      <p>
        Yes. Ventra is the CTA&rsquo;s app, published by the Chicago Transit
        Authority.
      </p>
      <p>
        The CTA&rsquo;s Bus Tracker and Train Tracker are web pages. Both
        give estimated arrival times, both can show vehicles on a map, and
        both also work by text message. You don&rsquo;t
        need to install anything to use them.
      </p>
      <p>
        The CTA also publishes its Train Tracker, Bus Tracker and customer
        alerts data for outside developers. Transit Stats uses the Train
        Tracker and Bus Tracker data for its arrival times.
      </p>

      <h2 id="method">How we picked these apps</h2>
      <p>
        We picked the CTA&rsquo;s own app, the biggest arrival and directions
        apps that cover Chicago, and ours. There are plenty of smaller CTA
        trackers, and we left them out.
      </p>
      <p>
        We didn&rsquo;t test the apps side by side, so this isn&rsquo;t a
        ranking. Features and prices come from each app&rsquo;s App Store
        listing and its maker&rsquo;s own pages.
      </p>

      <h2 id="sources">Sources</h2>
      <ul>
        <li>
          <a
            href="https://apps.apple.com/us/app/id1005645256"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ventra on the App Store
          </a>{" "}
          (publisher, fare features, arrivals, Ventra Card in Apple Wallet)
        </li>
        <li>
          <a
            href="https://www.ventrachicago.com/app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ventra: The Ventra app
          </a>{" "}
          (Trip Tools, paying for CTA and Pace rides by phone, the Android
          version)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/tracker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Bus Tracker &amp; Train Tracker
          </a>{" "}
          (Bus Tracker and Train Tracker, tracking by text, the pointer to the
          Ventra app)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/developers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA: Developer Center
          </a>{" "}
          (the data the CTA publishes for outside developers)
        </li>
        <li>
          <a
            href="https://apps.apple.com/us/app/id498151501"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transit on the App Store
          </a>{" "}
          (offline use, GO, crowding reports, Royale prices)
        </li>
        <li>
          <a
            href="https://transitapp.com/region/chicago"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transit: Transit app for the Chicago area
          </a>{" "}
          (real-time data and schedules for the CTA, Pace and Metra)
        </li>
        <li>
          <a
            href="https://help.transitapp.com/article/362-royale-faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transit: Royale FAQ
          </a>{" "}
          (what stays free, what Royale adds, prices by region)
        </li>
        <li>
          <a
            href="https://help.transitapp.com/article/436-transit-agencies-gifting-royale-to-their-riders"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transit: Transit agencies providing Royale to their riders
          </a>{" "}
          (Pace on the list of agencies that give Royale to frequent riders)
        </li>
        <li>
          <a
            href="https://apps.apple.com/us/app/id414569920"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transit Stop: CTA Tracker on the App Store
          </a>{" "}
          (features, ads, the $4.99 purchase, not affiliated with the CTA)
        </li>
        <li>
          <a
            href="https://apps.apple.com/us/app/id469463298"
            target="_blank"
            rel="noopener noreferrer"
          >
            Citymapper on the App Store
          </a>{" "}
          (Chicago coverage, features, Club purchases)
        </li>
        <li>
          <a
            href="https://apps.apple.com/us/app/id585027354"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps on the App Store
          </a>{" "}
          and{" "}
          <a
            href="https://support.google.com/maps/answer/6142130?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps Help: Get train and bus departures
          </a>{" "}
          (transit directions, ads, real-time and scheduled departures)
        </li>
        <li>
          Google Play listings for{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.ventrachicago.riderapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ventra
          </a>
          ,{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.thetransitapp.droid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transit
          </a>
          ,{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.citymapper.app.release"
            target="_blank"
            rel="noopener noreferrer"
          >
            Citymapper
          </a>{" "}
          and{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.google.android.apps.maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps
          </a>{" "}
          (Android versions)
        </li>
        <li>
          <a
            href="https://apps.apple.com/us/app/id6747690858"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transit Stats on the App Store
          </a>
        </li>
      </ul>
    </>
  );
}
