import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container flex items-center justify-between py-[49px]">
        {/* Left: logo icon + copyright */}
        <div className="flex items-center justify-between gap-8 sm:gap-16">
          {/* Transit Stats logo icon — white version */}
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="13.16" y="0" width="15.68" height="42" fill="white" />
            <rect x="0" y="7.86" width="7.84" height="5.27" fill="white" />
            <rect x="0" y="18.36" width="13.14" height="10.48" fill="white" />
            <rect x="7.87" y="34.16" width="5.27" height="7.84" fill="white" />
            <rect x="28.86" y="0" width="5.27" height="7.84" fill="white" />
            <rect x="28.86" y="13.16" width="13.14" height="10.48" fill="white" />
            <rect x="34.16" y="28.87" width="7.84" height="5.27" fill="white" />
          </svg>

          <p className="text-base font-normal text-white">
            Transit Stats {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        {/* Right: privacy policy link */}
        <Link
          href="/privacy"
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
