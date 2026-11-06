"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/transit-stats-cta-analytics/id6747690858";

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 38" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M26.43 19.94c-.05-4.56 3.73-6.75 3.9-6.86-2.12-3.1-5.43-3.53-6.62-3.58-2.82-.29-5.49 1.66-6.92 1.66-1.43 0-3.65-1.62-5.99-1.58-3.08.05-5.93 1.8-7.52 4.56-3.2 5.55-.82 13.78 2.3 18.3 1.53 2.21 3.36 4.69 5.76 4.6 2.31-.09 3.18-1.49 5.97-1.49 2.79 0 3.58 1.49 6.02 1.44 2.49-.04 4.06-2.25 5.58-4.47 1.76-2.57 2.48-5.05 2.53-5.18-.06-.02-4.85-1.86-4.9-7.4zM21.87 6.21c1.28-1.54 2.14-3.66 1.9-5.79-1.84.07-4.05 1.22-5.36 2.75-1.17 1.35-2.19 3.51-1.92 5.58 2.04.16 4.12-1.04 5.38-2.54z" />
    </svg>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock page scroll while the mobile menu is open. The lock lives on <html>,
     never <body>: an overflow on body (with html's overflow-x: clip) turns
     body into its own scroll container and detaches the sticky header. */
  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        mobileOpen
          ? "bg-transparent lg:bg-white"
          : scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
            : "bg-white"
      }`}
    >
      <nav
        className="container relative flex items-center justify-between py-4 md:py-7"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" aria-label="Transit Stats home" className="block shrink-0 transition-transform duration-200 active:scale-95">
          <Image
            src="/images/logo.svg"
            alt="Transit Stats"
            width={205}
            height={32}
            className={`h-auto w-[149px] lg:w-[205px] transition-all duration-300 ${mobileOpen ? "brightness-0 invert lg:brightness-100 lg:invert-0" : ""}`}
            priority
          />
        </Link>

        {/* Desktop nav — centered links */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex lg:gap-16">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base ${isActive ? "font-bold" : "font-normal"} text-brand transition-all duration-200 hover:scale-105 hover:text-brand-dark active:scale-95`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop nav — App Store button far right (the hero/CTA badge
            layout, compacted to the header's 40px height) */}
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Transit Stats on the App Store"
          className="hidden h-10 items-center gap-2 whitespace-nowrap rounded-[66px] bg-brand px-4 text-white transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_16px_rgba(247,117,44,0.4)] active:scale-[0.97] lg:flex"
        >
          <AppleLogo className="h-5 w-auto" />
          <span className="flex flex-col items-start text-left">
            <span className="text-[10px] leading-tight">Download on the</span>
            <span className="text-sm font-semibold leading-tight">App Store</span>
          </span>
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`rounded-md p-2 lg:hidden transition-all duration-200 active:scale-90 ${mobileOpen ? "text-white" : "text-brand"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6 transition-transform duration-300"
            style={{ transform: mobileOpen ? "rotate(90deg)" : "rotate(0deg)" }}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

    </header>

    {/* Mobile nav — full-screen frosted overlay, fixed to the viewport so it
        works at any scroll position. Sibling of <header> (not a child): the
        header's backdrop-blur would otherwise become the containing block for
        position: fixed and pin the overlay to the header instead. */}
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-12 bg-brand/90 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
        mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!mobileOpen}
      inert={!mobileOpen}
    >
      {navLinks.map((link, i) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`group block text-3xl ${isActive ? "font-bold" : "font-semibold"} text-white transition-all duration-300`}
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
              transitionDelay: mobileOpen ? `${75 * i}ms` : "0ms",
            }}
            onClick={() => setMobileOpen(false)}
          >
            <span className="block text-center transition-transform duration-200 group-active:scale-95">
              {link.label}
            </span>
          </Link>
        );
      })}
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Transit Stats on the App Store"
        className="group block transition-all duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
          transitionDelay: mobileOpen ? `${75 * navLinks.length}ms` : "0ms",
        }}
        onClick={() => setMobileOpen(false)}
      >
        <span className="flex items-center gap-3 whitespace-nowrap rounded-[66px] bg-white px-8 py-3 text-brand transition-transform duration-200 group-active:scale-[0.97]">
          <AppleLogo className="h-7 w-auto" />
          <span className="flex flex-col items-start text-left">
            <span className="text-xs leading-tight">Download on the</span>
            <span className="text-lg font-semibold leading-tight">App Store</span>
          </span>
        </span>
      </a>
    </div>
    </>
  );
}
