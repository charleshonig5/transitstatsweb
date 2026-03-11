import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container flex flex-col items-start gap-5 py-10 md:flex-row md:items-center md:justify-between md:py-[49px]">
        <Image
          src="/images/logomark.svg"
          alt="Transit Stats"
          width={42}
          height={42}
        />

        <nav className="flex items-center gap-6 text-base font-normal text-white" aria-label="Footer navigation">
          <Link href="/" className="transition-opacity duration-200 hover:opacity-80">Home</Link>
          <Link href="/about" className="transition-opacity duration-200 hover:opacity-80">About</Link>
          <Link href="/resources" className="transition-opacity duration-200 hover:opacity-80">Resources</Link>
          <Link href="/faq" className="transition-opacity duration-200 hover:opacity-80">FAQ</Link>
          <Link href="/contact" className="transition-opacity duration-200 hover:opacity-80">Contact</Link>
        </nav>

        <p className="text-base font-normal text-white">
          Transit Stats {new Date().getFullYear()}. All rights reserved.
        </p>

        {/* Privacy policy link */}
        <Link
          href="/privacypolicy"
          className="group flex items-center gap-2.5 text-base font-normal text-white transition-all duration-200 hover:translate-x-1"
        >
          Privacy policy
          {/* Arrow icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            <path
              d="M4 10H16M16 10L11 5M16 10L11 15"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </footer>
  );
}
