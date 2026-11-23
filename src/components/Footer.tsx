import Image from "next/image";
import Link from "next/link";

const linkClass =
  "text-sm leading-6 text-white transition-opacity duration-200 hover:opacity-80 active:opacity-60 md:text-base md:leading-7";

export default function Footer() {
  return (
    <footer>
      <div className="container py-10 md:py-14">
        {/* ── Top section: logo + link columns ── */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Logo + tagline */}
          <div className="md:w-[240px] md:shrink-0">
            <Image
              src="/images/logomark.svg"
              alt="Transit Stats"
              width={42}
              height={42}
            />
            {/* Social links */}
            <div className="mt-8 flex flex-col gap-2.5">
              <a
                href="mailto:transitstatsllc@gmail.com"
                className="flex items-center gap-2.5 text-sm leading-6 text-white transition-opacity duration-200 hover:opacity-80 active:opacity-60"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                transitstatsllc@gmail.com
              </a>
              <a
                href="https://www.instagram.com/transitstats/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm leading-6 text-white transition-opacity duration-200 hover:opacity-80 active:opacity-60"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                </svg>
                @transitstats
              </a>
              <a
                href="https://www.tiktok.com/@transitstats"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm leading-6 text-white transition-opacity duration-200 hover:opacity-80 active:opacity-60"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden="true">
                  <path d="M16.5 3h-2.25v12.75a3 3 0 1 1-2.25-2.9V10a6 6 0 1 0 5.25 5.95V9.38A6.38 6.38 0 0 0 20.25 10.5V7.5a3.75 3.75 0 0 1-3.75-4.5Z" />
                </svg>
                @transitstats
              </a>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/40">
              &copy; {new Date().getFullYear()} Transit Stats. All rights reserved.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-[auto_auto] justify-start gap-x-12 gap-y-8 lg:flex lg:gap-32">
            {/* Pages */}
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              <h3 className="text-xs font-medium uppercase tracking-widest text-white/40">
                Pages
              </h3>
              <Link href="/" className={linkClass}>Home</Link>
              <Link href="/about" className={linkClass}>About</Link>
              <Link href="/resources" className={linkClass}>Resources</Link>
              <Link href="/faq" className={linkClass}>FAQ</Link>
              <Link href="/contact" className={linkClass}>Contact</Link>
            </nav>

            {/* Articles */}
            <nav className="flex flex-col gap-2.5" aria-label="Footer articles">
              <h3 className="text-xs font-medium uppercase tracking-widest text-white/40">
                Articles
              </h3>
              <Link href="/ride-every-cta-l-station" className={linkClass}>Ride Every L Station</Link>
              <Link href="/which-cta-lines-run-24-hours" className={linkClass}>CTA 24 Hour Lines</Link>
              <Link href="/longest-cta-bus-routes-train-lines" className={linkClass}>Longest CTA Routes</Link>
              <Link href="/best-cta-apps" className={linkClass}>Best CTA Apps</Link>
              <Link href="/cta-ventra-ride-history" className={linkClass}>Ride History</Link>
              {/* The article "Back" link, mirrored: arrow after the label, motion forward */}
              <Link
                href="/resources"
                className="group flex items-center gap-2.5 text-sm font-semibold leading-6 text-white transition-all duration-200 hover:translate-x-1 active:scale-95 md:text-base md:leading-7"
              >
                View more
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path
                    d="M4 10H16M16 10L11 5M16 10L11 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </nav>

            {/* Legal + Download */}
            <nav className="flex flex-col gap-2.5" aria-label="Legal">
              <h3 className="text-xs font-medium uppercase tracking-widest text-white/40">
                Legal
              </h3>
              <Link href="/privacypolicy" className={linkClass}>Privacy Policy</Link>

              <h3 className="mt-4 text-xs font-medium uppercase tracking-widest text-white/40">
                Download
              </h3>
              <a
                href="https://apps.apple.com/us/app/transit-stats-cta-analytics/id6747690858"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                App Store
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
