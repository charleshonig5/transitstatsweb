export interface Post {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  author: string;
}

export const posts: Post[] = [
  {
    slug: "most-popular-cta-stops-lines",
    title: "Chicago's Most Popular CTA Stops and Lines",
    subtitle:
      "The most popular CTA stops and train lines in Chicago based on real rider data from 23,000+ tracked rides across the L and bus network.",
    description:
      "The most popular CTA stops and train lines in Chicago based on real rider data from 23,000+ tracked rides across the L and bus network.",
    date: "March 10, 2026",
    author: "Transit Stats Team",
  },
  {
    slug: "co2-savings-cta-riders",
    title: "How Much CO2 Do CTA Riders Actually Save?",
    subtitle:
      "We analyzed 23,000+ CTA rides to measure the real CO2 impact of riding public transit in Chicago. Here's how much carbon CTA riders actually save.",
    description:
      "We analyzed 23,000+ CTA rides to measure the real CO2 impact of riding public transit in Chicago. Here's how much carbon CTA riders actually save.",
    date: "March 10, 2026",
    author: "Transit Stats Team",
  },
  {
    slug: "cta-ridership-data",
    title: "Chicago CTA Ridership by the Numbers",
    subtitle:
      "Real CTA ridership data from thousands of Chicago riders and 23,000 trips. How Chicagoans commute, which routes dominate, and what the data reveals.",
    description:
      "Real CTA ridership data from thousands of Chicago riders and 23,000 trips. How Chicagoans commute, which routes dominate, and what the data reveals.",
    date: "March 10, 2026",
    author: "Transit Stats Team",
  },
  {
    slug: "cta-rush-hour-data",
    title: "When Does Chicago Ride the CTA? Rush Hour Data",
    subtitle:
      "Real hour-by-hour CTA ridership data from 23,000+ tracked rides in 2026. See when Chicagoans actually ride the bus and Chicago L train, from morning rush to late night.",
    description:
      "Real hour-by-hour CTA ridership data from 23,000+ tracked rides in 2026. See when Chicagoans actually ride the bus and Chicago L train, from morning rush to late night.",
    date: "March 11, 2026",
    author: "Transit Stats Team",
  },
  {
    slug: "cta-commute-pairs",
    title: "Chicago's Most Common CTA Commute Routes",
    subtitle:
      "The most popular CTA commute routes in Chicago in 2026 based on real rider data. See the top origin-destination pairs for trains and buses across the city.",
    description:
      "The most popular CTA commute routes in Chicago in 2026 based on real rider data. See the top origin-destination pairs for trains and buses across the city.",
    date: "March 11, 2026",
    author: "Transit Stats Team",
  },
];
