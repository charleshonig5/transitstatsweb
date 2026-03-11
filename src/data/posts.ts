export interface Post {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  imageAlt: string;
  date: string;
  author: string;
}

export const posts: Post[] = [
  {
    slug: "most-popular-cta-stops-lines",
    title: "Chicago's most popular CTA stops and lines",
    subtitle:
      "The most popular CTA stops and train lines in Chicago based on real rider data from 23,000+ tracked rides across the L and bus network.",
    description:
      "The most popular CTA stops and train lines in Chicago based on real rider data from 23,000+ tracked rides across the L and bus network.",
    imageAlt:
      "Chicago L train arriving at a busy CTA station platform during rush hour",
    date: "March 10, 2026",
    author: "Transit Stats Team",
  },
  {
    slug: "co2-savings-cta-riders",
    title: "How much CO2 do CTA riders actually save?",
    subtitle:
      "We analyzed 23,000+ CTA rides to measure the real CO2 impact of riding public transit in Chicago. Here's how much carbon CTA riders actually save.",
    description:
      "We analyzed 23,000+ CTA rides to measure the real CO2 impact of riding public transit in Chicago. Here's how much carbon CTA riders actually save.",
    imageAlt:
      "Chicago skyline with CTA elevated train representing CO2 savings from public transit ridership",
    date: "March 10, 2026",
    author: "Transit Stats Team",
  },
  {
    slug: "cta-ridership-data",
    title: "Chicago CTA ridership by the numbers",
    subtitle:
      "Real CTA ridership data from thousands of Chicago riders and 23,000 trips. How Chicagoans commute, which routes dominate, and what the data reveals.",
    description:
      "Real CTA ridership data from thousands of Chicago riders and 23,000 trips. How Chicagoans commute, which routes dominate, and what the data reveals.",
    imageAlt:
      "Riders boarding a CTA bus in Chicago with the downtown skyline in the background",
    date: "March 10, 2026",
    author: "Transit Stats Team",
  },
  {
    slug: "cta-rush-hour-data",
    title: "When does Chicago ride the CTA? Rush hour data",
    subtitle:
      "Real hour-by-hour CTA ridership data from 23,000+ tracked rides in 2026. See when Chicagoans actually ride the bus and Chicago L train, from morning rush to late night.",
    description:
      "Hour-by-hour CTA ridership data from 23,000+ rides in 2026. See when Chicagoans ride the bus and L train, from morning rush to late night.",
    imageAlt:
      "Crowded CTA train platform during evening rush hour in Chicago with commuters waiting",
    date: "March 11, 2026",
    author: "Transit Stats Team",
  },
  {
    slug: "cta-commute-pairs",
    title: "Chicago's most common CTA commute routes",
    subtitle:
      "The most popular CTA commute routes in Chicago in 2026 based on real rider data. See the top origin-destination pairs for trains and buses across the city.",
    description:
      "The most popular CTA commute routes in Chicago in 2026 based on real rider data. See the top origin-destination pairs for trains and buses across the city.",
    imageAlt:
      "Chicago CTA Red Line train crossing elevated tracks above a busy city street",
    date: "March 11, 2026",
    author: "Transit Stats Team",
  },
];
