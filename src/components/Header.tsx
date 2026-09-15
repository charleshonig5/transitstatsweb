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
            : "bg-white shadow-[0_4px_30px_rgba(0,0,0,0.06)] lg:shadow-none"
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

        {/* Desktop nav — button far right */}
        <Link
          href="/contact"
          className="hidden h-10 w-36 items-center justify-center rounded-[66px] bg-brand text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_16px_rgba(247,117,44,0.4)] active:scale-[0.97] lg:flex"
        >
          Contact us
        </Link>

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
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-brand/90 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
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
      <Link
        href="/contact"
        className="group block transition-all duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
          transitionDelay: mobileOpen ? `${75 * navLinks.length}ms` : "0ms",
        }}
        onClick={() => setMobileOpen(false)}
      >
        <span className="block rounded-[66px] bg-white px-10 py-3 text-center text-lg font-semibold text-brand transition-transform duration-200 group-active:scale-[0.97]">
          Contact us
        </span>
      </Link>
    </div>
    </>
  );
}
