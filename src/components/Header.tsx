"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        mobileOpen
          ? "bg-brand lg:bg-white"
          : scrolled
            ? "bg-white shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
            : "bg-white shadow-[0_4px_30px_rgba(0,0,0,0.06)] lg:shadow-none"
      }`}
    >
      <nav
        className="container relative flex items-center justify-between py-4 md:py-7"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" aria-label="Transit Stats home" className="shrink-0">
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
                className={`text-base ${isActive ? "font-bold" : "font-normal"} text-brand transition-all duration-200 hover:scale-105 hover:text-brand-dark`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop nav — button far right */}
        <Link
          href="/contact"
          className="hidden h-10 w-36 items-center justify-center rounded-[66px] bg-brand text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_16px_rgba(247,117,44,0.4)] lg:flex"
        >
          Contact us
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`rounded-md p-2 lg:hidden transition-colors duration-300 ${mobileOpen ? "text-white" : "text-brand"}`}
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

      {/* Mobile nav — always rendered, animated with grid rows */}
      <div
        className={`grid lg:hidden transition-[grid-template-rows] duration-300 ease-in-out ${
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/20 bg-brand px-6 py-6 space-y-4">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-base ${isActive ? "font-bold" : "font-normal"} text-white transition-all duration-300`}
                  style={{
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen ? "translateY(0)" : "translateY(-8px)",
                    transitionDelay: mobileOpen ? `${75 * i}ms` : "0ms",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="block rounded-[66px] bg-white py-2.5 text-center text-base font-semibold text-brand transition-all duration-300"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(-8px)",
                transitionDelay: mobileOpen ? `${75 * navLinks.length}ms` : "0ms",
              }}
              onClick={() => setMobileOpen(false)}
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
