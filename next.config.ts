import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The About page is gone (2026-11-23): old links land on the home page.
  // The Contact page is a pop-up now (2026-11-23): old links land on the
  // home page with the pop-up open (components/ContactDialog reads ?contact).
  async redirects() {
    return [
      { source: "/about", destination: "/", permanent: true },
      { source: "/contact", destination: "/?contact", permanent: true },
    ];
  },
};

export default nextConfig;
