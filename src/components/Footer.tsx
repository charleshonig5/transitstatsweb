import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container flex items-center justify-between py-[49px]">
        {/* Left: logo icon + copyright */}
        <div className="flex items-center justify-between gap-8 sm:gap-16">
          <Image
            src="/images/logomark.svg"
            alt="Transit Stats"
            width={42}
            height={42}
          />

          <p className="text-base font-normal text-white">
            Transit Stats {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        {/* Right: privacy policy link */}
        <Link
          href="/privacypolicy"
          className="flex items-center gap-2.5 text-base font-normal text-white transition-colors hover:text-white/80"
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
