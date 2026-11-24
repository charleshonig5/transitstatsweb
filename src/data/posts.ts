export interface Faq {
  question: string;
  answer: string; // Plain text: rendered on the page AND in FAQPage JSON-LD, so they always match
}

export interface Section {
  id: string;    // The id on the article's <h2>, so the rail link lands on it
  label: string; // Rail name: the heading cut to two words at most
}

/* The Resources page's filter pills. "guides" are how-tos, "cta-data" is
   built on the CTA's published numbers, "app-data" on rides tracked in
   Transit Stats. */
export type PostCategory = "guides" | "cta-data" | "app-data";

export interface Post {
  slug: string;
  category: PostCategory;
  title: string;
  subtitle: string;
  description: string;
  imageAlt: string;
  date: string;           // ISO 8601 first-published date (structured data)
  displayDate: string;     // Human-readable
  updated: string;         // ISO 8601 last substantive update (dateModified, og:modified_time, sitemap lastmod)
  displayUpdated: string;  // Human-readable
  author: string;
  sections: Section[];     // One per <h2> in the article file, same order
  faqs: Faq[];
}

export const posts: Post[] = [
  {
    slug: "ride-every-cta-l-station",
    category: "guides",
    title: "How to ride every CTA L station in one day",
    subtitle:
      "The CTA counts 146 L stations on eight lines. The Guinness record for all of them is 8:58:55, and a $5 day pass covers it. Routes, costs and tracking.",
    description:
      "The CTA counts 146 L stations on eight lines. The Guinness record for all of them is 8:58:55, and a $5 day pass covers it. Routes, costs and tracking.",
    imageAlt:
      "A Quincy station sign on a dark wooden station house with an orange door, above the L platform",
    date: "2026-11-22",
    displayDate: "November 22, 2026",
    updated: "2026-11-22",
    displayUpdated: "November 22, 2026",
    author: "Charles from Transit Stats",
    sections: [
      { id: "how-many", label: "Station count" },
      { id: "l-challenge", label: "Record times" },
      { id: "route", label: "The route" },
      { id: "cost", label: "Cost" },
      { id: "tracking", label: "Tracking" },
      { id: "method", label: "Our method" },
      { id: "sources", label: "Sources" },
    ],
    faqs: [
      {
        question: "How many L stations does the CTA have?",
        answer:
          "The CTA counts 146 L stations on eight lines. The station list it publishes on the City of Chicago's data portal comes to 144 when each station is counted once. One station, State/Lake on the Loop elevated, has been closed since January 5, 2026 for a rebuild the CTA says will run into 2029.",
      },
      {
        question: "What is the record for riding every CTA L station?",
        answer:
          "The Guinness World Record is 8 hours, 58 minutes and 55 seconds for all 146 stations, set by Joabe Bayer Barbosa, James Barbosa and Matthew Plese on November 10, 2025. Earlier L Challenge standings published by Streetsblog Chicago in 2019 list 8:40:03 by Bill Cash and Alex Pisarski for 145 stations, on a run where passing through a station counted.",
      },
      {
        question: "Can you ride every CTA L station in one day?",
        answer:
          "Yes. Record times reported since 2011 run from 8 hours 40 minutes to 9 hours 37 minutes. The 2019 record route used buses to get between lines, because the eight lines end at 11 places where no other line continues. State/Lake is closed into 2029, so for now nobody can get on or off there.",
      },
      {
        question: "How much does it cost to ride every CTA L station?",
        answer:
          "$5 with a 1-Day CTA/Pace Pass, which gives unlimited rides on CTA trains and buses for 24 hours from the first time you use it. Paying by the ride costs more: the regular fare is $2.50 on the L and $2.25 on a bus, with up to two more rides free within two hours.",
      },
      {
        question: "Is the State/Lake L station open?",
        answer:
          "No. State/Lake on the Loop elevated closed on January 5, 2026 for reconstruction that the CTA says will run into 2029. The CTA sends riders to Clark/Lake or Washington/Wabash instead.",
      },
    ],
  },
  {
    slug: "which-cta-lines-run-24-hours",
    category: "guides",
    title: "Which CTA lines run 24 hours?",
    subtitle:
      "Two CTA train lines run 24 hours a day: the Red and Blue Lines. The other six stop overnight, and 17 bus routes run all night. Last trains for each line.",
    description:
      "Two CTA train lines run 24 hours a day: the Red and Blue Lines. The other six stop overnight, and 17 bus routes run all night. Last trains for each line.",
    imageAlt:
      "An empty Red Line subway platform at Harrison, with signs pointing to 95th/Dan Ryan and Howard",
    date: "2026-11-22",
    displayDate: "November 22, 2026",
    updated: "2026-11-22",
    displayUpdated: "November 22, 2026",
    author: "Charles from Transit Stats",
    sections: [
      { id: "all-night-trains", label: "24-hour trains" },
      { id: "last-trains", label: "Last trains" },
      { id: "owl-buses", label: "Owl buses" },
      { id: "airports", label: "Airports" },
      { id: "holidays", label: "Holidays" },
      { id: "method", label: "Our method" },
      { id: "sources", label: "Sources" },
    ],
    faqs: [
      {
        question: "Which CTA lines run 24 hours?",
        answer:
          "The Red Line and the Blue Line. Both run at all times, every day: the Red Line between Howard and 95th/Dan Ryan, and the Blue Line between O'Hare and Forest Park. The other six train lines stop overnight.",
      },
      {
        question: "What time do CTA trains stop running?",
        answer:
          "It depends on the line. The Red and Blue Lines don't stop. The last Yellow Line trains leave Howard at 11:00 p.m. and Dempster-Skokie at 11:15 p.m. On the Green, Pink and Orange Lines the last trains leave between 12:45 and 1:30 a.m., and the last Brown Line train leaves the Loop at 2:05 a.m. (1:35 a.m. on Sunday and holiday nights). The last Purple Line train leaves Linden at 1:35 a.m., or 2:05 a.m. on Friday and Saturday nights. The last one from Howard to Linden leaves between 1:10 and 1:50 a.m., depending on the night.",
      },
      {
        question: "Which CTA buses run 24 hours?",
        answer:
          "Seventeen CTA bus routes have overnight Owl service: 4, N5, 9, 20, 22, 34, 49, 53, 55, 60, 62, 63, 66, 77, 79, 81 and 87. Six of them (20, 22, 34, 49, 63 and 81) run their regular route at all times. Most of the others cover a shorter stretch overnight, and the N5 runs only at night.",
      },
      {
        question: "Does the Blue Line run to O'Hare all night?",
        answer:
          "Yes. The Blue Line runs between O'Hare and Forest Park at all times, every day.",
      },
      {
        question: "Does the Orange Line run to Midway all night?",
        answer:
          "No. The last Orange Line train leaves the Loop for Midway at 1:30 a.m. On weekdays the first train leaves Midway at 3:30 a.m. and the first one leaves the Loop for Midway at 3:55 a.m. Both are half an hour later on Saturdays and an hour later on Sundays and holidays. Overnight, the 62 Archer's Owl buses run between State/Washington downtown and Midway Airport.",
      },
    ],
  },
  {
    slug: "longest-cta-bus-routes-train-lines",
    category: "cta-data",
    title: "The longest CTA bus routes and train lines",
    subtitle:
      "The longest CTA bus route is the 26 South Shore Express at about 18.9 miles. The longest train line is the Blue Line at 27.6 miles. See the top ten.",
    description:
      "The longest CTA bus route is the 26 South Shore Express at about 18.9 miles. The longest train line is the Blue Line at 27.6 miles. See the top ten.",
    imageAlt:
      "An L train stopped at a rain-soaked elevated platform under a gray sky",
    date: "2026-11-22",
    displayDate: "November 22, 2026",
    updated: "2026-11-22",
    displayUpdated: "November 22, 2026",
    author: "Charles from Transit Stats",
    sections: [
      { id: "longest-bus-routes", label: "Bus routes" },
      { id: "all-day-routes", label: "All day" },
      { id: "train-lines", label: "Train lines" },
      { id: "blue-line", label: "Blue Line" },
      { id: "red-line", label: "Red Line" },
      { id: "shortest-line", label: "Shortest line" },
      { id: "method", label: "Our method" },
      { id: "sources", label: "Sources" },
    ],
    faqs: [
      {
        question: "What is the longest CTA bus route?",
        answer:
          "The 26 South Shore Express, at about 18.9 miles each way between 103rd/Stony Island and Chicago Avenue in Streeterville. It runs on weekdays only. The longest routes that run all day, every day are the 9 Ashland at about 17.4 miles and the 53 Pulaski at about 17. These are our own measurements on the City of Chicago's route map.",
      },
      {
        question: "What is the longest CTA train line?",
        answer:
          "The Blue Line, at about 27.6 miles from O'Hare to Forest Park. The Red Line is second at about 21.9 miles from Howard to 95th/Dan Ryan.",
      },
      {
        question: "How long is the CTA Red Line?",
        answer:
          "About 21.9 miles from Howard to 95th/Dan Ryan, with 33 stations. The CTA's Red Line Extension will add 5.5 miles and four stations, south to 130th Street.",
      },
      {
        question: "What is the shortest CTA train line?",
        answer:
          "The Yellow Line, at about 4.9 miles between Dempster-Skokie and Howard, with three stations. Outside weekday rush periods the Purple Line covers less ground, about 3.9 miles between Linden and Howard.",
      },
      {
        question: "How many bus routes and train lines does the CTA have?",
        answer:
          "The CTA says it runs 127 bus routes covering 1,526 route miles, and eight train lines on 224.1 miles of track.",
      },
    ],
  },
  {
    slug: "best-cta-apps",
    category: "guides",
    title: "Best CTA apps in 2026, and what each is for",
    subtitle:
      "The best CTA apps in 2026 and what each is for: Ventra for fares, Transit and Transit Stop for arrival times, Citymapper and Google Maps for directions.",
    description:
      "The best CTA apps in 2026 and what each is for: Ventra for fares, Transit and Transit Stop for arrival times, Citymapper and Google Maps for directions.",
    imageAlt:
      "A CTA train at the snow-covered Adams/Wabash station while riders wait on the platform",
    date: "2026-11-22",
    displayDate: "November 22, 2026",
    updated: "2026-11-22",
    displayUpdated: "November 22, 2026",
    author: "Charles from Transit Stats",
    sections: [
      { id: "at-a-glance", label: "The apps" },
      { id: "ventra", label: "Ventra" },
      { id: "transit", label: "Transit" },
      { id: "transit-stop", label: "Transit Stop" },
      { id: "directions", label: "Directions" },
      { id: "transit-stats", label: "Transit Stats" },
      { id: "cta-app", label: "CTA app" },
      { id: "method", label: "Our method" },
      { id: "sources", label: "Sources" },
    ],
    faqs: [
      {
        question: "What is the best app for the CTA?",
        answer:
          "It depends on what you need. Ventra is the CTA's official app and handles your fare. Transit and Transit Stop are built around arrival times, Citymapper and Google Maps give directions, and Transit Stats keeps a record of the rides you take. All six are free to download.",
      },
      {
        question: "Does the CTA have an official app?",
        answer:
          "Yes. The Ventra app is published by the Chicago Transit Authority. It handles fares and passes, sells Metra mobile tickets, and shows arrival times for the CTA, Metra and Pace. The CTA's Bus Tracker and Train Tracker are web pages, and both also work by text message.",
      },
      {
        question: "Which apps show CTA bus and train arrival times?",
        answer:
          "Ventra, Transit, Transit Stop and Transit Stats all show CTA arrival times. Citymapper gives live wait times as part of its directions. In Google Maps, some stations show real-time departures and others show a schedule.",
      },
      {
        question: "Is the Transit app free?",
        answer:
          "Transit is free to download. The trip planner, GO and departure times for at least three lines, plus every line with a stop near you, stay free. Royale, the paid subscription, adds future departure times and vehicle tracking for any line. It costs around $5 a month or $25 a year.",
      },
      {
        question: "Is there an app that tracks my CTA rides?",
        answer:
          "Transit Stats is a free iPhone app that logs your CTA rides. It suggests your line and stops, measures the distance with GPS, and totals your rides, distance and time. It doesn't connect to Ventra, and there is no Android version.",
      },
    ],
  },
  {
    slug: "cta-ventra-ride-history",
    category: "guides",
    title: "How to see your CTA and Ventra ride history",
    subtitle:
      "How to see your Ventra ride history in the Ventra app or at ventrachicago.com, why a ride can be missing, and how to keep a full CTA ride history.",
    description:
      "How to see your Ventra ride history in the Ventra app or at ventrachicago.com, why a ride can be missing, and how to keep a full CTA ride history.",
    imageAlt:
      "A rider walking toward the glass entrance of the Logan Square Blue Line station on a snowy night",
    date: "2026-11-22",
    displayDate: "November 22, 2026",
    updated: "2026-11-22",
    displayUpdated: "November 22, 2026",
    author: "Charles from Transit Stats",
    sections: [
      { id: "ventra-history", label: "Ventra history" },
      { id: "register", label: "Register card" },
      { id: "missing-rides", label: "Missing rides" },
      { id: "how-far-back", label: "History limit" },
      { id: "bank-cards", label: "Bank cards" },
      { id: "fare-record", label: "Fare records" },
      { id: "full-history", label: "Full history" },
      { id: "sources", label: "Sources" },
    ],
    faqs: [
      {
        question: "How do I see my Ventra ride history?",
        answer:
          "Sign in to your Ventra account in the Ventra app or at ventrachicago.com. In the app, open My Ventra Cards, which shows the ride and transaction history for the cards registered to your account. A card bought at a vending machine or a store has to be registered first.",
      },
      {
        question: "How far back does Ventra ride history go?",
        answer:
          "Ventra doesn't publish a limit. Its terms say only that a registered account gets access to a longer transaction history than an unregistered one. For older rides, call Ventra customer service at 1-877-669-8368.",
      },
      {
        question: "Why isn't my ride showing in my Ventra history?",
        answer:
          "Ventra says a ride can take up to 20 minutes to appear, because the reader has to send the tap to Ventra's servers first. A ride also won't appear if you paid with a contactless bank card, or a bank card in Apple Pay or Google Pay, instead of your Ventra Card, or if the card isn't registered to the account you're signed in to.",
      },
      {
        question: "Can I see my CTA ride history if I pay with a credit card or Apple Pay?",
        answer:
          "Not in a Ventra account, for now. Ventra lists registering a transit account to a bank card as coming soon. That leaves your bank statement, which shows the fares charged, sometimes grouped into one charge. A Ventra Card on your iPhone or Apple Watch, or in Google Pay, is different: it has to be registered, so its rides are in your Ventra account.",
      },
      {
        question: "Does Ventra history show where I got off or how far I rode?",
        answer:
          "No. The CTA has you pay only when you board a bus or enter a station. With no tap on the way out, the fare system has no exit stop, distance or ride time to record. A ride tracker such as Transit Stats logs those as you ride.",
      },
    ],
  },
  {
    slug: "cta-ridership-by-year",
    category: "cta-data",
    title: "Chicago CTA ridership by year, 1988 to 2026",
    subtitle:
      "CTA ridership by year, 1988 to 2026. The CTA carried 338.0 million rides in 2025, down from 545.6 million in 2012 and up from 196.0 million in 2021.",
    description:
      "CTA ridership by year, 1988 to 2026. The CTA carried 338.0 million rides in 2025, down from 545.6 million in 2012 and up from 196.0 million in 2021.",
    imageAlt:
      "A CTA 29 State bus on a wet, nearly empty street in downtown Chicago under an overcast sky",
    date: "2026-11-22",
    displayDate: "November 22, 2026",
    updated: "2026-11-22",
    displayUpdated: "November 22, 2026",
    author: "Charles from Transit Stats",
    sections: [
      { id: "by-year", label: "By year" },
      { id: "earlier-years", label: "Earlier years" },
      { id: "peak-years", label: "Peak years" },
      { id: "bus-vs-rail", label: "Bus, rail" },
      { id: "pandemic", label: "Pandemic recovery" },
      { id: "2025-recount", label: "2025 recount" },
      { id: "2026-ridership", label: "2026 ridership" },
      { id: "daily-ridership", label: "Daily ridership" },
      { id: "counting-rides", label: "Counting rides" },
      { id: "sources", label: "Sources" },
    ],
    faqs: [
      {
        question: "What is the CTA's annual ridership?",
        answer:
          "The CTA carried 338.0 million rides in 2025: 199.6 million on buses and 138.4 million on the L. From January through September 2026 it carried 262.0 million, up 2.7% from the same months of 2025.",
      },
      {
        question: "When did CTA ridership peak?",
        answer:
          "In the City of Chicago's data, which starts in 1988, the highest year is 1988 with 604.5 million rides. The highest year after 1990 is 2012, with 545.6 million. Rail ridership peaked in 2015 at 241.7 million.",
      },
      {
        question: "How many people ride the CTA each day?",
        answer:
          "From January through September 2026 the CTA averaged about 1.07 million rides on a weekday, 790,000 on a Saturday and 613,000 on a Sunday or holiday. These are boardings, so a trip with a transfer counts more than once.",
      },
      {
        question: "Has CTA ridership recovered from the pandemic?",
        answer:
          "Not fully. In 2025 the CTA carried 74% of its 2019 ridership, with buses at 84% and trains at 63%. Part of that comes from a new counting method the CTA adopted for 2025. On its original count, 2025 was about 70% of 2019.",
      },
      {
        question: "Why did CTA ridership jump in 2025?",
        answer:
          "Mostly because the CTA changed how it counts. In March 2026 it restated 2025 from 319.2 million rides to 338.0 million, adding 18.9 million. That alone is about two thirds of the increase of 28.8 million rides over 2024.",
      },
    ],
  },
  {
    slug: "busiest-cta-stations-bus-routes",
    category: "cta-data",
    title: "The busiest CTA stations and bus routes in 2026",
    subtitle:
      "Clark/Lake is the busiest CTA station and the 9 Ashland the busiest bus route in 2026. See the top 10 busiest CTA stations and bus routes.",
    description:
      "Clark/Lake is the busiest CTA station and the 9 Ashland the busiest bus route in 2026. See the top 10 busiest CTA stations and bus routes.",
    imageAlt:
      "Riders waiting at night on the State/Lake L platform in Chicago's Loop, with the Chicago Theatre's marquee sign above",
    date: "2026-11-06",
    displayDate: "November 6, 2026",
    updated: "2026-11-06",
    displayUpdated: "November 6, 2026",
    author: "Charles from Transit Stats",
    sections: [
      { id: "2026-ridership", label: "2026 ridership" },
      { id: "busiest-stations", label: "Busiest stations" },
      { id: "clark-lake-jump", label: "Clark/Lake jump" },
      { id: "busiest-routes", label: "Busiest routes" },
      { id: "biggest-gains", label: "Biggest gains" },
      { id: "our-riders", label: "Our riders" },
      { id: "sources", label: "Sources" },
    ],
    faqs: [
      {
        question: "What is the busiest CTA station?",
        answer:
          "Clark/Lake, with 2.66 million entries from January through August 2026. The Red Line's Lake station is second with 2.35 million, and O'Hare on the Blue Line is third with 2.22 million.",
      },
      {
        question: "What is the busiest CTA bus route?",
        answer:
          "The 9 Ashland, with 4.27 million rides from January through August 2026, followed by the 53 Pulaski at 3.91 million and the 79 79th at 3.84 million.",
      },
      {
        question: "Why is Clark/Lake so busy in 2026?",
        answer:
          "The nearby State/Lake elevated station closed on January 5, 2026, for a three-year rebuild, and the CTA sent its riders to Clark/Lake and Washington/Wabash. The two stations gained about 1.25 million entries between them compared with the same months of 2025.",
      },
      {
        question: "Is O'Hare one of the busiest CTA stations?",
        answer:
          "Yes. The Blue Line's O'Hare station is the third busiest on the CTA by total entries, with 2.22 million from January through August 2026, about 9,500 on an average weekday.",
      },
    ],
  },
  {
    slug: "cta-ohare-midway-airport",
    category: "guides",
    title: "How to get to O'Hare and Midway on the CTA",
    subtitle:
      "Take the Blue Line to O'Hare or the Orange Line to Midway. Travel times, the $2.50 and $5 fares, hours, and how to find the train at each airport.",
    description:
      "Take the Blue Line to O'Hare or the Orange Line to Midway. Travel times, the $2.50 and $5 fares, hours, and how to find the train at each airport.",
    imageAlt:
      "Travelers walking through a gate concourse at Chicago O'Hare International Airport",
    date: "2026-11-06",
    displayDate: "November 6, 2026",
    updated: "2026-11-06",
    displayUpdated: "November 6, 2026",
    author: "Charles from Transit Stats",
    sections: [
      { id: "overview", label: "Overview" },
      { id: "to-ohare", label: "To O'Hare" },
      { id: "to-midway", label: "To Midway" },
      { id: "taxi-rideshare", label: "Taxi, rideshare" },
      { id: "paying", label: "Paying" },
      { id: "how-busy", label: "How busy" },
      { id: "before-going", label: "Before going" },
      { id: "sources", label: "Sources" },
    ],
    faqs: [
      {
        question: "How much does the CTA cost from O'Hare?",
        answer:
          "$5 (full fare) when you board the Blue Line at O'Hare. The trip to O'Hare costs the regular $2.50 L fare. A 1-, 3-, 7-, or 30-day pass covers the O'Hare fare at no extra charge.",
      },
      {
        question: "How long does the Blue Line take from O'Hare to downtown?",
        answer:
          "About 40 to 45 minutes, according to the CTA. The Blue Line runs 24 hours a day, seven days a week.",
      },
      {
        question: "How do I get from Midway to downtown on the CTA?",
        answer:
          "Take the Orange Line. It takes about 20 to 25 minutes and costs $2.50 with a contactless card, phone, or Ventra card. The station is just east of the terminal, connected by an enclosed walkway. Trains run from about 3:30 a.m. on weekdays until about 1 a.m.; overnight, the N62 Archer bus runs between Midway and downtown.",
      },
      {
        question: "Where is the CTA station at O'Hare?",
        answer:
          "On the lower level, connected directly to Terminals 1, 2, and 3. Follow the signs for CTA Trains or Trains to City. For Terminal 5, ride the free Airport Transit System train between Terminal 5 and Terminal 2.",
      },
    ],
  },
  {
    slug: "cta-ridership-growth-2026",
    category: "cta-data",
    title: "Chicago CTA ridership continues to grow in 2026",
    subtitle:
      "CTA ridership is up 2.6% in 2026 through August, with every month beating 2025. The latest Chicago transit ridership data, the CTA's 2025 recount, and what's next.",
    description:
      "CTA ridership is up 2.6% in 2026 through August, with every month beating 2025. See the latest Chicago transit ridership data and the CTA's 2025 recount.",
    imageAlt:
      "CTA L train traveling on an elevated track through Chicago's Loop, framed by historic Loop architecture and the steel bridge truss below",
    date: "2026-06-09",
    displayDate: "June 9, 2026",
    updated: "2026-11-05",
    displayUpdated: "November 5, 2026",
    author: "Charles from Transit Stats",
    sections: [
      { id: "2026-ridership", label: "2026 ridership" },
      { id: "monthly-growth", label: "Monthly growth" },
      { id: "rail-growth", label: "Rail growth" },
      { id: "weekend-ridership", label: "Weekend ridership" },
      { id: "busiest-days", label: "Busiest days" },
      { id: "2025-recap", label: "2025 recap" },
      { id: "chicago-region", label: "Chicago region" },
      { id: "nita", label: "NITA" },
      { id: "for-riders", label: "For riders" },
      { id: "sources", label: "Sources" },
    ],
    faqs: [
      {
        question: "Is CTA ridership going up in 2026?",
        answer:
          "Yes. The CTA carried 230.0 million rides from January through August 2026, up 2.6% from the same months of 2025, and every month so far has beaten its 2025 total. Rail is up 3.7% and bus is up 1.9%.",
      },
      {
        question: "How many people ride the CTA each day?",
        answer:
          "The CTA averaged about 1.06 million rides per weekday from January through August 2026, and about 689,000 rides on weekends and holidays. Wednesday is the busiest day, averaging 1.10 million rides.",
      },
      {
        question: "How many rides did the CTA have in 2025?",
        answer:
          "338.0 million. The CTA originally reported 319.2 million rides for 2025, then restated the total in March 2026 after switching to a new counting method that uses its new cash fareboxes and automatic passenger counters. Bus ridership was 199.6 million and rail ridership was 138.4 million.",
      },
      {
        question: "Is CTA ridership back to pre-pandemic levels?",
        answer:
          "Not fully. In June 2026 the CTA reported that weekend ridership has surpassed pre-COVID levels and bus ridership is at 90% of pre-COVID levels. Rail ridership is further behind, at about two-thirds of 2019 levels through August 2026.",
      },
      {
        question: "What is NITA?",
        answer:
          "The Northern Illinois Transit Authority (NITA) replaced the Regional Transportation Authority (RTA) on September 1, 2026, as the agency overseeing the CTA, Metra, and Pace. The NITA Act, signed in December 2025, brings about $1.5 billion a year in new transit funding, according to the governor's office.",
      },
    ],
  },
  {
    slug: "most-popular-cta-stops-lines",
    category: "app-data",
    title: "Chicago's most popular CTA stops and lines",
    subtitle:
      "The most popular CTA stops and train lines in Chicago, based on 48,000+ real tracked rides across the L and bus network through October 2026.",
    description:
      "The most popular CTA stops and train lines in Chicago, based on 48,000+ real tracked rides across the L and bus network through October 2026.",
    imageAlt:
      "Riders on an underground CTA subway platform as a Chicago L train pulls in",
    date: "2026-03-10",
    displayDate: "March 10, 2026",
    updated: "2026-11-05",
    displayUpdated: "November 5, 2026",
    author: "Charles from Transit Stats",
    sections: [
      { id: "train-lines", label: "Train lines" },
      { id: "bus-routes", label: "Bus routes" },
      { id: "top-stops", label: "Top stops" },
      { id: "our-data", label: "Our data" },
    ],
    faqs: [
      {
        question: "What is the busiest CTA L line?",
        answer:
          "The Red Line. Transit Stats riders tracked 10,407 Red Line rides through October 2026, about two-thirds more than the second-place Brown Line at 6,237 rides, followed by the Blue, Purple, and Green Lines.",
      },
      {
        question: "What is the busiest CTA station?",
        answer:
          "Belmont, with 5,307 visits (rides starting or ending there) among Transit Stats riders, more than double second-place Fullerton at 2,480. Belmont is a transfer point for the Red, Brown, and Purple Lines in Lakeview.",
      },
      {
        question: "What is the most popular CTA bus route?",
        answer:
          "The 77 Belmont and 36 Broadway are nearly tied, with 1,712 and 1,691 tracked rides through October 2026. The 151 Sheridan, 22 Clark, and 8 Halsted round out the top five.",
      },
    ],
  },
  {
    slug: "co2-savings-cta-riders",
    category: "app-data",
    title: "How much CO2 do CTA riders actually save?",
    subtitle:
      "We analyzed 48,000+ CTA rides to measure the real CO2 impact of riding public transit in Chicago. Here's how much carbon CTA riders actually save.",
    description:
      "We analyzed 48,000+ CTA rides to measure the real CO2 impact of riding transit in Chicago. Riders have saved 52,073 kg of CO2, about 1.1 kg per ride.",
    imageAlt:
      "CTA L train at an elevated station platform with the Chicago skyline in the distance",
    date: "2026-03-10",
    displayDate: "March 10, 2026",
    updated: "2026-11-05",
    displayUpdated: "November 5, 2026",
    author: "Charles from Transit Stats",
    sections: [
      { id: "the-numbers", label: "The numbers" },
      { id: "train-bus", label: "Train, bus" },
      { id: "the-calculation", label: "The calculation" },
      { id: "your-number", label: "Your number" },
      { id: "for-chicago", label: "For Chicago" },
    ],
    faqs: [
      {
        question: "How much CO2 does riding the CTA save?",
        answer:
          "About 1.1 kg (2.4 pounds) of CO2 per ride on average. Across 48,306 rides tracked in Transit Stats through October 2026, CTA riders saved 52,073 kg of CO2, roughly the same as taking 12 cars off the road for a year.",
      },
      {
        question: "Does the CTA train or bus save more CO2?",
        answer:
          "The train. Transit Stats credits 0.2 kg of CO2 saved per kilometer on the L and 0.15 kg per kilometer on the bus, because electric trains carry more passengers per trip.",
      },
      {
        question: "How does Transit Stats calculate CO2 savings?",
        answer:
          "Each ride's distance is multiplied by a per-kilometer factor: 0.2 kg of CO2 for train rides and 0.15 kg for bus rides. A typical 3.6-mile CTA ride saves about 1 kg of CO2.",
      },
    ],
  },
  {
    slug: "cta-ridership-data",
    category: "app-data",
    title: "Chicago CTA ridership by the numbers",
    subtitle:
      "Real CTA ridership data from thousands of Chicago riders and 48,000+ trips. How Chicagoans commute, which routes dominate, and what the data reveals.",
    description:
      "Real CTA ridership data from 48,000+ tracked trips through October 2026. How Chicagoans commute, which routes dominate, and what the data reveals.",
    imageAlt:
      "CTA L train rounding a curve on the elevated tracks between brick buildings in Chicago's Loop",
    date: "2026-03-10",
    displayDate: "March 10, 2026",
    updated: "2026-11-05",
    displayUpdated: "November 5, 2026",
    author: "Charles from Transit Stats",
    sections: [
      { id: "big-picture", label: "Big picture" },
      { id: "train-riders", label: "Train riders" },
      { id: "north-side", label: "North Side" },
      { id: "12-000-hours", label: "12,000 hours" },
      { id: "whats-added", label: "What's added" },
      { id: "our-data", label: "Our data" },
    ],
    faqs: [
      {
        question: "How long is the average CTA trip?",
        answer:
          "About 15 minutes and 3.6 miles, based on 48,306 rides tracked in Transit Stats through October 2026. Together those rides covered 175,143 miles and 12,298 hours on the CTA.",
      },
      {
        question: "Do more people ride the CTA train or the bus?",
        answer:
          "System-wide, the bus: buses carried about 59% of CTA rides in 2026. Among Transit Stats riders the split flips to 55% train and 45% bus, because the app's live GPS tracking works especially well on fixed rail routes.",
      },
      {
        question: "Where does this CTA ridership data come from?",
        answer:
          "From Transit Stats, a free CTA tracker app. The figures count every completed ride logged in the app through October 31, 2026, both live-tracked and manually added, rather than turnstile counts or fare transactions.",
      },
    ],
  },
  {
    slug: "cta-rush-hour-data",
    category: "app-data",
    title: "When does Chicago ride the CTA? Rush hour data",
    subtitle:
      "Real hour-by-hour CTA ridership data from 48,000+ tracked rides through October 2026. See when Chicagoans actually ride the bus and Chicago L train, from morning rush to late night.",
    description:
      "Hour-by-hour CTA ridership data from 48,000+ tracked rides. See when Chicagoans ride the bus and L train, from morning rush to late night.",
    imageAlt:
      "CTA L train on the elevated tracks above a downtown Chicago street, with pedestrians on the sidewalk below",
    date: "2026-03-11",
    displayDate: "March 11, 2026",
    updated: "2026-11-05",
    displayUpdated: "November 5, 2026",
    author: "Charles from Transit Stats",
    sections: [
      { id: "evening-rush", label: "Evening rush" },
      { id: "why-evening", label: "Why evening" },
      { id: "busiest-day", label: "Busiest day" },
      { id: "takeaways", label: "Takeaways" },
    ],
    faqs: [
      {
        question: "What time is rush hour on the CTA?",
        answer:
          "The evening rush runs from about 3pm to 7pm and peaks at 5pm, the single busiest hour. The morning rush runs from 6am to 9am and peaks at 8am. Among 48,306 tracked Transit Stats rides, the 5pm hour was about 37% busier than 8am.",
      },
      {
        question: "What is the busiest day of the week on the CTA?",
        answer:
          "Midweek. Tuesday is the busiest day for Transit Stats riders, followed by Wednesday and Thursday. System-wide CTA data for 2026 shows the same peak, with Wednesday averaging the most rides at about 1.10 million.",
      },
      {
        question: "When is the CTA least crowded?",
        answer:
          "Early morning before 7am and late evening after 9pm are the quietest times to ride, and Sunday is the quietest day of the week.",
      },
    ],
  },
  {
    slug: "cta-commute-pairs",
    category: "app-data",
    title: "Chicago's most common CTA commute routes",
    subtitle:
      "The most popular CTA commute routes in Chicago, from 48,000+ tracked rides through October 2026. See the top origin-destination pairs for trains and buses across the city.",
    description:
      "The most common CTA commute routes in Chicago, from 48,000+ tracked rides through October 2026. See the top stop-to-stop pairs for trains and buses.",
    imageAlt:
      "CTA L trains at an elevated Loop station framed by downtown Chicago high-rises",
    date: "2026-03-11",
    displayDate: "March 11, 2026",
    updated: "2026-11-05",
    displayUpdated: "November 5, 2026",
    author: "Charles from Transit Stats",
    sections: [
      { id: "top-commutes", label: "Top commutes" },
      { id: "red-line", label: "Red Line" },
      { id: "bus-commutes", label: "Bus commutes" },
      { id: "belmont", label: "Belmont" },
      { id: "longest-commutes", label: "Longest commutes" },
      { id: "our-data", label: "Our data" },
    ],
    faqs: [
      {
        question: "What is the most common CTA commute?",
        answer:
          "Belmont to Chicago on the Red Line, with 220 tracked rides through October 2026, followed by Belmont to Grand (203) and Bryn Mawr to Belmont (196), also on the Red Line. 8 of the top 15 commutes are on the Red Line.",
      },
      {
        question: "Which CTA line has the longest average ride?",
        answer:
          "The Orange Line, at 6.8 miles per ride, followed by the Blue Line at 5.9 miles. Both connect the Loop to Chicago's airports. Pink Line rides are the shortest at 2.9 miles.",
      },
      {
        question: "Why does Belmont show up in so many CTA commutes?",
        answer:
          "Belmont appears in 8 of the top 15 commute pairs. It's a transfer point for the Red, Brown, and Purple Lines, plus the 77 Belmont bus, which makes it the busiest hub for Transit Stats riders.",
      },
    ],
  },
];
