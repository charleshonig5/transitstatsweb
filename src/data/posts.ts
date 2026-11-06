export interface Faq {
  question: string;
  answer: string; // Plain text: rendered on the page AND in FAQPage JSON-LD, so they always match
}

export interface Post {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  imageAlt: string;
  date: string;           // ISO 8601 first-published date (structured data)
  displayDate: string;     // Human-readable
  updated: string;         // ISO 8601 last substantive update (dateModified, og:modified_time, sitemap lastmod)
  displayUpdated: string;  // Human-readable
  author: string;
  faqs: Faq[];
}

export const posts: Post[] = [
  {
    slug: "busiest-cta-stations-bus-routes",
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
    author: "Transit Stats Team",
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
    author: "Transit Stats Team",
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
    author: "Transit Stats Team",
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
    author: "Transit Stats Team",
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
    author: "Transit Stats Team",
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
    author: "Transit Stats Team",
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
    author: "Transit Stats Team",
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
    author: "Transit Stats Team",
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
