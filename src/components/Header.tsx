"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
          : "bg-white"
      }`}
    >
      <nav
        className="container relative flex items-center justify-between py-2 md:py-7"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" aria-label="Transit Stats home" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Transit Stats"
            width={205}
            height={32}
            className="h-auto w-[149px] lg:w-[205px]"
            priority
          />
        </Link>

        {/* Desktop nav — centered links */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex lg:gap-16">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base ${isActive ? "font-bold" : "font-normal"} text-brand transition-colors hover:text-brand-dark`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop nav — button far right */}
        <Link
          href="/contact"
          className="hidden h-10 w-36 items-center justify-center rounded-[66px] bg-brand text-base font-semibold text-white transition-colors hover:bg-brand-dark md:flex"
        >
          Contact us
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-md p-2 text-brand md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-6 space-y-4 md:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-base ${isActive ? "font-bold" : "font-normal"} text-brand`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="block rounded-[66px] bg-brand py-2.5 text-center text-base font-semibold text-white"
            onClick={() => setMobileOpen(false)}
          >
            Contact us
          </Link>
        </div>
      )}
    </header>
  );
}
