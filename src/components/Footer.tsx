import Image from "next/image";
import Link from "next/link";

const linkClass =
  "text-sm leading-6 text-white transition-opacity duration-200 hover:opacity-80 md:text-base md:leading-7";

export default function Footer() {
  return (
    <footer>
      <div className="container py-10 md:py-14">
        {/* ── Top section: logo + link columns ── */}
        <div className="flex flex-col gap-10 md:flex-row md:gap-[104px]">
          {/* Logo + tagline */}
          <div className="md:w-[240px] md:shrink-0">
            <Image
              src="/images/logomark.svg"
              alt="Transit Stats"
              width={42}
              height={42}
            />
            {/* Social links */}
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href="mailto:contact@transitstats.co"
                className="flex items-center gap-2.5 text-sm leading-6 text-white transition-opacity duration-200 hover:opacity-80"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                contact@transitstats.co
              </a>
              <a
                href="https://www.instagram.com/transitstats/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm leading-6 text-white transition-opacity duration-200 hover:opacity-80"
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
                className="flex items-center gap-2.5 text-sm leading-6 text-white transition-opacity duration-200 hover:opacity-80"
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
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:flex md:gap-[104px]">
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
              <Link href="/most-popular-cta-stops-lines" className={linkClass}>Popular CTA Stops</Link>
              <Link href="/co2-savings-cta-riders" className={linkClass}>CO2 Savings</Link>
              <Link href="/cta-ridership-data" className={linkClass}>Ridership Data</Link>
              <Link href="/cta-rush-hour-data" className={linkClass}>Rush Hour Data</Link>
              <Link href="/cta-commute-pairs" className={linkClass}>Commute Routes</Link>
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
              <a
                href="https://play.google.com/store/apps/details?id=com.mycompany.transitstatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Google Play
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
