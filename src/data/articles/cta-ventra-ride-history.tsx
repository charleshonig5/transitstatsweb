import Link from "next/link";

// Everything about Ventra comes from Ventra's own pages, read November 22,
// 2026: ventrachicago.com/how-to/why-register, /how-to/app-my-ventra-cards,
// /how-to/app-faq, /how-to/contactless-bankcards, /how-to/mobile-wallet-apps,
// /how-to/ventra-reader, /applepay-faq, /featured-questions, /terms and
// /contact-customer-service. Where riders pay comes from the CTA's how-to
// guides (transitchicago.com/howto/riding-the-train and /riding-the-bus).
// Ventra publishes no history window, no export and no screen-by-screen steps,
// so the article says that instead of stating any. Transit Stats details match
// the site FAQ and the app's CSV export.

export default function ArticleContent() {
  return (
    <>
      <p>
        To see your Ventra ride history, sign in to your Ventra account in the
        Ventra app or at ventrachicago.com. In the app it&rsquo;s under My
        Ventra Cards, in the same section as your balance and passes. It covers
        every card registered to your account, and a new ride can take up to 20
        minutes to show up.
      </p>
      <p>
        Two things trip people up. A card bought at a vending machine has no
        online account to sign in to until you register it, and Ventra
        doesn&rsquo;t say how far back its history goes.
      </p>

      <h2 id="ventra-history">How to see your Ventra ride history</h2>
      <p>
        A Ventra Card pays fares on the CTA and Pace, so this is your record of
        fares paid on both. Metra tickets are bought separately in the Ventra
        app. There are three ways to get to your history:
      </p>
      <ul>
        <li>
          In the Ventra app: sign in and open My Ventra Cards. Your ride and
          transaction history is there, along with your balance and passes.
        </li>
        <li>
          On the web: log in to your account at ventrachicago.com. Your ride
          history is part of your account there.
        </li>
        <li>
          By phone: call customer service at 1-877-669-8368, Monday to Friday
          from 6 a.m. to 8 p.m. and Saturday from 8:30 a.m. to 5 p.m. They can
          help with any registered card.
        </li>
      </ul>
      <p>
        Ventra doesn&rsquo;t mention a way to download or export your history.
      </p>
      <p>
        Only cards registered to your account appear. To add another card in
        the app, tap the Add Card icon in the Cards section. It&rsquo;s a card
        with a plus sign, in the upper right.
      </p>

      <h2 id="register">Your Ventra Card has to be registered</h2>
      <p>
        An unregistered card has no online account to sign in to, so you
        can&rsquo;t see its rides in the app or on the website. Whether your
        card is registered depends on where you got it:
      </p>
      <ul>
        <li>
          Bought online or over the phone: already registered.
        </li>
        <li>
          Created in the Ventra app for Apple Wallet or Google Pay: already
          registered.
        </li>
        <li>
          Bought at a Ventra vending machine or a store: not registered until
          you do it yourself.
        </li>
      </ul>
      <p>
        You can register at ventrachicago.com, in the Ventra app, or by calling
        1-877-669-8368. If you can&rsquo;t remember whether you did, go to
        &ldquo;Register A Card&rdquo; on the Ventra site and enter the card
        details. A card that is already registered gets a message saying so and
        a prompt to log in.
      </p>
      <p>
        Registering is worth doing even if you never look at your history.
        Ventra refunds the $5 card fee as transit value when you register
        within 90 days of buying the card, and your balance is protected if the
        card is lost or stolen.
      </p>

      <h2 id="missing-rides">Why a ride is missing in Ventra history</h2>
      <p>
        The usual reason is that the ride is too recent. Ventra says a ride can
        take up to 20 minutes to appear, though it&rsquo;s often much faster.
        The reader on the bus or turnstile has to send the tap to
        Ventra&rsquo;s servers, and it has to be processed before it shows up.
        Your balance usually updates within seconds. While a ride is still
        being processed you may see &ldquo;pending trip pricing.&rdquo;
      </p>
      <p>If it has been longer than that, check two things:</p>
      <ul>
        <li>
          How you paid. A tap with a contactless bank card, or with a bank card
          in Apple Pay or Google Pay, isn&rsquo;t a tap with your Ventra Card.
        </li>
        <li>
          Which card you tapped. A card that isn&rsquo;t registered to the
          account you&rsquo;re signed in to won&rsquo;t be listed there.
        </li>
      </ul>
      <p>
        If a faulty Ventra reader charged you the wrong fare, don&rsquo;t wait.
        Ventra&rsquo;s terms say a request for an adjustment caused by faulty
        equipment has to reach the call center within four calendar days, with
        the station or bus route, the date and the time.
      </p>

      <h2 id="how-far-back">How far back Ventra ride history goes</h2>
      <p>
        Ventra doesn&rsquo;t publish a number. Its terms say only that a
        registered account gets access to a longer transaction history than an
        unregistered one. Be wary of any figure you see quoted elsewhere.
      </p>
      <p>
        If you need rides older than what your account shows, for an expense
        claim or a tax record, ask Ventra directly. Call 1-877-669-8368 or
        visit the Ventra Service Center at 567 W. Lake Street, 2nd floor, open
        Monday to Friday from 8 a.m. to 4:30 p.m. We can&rsquo;t tell you what
        they will be able to pull.
      </p>

      <h2 id="bank-cards">Rides paid with a bank card or phone</h2>
      <p>
        It depends on which card is in your phone&rsquo;s wallet. A Ventra Card
        on your iPhone or Apple Watch, or in Google Pay, is still a Ventra
        Card. It has to be registered to your Ventra account before you can add
        it, so its rides are in your Ventra history like any other
        card&rsquo;s.
      </p>
      <p>
        A contactless credit or debit card is different, and so is that same
        card in Apple Pay, Google Pay or Samsung Pay. Ventra treats those taps
        as pay as you go. The first tap creates an empty transit account linked
        to the bank card. Ventra still lists registering that kind of account
        and managing it online as &ldquo;coming soon,&rdquo; so for now there
        is nowhere to sign in and see those rides.
      </p>
      <p>
        That leaves your bank statement. A tap can start as a temporary hold of
        up to $5. The real fare replaces it once Ventra works it out, usually
        within about a day depending on your bank, and two fares close together
        may be grouped into one charge. Ventra says your pay app may or may not
        show the final amounts, but your bank&rsquo;s transaction history and
        statement will. That tells you what you paid. It isn&rsquo;t a list of
        rides.
      </p>

      <h2 id="fare-record">What a fare record leaves out</h2>
      <p>
        On the CTA you pay on the way in. The CTA&rsquo;s own guides have you
        touch the reader as you board a bus or at the turnstile when you enter
        a station, and there is no tap on the way out. So the fare system knows
        when you paid, and at which station or on which bus route. It has no
        exit stop, distance or ride time to record.
      </p>
      <p>
        That is enough for checking a charge. It won&rsquo;t tell you how many
        miles you rode this year or which stations you have never been to. The
        CTA&rsquo;s own ridership figures work the same way: they count
        boardings, as we explain in{" "}
        <Link href="/cta-ridership-by-year">CTA ridership by year</Link>.
      </p>

      <h2 id="full-history">How to keep a full CTA ride history</h2>
      <p>
        If you want a record with the stops, the distance and the time, you
        have to keep it yourself. A spreadsheet works. A ride tracker is less
        typing.
      </p>
      <p>
        <Link href="/">Transit Stats</Link> is our free iPhone app for logging
        CTA rides. Tap Start live ride and it looks for stops within about 150
        meters, then suggests your line and starting stop. GPS measures the
        distance while you ride, and when you end the ride the app suggests the
        stop you got off at. You can also add a past ride by hand. It covers all
        eight L lines and every CTA bus route.
      </p>
      <p>
        Each ride in your history shows the line, date, time, start and end
        stops, distance and duration, and you can open any ride to see its
        route on a map. The app totals your rides, distance and time over the
        last week, month or year, or all time. A coverage map shows every stop
        you have visited.
      </p>
      <p>What it doesn&rsquo;t do:</p>
      <ul>
        <li>
          It doesn&rsquo;t connect to Ventra and can&rsquo;t import your Ventra
          history. Your record starts with the first ride you log, plus any
          older rides you add yourself.
        </li>
        <li>
          It isn&rsquo;t a fare record. For charges, Ventra and your bank are
          still the source.
        </li>
        <li>It&rsquo;s iPhone only. There is no Android version.</li>
      </ul>
      <p>
        With Transit Stats PRO you can export your history as a CSV file with a
        row for every ride: date, start and end times, train or bus, line,
        stops, distance, duration and CO2 saved. There is more on how tracking
        works in the{" "}
        <Link href="/faq">FAQ</Link>, and you can see what thousands of logged
        rides add up to in{" "}
        <Link href="/most-popular-cta-stops-lines">
          the most popular CTA stops and lines
        </Link>
        .
      </p>
      <p>
        For arrival times, directions and fares, we cover the other options in{" "}
        <Link href="/best-cta-apps">the best CTA apps in 2026</Link>.
      </p>

      <h2 id="sources">Sources</h2>
      <ul>
        <li>
          <a
            href="https://www.ventrachicago.com/how-to/why-register/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ventra: Why register your Ventra Card
          </a>{" "}
          (viewing ride history, how to register, the $5 refund)
        </li>
        <li>
          <a
            href="https://www.ventrachicago.com/how-to/app-my-ventra-cards/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ventra app: Manage your Ventra Cards
          </a>{" "}
          (where ride and transaction history is in the app)
        </li>
        <li>
          <a
            href="https://www.ventrachicago.com/how-to/app-faq/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ventra app FAQ
          </a>{" "}
          (how long a ride takes to appear)
        </li>
        <li>
          <a
            href="https://www.ventrachicago.com/how-to/contactless-bankcards/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ventra: Paying with contactless bankcards
          </a>{" "}
          (the hold of up to $5, grouped charges, bank card accounts)
        </li>
        <li>
          <a
            href="https://www.ventrachicago.com/how-to/mobile-wallet-apps/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ventra: Making contactless payments
          </a>{" "}
          (what pay apps and bank statements show, when the final charge posts)
        </li>
        <li>
          <a
            href="https://www.ventrachicago.com/applepay-faq/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ventra Card on iPhone and Apple Watch FAQ
          </a>{" "}
          (a card in Apple Wallet has to be registered)
        </li>
        <li>
          <a
            href="https://www.ventrachicago.com/how-to/ventra-reader/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ventra: Paying at the Ventra reader
          </a>{" "}
          (what a Ventra reader is)
        </li>
        <li>
          <a
            href="https://www.ventrachicago.com/featured-questions/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ventra: Featured questions
          </a>{" "}
          (which agencies a Ventra Card covers, Metra tickets in the app)
        </li>
        <li>
          <a
            href="https://www.transitchicago.com/howto/riding-the-train/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CTA how-to: Riding the train
          </a>{" "}
          and{" "}
          <a
            href="https://www.transitchicago.com/howto/riding-the-bus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Riding the bus
          </a>{" "}
          (paying when you enter a station or board a bus)
        </li>
        <li>
          <a
            href="https://www.ventrachicago.com/terms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ventra terms and conditions
          </a>{" "}
          (transaction history for registered accounts, the four-day adjustment
          window)
        </li>
        <li>
          <a
            href="https://www.ventrachicago.com/contact-customer-service/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ventra: Contact customer service
          </a>{" "}
          (phone hours, Ventra Service Center address and hours)
        </li>
      </ul>
    </>
  );
}
