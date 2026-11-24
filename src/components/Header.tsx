"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AppStoreButton from "@/components/AppStoreButton";

const navLinks = [
  { href: "/", label: "Home" },
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

  /* Home, Resources and FAQ sit on the off-white canvas, every other page
     on white: the header takes the colour of the page under it. */
  const isHome = ["/", "/resources", "/faq"].includes(pathname);

  return (
    <>
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        mobileOpen
          ? isHome
            ? "bg-transparent lg:bg-canvas"
            : "bg-transparent lg:bg-white"
          : scrolled
            ? `${isHome ? "bg-canvas/90" : "bg-white/90"} backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.06)]`
            : isHome
              ? "bg-canvas"
              : "bg-white"
      }`}
    >
      <nav
        className="container relative flex items-center justify-between py-4 md:py-7 lg:py-6"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" aria-label="Transit Stats home" className="block shrink-0 transition-transform duration-200 active:scale-95">
          <Image
            src="/images/logo.svg"
            alt="Transit Stats"
            width={205}
            height={32}
            className={`h-auto w-[149px] lg:w-[184px] transition-all duration-300 ${mobileOpen ? "brightness-0 invert lg:brightness-100 lg:invert-0" : ""}`}
            priority
          />
        </Link>

        {/* Desktop nav — centered links. Each is a pill that fills with the
            site's light orange on hover; the 16 of padding either side comes
            out of the gap. Every link is as wide as its bold form (an unseen
            bold copy under the word holds the width), so the row doesn't
            shift when the bold moves from one page's link to another's. */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-label={link.label}
                className={`flex flex-col items-center rounded-[100px] px-4 py-2 text-base ${isActive ? "font-bold" : "font-normal"} text-brand transition-all duration-200 after:invisible after:block after:h-0 after:overflow-hidden after:font-bold after:content-[attr(data-label)] hover:bg-[#FEF0EB] active:scale-95`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop nav — App Store button far right: the design's 144 x 48
            button */}
        <AppStoreButton size="sm" tone="brand" show="hidden lg:flex" className="w-[144px]" />

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

    {/* Mobile nav — full-screen overlay in the brand gradient (the feature
        cards' own), fixed to the viewport so it works at any scroll
        position. Sibling of <header> (not a child): the header's
        backdrop-blur would otherwise become the containing block for
        position: fixed and pin the overlay to the header instead. */}
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-16 bg-linear-to-b/srgb from-brand to-brand-dark transition-opacity duration-300 lg:hidden ${
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
      <div
        className="transition-all duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
          transitionDelay: mobileOpen ? `${75 * navLinks.length}ms` : "0ms",
        }}
      >
        <AppStoreButton size="lg" tone="white" onClick={() => setMobileOpen(false)} />
      </div>
    </div>
    </>
  );
}
