import Link from "next/link";
import HorizontalBarChart from "@/components/charts/HorizontalBarChart";
import StatGrid from "@/components/charts/StatGrid";

const hourlyData = [
  { name: "5pm", value: 2386 },
  { name: "4pm", value: 2199 },
  { name: "8am", value: 1886 },
  { name: "3pm", value: 1857 },
  { name: "7am", value: 1604 },
];

const dayOfWeekData = [
  { name: "Thursday", value: 3808 },
  { name: "Wednesday", value: 3633 },
  { name: "Friday", value: 3415 },
  { name: "Saturday", value: 3363 },
  { name: "Monday", value: 3347 },
  { name: "Tuesday", value: 3206 },
  { name: "Sunday", value: 2614 },
];

const rushHourStats = [
  { value: "5pm", label: "Peak riding hour" },
  { value: "26%", label: "Evening vs morning gap" },
  { value: "8,109", label: "Evening rush rides" },
  { value: "4,186", label: "Morning rush rides" },
];

export default function ArticleContent() {
  return (
    <>
      <p>
        Real hour-by-hour CTA ridership data from 23,000+ tracked rides in
        2026. See when Chicagoans actually ride the bus and Chicago L train,
        from morning rush to late night.
      </p>
      <p>
        Everyone talks about rush hour in Chicago. But when is the CTA actually
        at its busiest? And how does morning rush compare to the evening
        commute?
      </p>
      <p>
        We looked at 23,000+ tracked CTA rides on the{" "}
        <Link href="/">Transit Stats</Link> platform and broke them down by
        hour of the day and day of the week. Here&rsquo;s what the CTA
        ridership data shows.
      </p>

      <h2>The Evening Rush Is Bigger Than the Morning Rush</h2>
      <p>
        This might surprise you. Most people assume the morning commute is the
        worst, but our CTA ridership statistics say otherwise. The peak riding
        hour is <strong>5pm with 2,386 rides</strong>, followed closely by 4pm
        at 2,199 rides and 3pm at 1,857 rides.
      </p>
      <p>
        The morning rush is busy too, but noticeably lighter. 8am leads the
        morning with 1,886 rides, and 7am comes in at 1,604. That means the
        5pm peak is about 26% busier than the 8am peak.
      </p>
      <StatGrid stats={rushHourStats} />
      <HorizontalBarChart data={hourlyData} />
      <ol>
        <li>5pm: 2,386 rides (the single busiest hour)</li>
        <li>4pm: 2,199 rides</li>
        <li>8am: 1,886 rides</li>
        <li>3pm: 1,857 rides</li>
        <li>7am: 1,604 rides</li>
      </ol>
      <p>
        Here&rsquo;s the full breakdown by time of day:
      </p>

      <h3>Morning rush (6am to 9am): 4,186 rides</h3>
      <ul>
        <li>6am: 696 rides</li>
        <li>7am: 1,604 rides</li>
        <li>8am: 1,886 rides</li>
      </ul>

      <h3>Midday (9am to 3pm): 7,346 rides</h3>
      <p>
        Steady CTA ridership between 1,000 and 1,400 per hour. No dramatic dip
        after morning rush.
      </p>

      <h3>Evening rush (3pm to 7pm): 8,109 rides</h3>
      <ul>
        <li>3pm: 1,857 rides</li>
        <li>4pm: 2,199 rides</li>
        <li>5pm: 2,386 rides (the single busiest hour)</li>
        <li>6pm: 1,667 rides</li>
      </ul>

      <h3>Evening (7pm to 11pm): 3,883 rides</h3>
      <p>
        Gradual decline from 1,185 at 7pm down to 404 at 11pm.
      </p>

      <h3>Late night (11pm to 6am): 1,266 rides</h3>
      <p>
        Chicago public transit never fully stops, even at 3am (109 rides).
      </p>

      <h2>Why the Evening Rush Wins</h2>
      <p>
        There are a few reasons the afternoon and evening outpace the morning.
        Morning commuters tend to leave in a tighter window between 7am and
        8:30am. But the return trip spreads out more. Some people leave at 3pm,
        others at 5pm or later. The evening window is wider, and it also picks
        up non-commute trips like errands, dinner, and going out.
      </p>
      <p>
        The midday numbers are also higher than you might expect. Over 1,000
        rides per hour from 9am through 2pm shows that CTA ridership
        isn&rsquo;t just about the commute. People are using Chicago public
        transit all day long.
      </p>

      <h2>Which Day of the Week Is the Busiest on the CTA?</h2>
      <p>
        We also broke rides down by day of the week. Thursday takes the top
        spot, and weekend CTA ridership holds up better than you might expect.
      </p>
      <HorizontalBarChart data={dayOfWeekData} />
      <ol>
        <li>Thursday: 3,808 rides</li>
        <li>Wednesday: 3,633 rides</li>
        <li>Friday: 3,415 rides</li>
        <li>Saturday: 3,363 rides</li>
        <li>Monday: 3,347 rides</li>
        <li>Tuesday: 3,206 rides</li>
        <li>Sunday: 2,614 rides</li>
      </ol>
      <p>
        Thursday being the busiest day is a pattern that shows up in transit
        data across the country. By Thursday people have settled into their
        week and are most likely to be commuting. Friday drops off as some
        people work from home or take the day off.
      </p>
      <p>
        Saturday ridership is almost as high as weekday ridership, which shows
        how much Chicagoans depend on the CTA beyond just getting to and from
        work. For a full breakdown of the{" "}
        <Link href="/most-popular-cta-stops-lines">
          busiest CTA stops and lines
        </Link>
        , see our dedicated article.
      </p>

      <h2>What This Tells Us About Chicago Transit</h2>
      <p>
        The biggest takeaway is that the CTA is not just a rush hour system.
        Ridership stays strong throughout the entire day, and weekends are
        almost as active as weekdays. If you&rsquo;re trying to avoid crowds,
        early morning before 7am or after 9pm are your best bets.
      </p>
      <p>
        This data comes from <Link href="/">Transit Stats</Link>, a free CTA
        tracker app that tracks your personal Ventra card rides and gives you
        analytics on your own transit habits. Check out our{" "}
        <Link href="/cta-ridership-data">
          full CTA ridership data breakdown
        </Link>{" "}
        and see how much{" "}
        <Link href="/co2-savings-cta-riders">
          CO2 CTA riders actually save
        </Link>
        .
      </p>
    </>
  );
}
