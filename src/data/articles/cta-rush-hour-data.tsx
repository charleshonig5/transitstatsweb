import Link from "next/link";
import HorizontalBarChart from "@/components/charts/HorizontalBarChart";
import StatGrid from "@/components/charts/StatGrid";

// Transit Stats rides through October 31, 2026, by start time in Chicago
// local time (48,306 completed rides).
const hourlyData = [
  { name: "5pm", value: 4769 },
  { name: "4pm", value: 4423 },
  { name: "3pm", value: 3644 },
  { name: "8am", value: 3484 },
  { name: "6pm", value: 3481 },
];

const dayOfWeekData = [
  { name: "Tuesday", value: 7808 },
  { name: "Wednesday", value: 7581 },
  { name: "Thursday", value: 7418 },
  { name: "Friday", value: 6918 },
  { name: "Saturday", value: 6741 },
  { name: "Monday", value: 6545 },
  { name: "Sunday", value: 5295 },
];

const rushHourStats = [
  { value: "5pm", label: "Peak riding hour" },
  { value: "37%", label: "Evening vs morning gap" },
  { value: "16,317", label: "Evening rush rides" },
  { value: "8,159", label: "Morning rush rides" },
];

export default function ArticleContent() {
  return (
    <>
      <p>
        Real hour-by-hour CTA ridership data from 48,000+ tracked rides through
        October 2026. See when Chicagoans actually ride the bus and Chicago L
        train, from morning rush to late night.
      </p>
      <p>
        Everyone talks about rush hour in Chicago. But when is the CTA actually
        at its busiest? And how does morning rush compare to the evening
        commute?
      </p>
      <p>
        We broke down 48,306 tracked CTA rides on{" "}
        <Link href="/">Transit Stats</Link> by hour of the day and day of the
        week.
      </p>

      <h2>The evening rush is bigger than the morning rush</h2>
      <p>
        Most people assume the morning commute is the worst. Our data says
        otherwise. The peak riding hour is{" "}
        <strong>5pm with 4,769 rides</strong>, followed by 4pm at 4,423 rides
        and 3pm at 3,644 rides.
      </p>
      <p>
        The morning rush is busy too, but noticeably lighter. 8am leads the
        morning with 3,484 rides, and 7am comes in at 3,139. That means the
        5pm peak is about 37% busier than the 8am peak.
      </p>
      <StatGrid stats={rushHourStats} />
      <HorizontalBarChart data={hourlyData} />
      <ol>
        <li>5pm: 4,769 rides (the single busiest hour)</li>
        <li>4pm: 4,423 rides</li>
        <li>3pm: 3,644 rides</li>
        <li>8am: 3,484 rides</li>
        <li>6pm: 3,481 rides</li>
      </ol>
      <p>
        Here&rsquo;s the full breakdown by time of day:
      </p>

      <h3>Morning rush (6am to 9am): 8,159 rides</h3>
      <ul>
        <li>6am: 1,536 rides</li>
        <li>7am: 3,139 rides</li>
        <li>8am: 3,484 rides</li>
      </ul>

      <h3>Midday (9am to 3pm): 14,451 rides</h3>
      <p>
        Ridership drops after the morning rush, to about 2,000 rides at 9am,
        then climbs steadily to about 2,800 by 2pm.
      </p>

      <h3>Evening rush (3pm to 7pm): 16,317 rides</h3>
      <ul>
        <li>3pm: 3,644 rides</li>
        <li>4pm: 4,423 rides</li>
        <li>5pm: 4,769 rides (the single busiest hour)</li>
        <li>6pm: 3,481 rides</li>
      </ul>

      <h3>Evening (7pm to 11pm): 7,252 rides</h3>
      <p>
        Gradual decline from 2,496 rides at 7pm down to 1,244 at 10pm.
      </p>

      <h3>Late night (11pm to 6am): 2,127 rides</h3>
      <p>
        Chicago public transit never fully stops, even at 3am (120 rides).
      </p>

      <h2>Why the evening rush wins</h2>
      <p>
        Morning commuters tend to leave in a tight window between 7am and
        8:30am. The trip home spreads out more. Some people leave at 3pm, others
        at 5pm or later. The evening also picks up trips that have nothing to do
        with work, like errands, dinner, and going out.
      </p>
      <p>
        Midday is busier than you might expect too. Roughly 2,000 rides or more
        every hour from 9am through 2pm means plenty of Chicagoans use the CTA
        for more than getting to work.
      </p>

      <h2>Which day of the week is the busiest on the CTA?</h2>
      <p>
        Tuesday takes the top spot, with Wednesday and Thursday close behind.
        Weekend ridership holds up better than you might expect.
      </p>
      <HorizontalBarChart data={dayOfWeekData} />
      <ol>
        <li>Tuesday: 7,808 rides</li>
        <li>Wednesday: 7,581 rides</li>
        <li>Thursday: 7,418 rides</li>
        <li>Friday: 6,918 rides</li>
        <li>Saturday: 6,741 rides</li>
        <li>Monday: 6,545 rides</li>
        <li>Sunday: 5,295 rides</li>
      </ol>
      <p>
        The Tuesday-to-Thursday peak matches the{" "}
        <Link href="/cta-ridership-growth-2026">
          CTA&rsquo;s system-wide ridership
        </Link>
        , where Wednesday, Tuesday, and Thursday are the three busiest days of
        2026. That pattern fits hybrid work schedules, where many office workers
        commute midweek and work from home on Mondays and Fridays.
      </p>
      <p>
        Saturday ridership for Transit Stats users even edges out Monday, and
        weekends account for a quarter of all the trips our riders log. For
        the{" "}
        <Link href="/most-popular-cta-stops-lines">
          busiest CTA stops and lines
        </Link>
        , see our full breakdown.
      </p>

      <h2>What this tells us about Chicago transit</h2>
      <p>
        Rush hour is the peak, but ridership stays strong all day, and
        Saturdays come close to weekdays. If you&rsquo;re trying to avoid
        crowds, ride before 7am or after 9pm.
      </p>
      <p>
        This data comes from <Link href="/">Transit Stats</Link>, a free CTA
        tracker app that tracks your personal rides and gives you analytics on
        your own transit habits. It counts every completed ride logged through
        October 31, 2026, by start time in Chicago local time. Check out our{" "}
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
