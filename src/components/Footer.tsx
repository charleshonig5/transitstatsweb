import Image from "next/image";
import Link from "next/link";

const linkClass =
  "text-sm leading-6 text-white transition-opacity duration-200 hover:opacity-80 md:text-base md:leading-7";

export default function Footer() {
  return (
    <footer>
      <div className="container py-10 md:py-14">
        {/* ── Top section: logo + link columns ── */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4 md:gap-8">
          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/logomark.svg"
              alt="Transit Stats"
              width={42}
              height={42}
            />
            <p className="mt-4 text-sm leading-6 text-white md:text-base md:leading-7">
              Track your CTA rides and see your personal transit stats.
            </p>
            <p className="mt-4 text-sm leading-6 text-white/40">
              &copy; {new Date().getFullYear()} Transit Stats. All rights reserved.
            </p>
          </div>

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

          {/* Legal */}
          <nav className="flex flex-col gap-2.5" aria-label="Legal">
            <h3 className="text-xs font-medium uppercase tracking-widest text-white/40">
              Legal
            </h3>
            <Link href="/privacypolicy" className={linkClass}>Privacy Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
