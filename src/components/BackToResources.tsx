import Link from "next/link";

/** The "Back" link from an article to Resources: above the title on phones
 *  and tablets, at the top of the section rail on desktop. */
export default function BackToResources({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/resources"
      className={`group flex items-center gap-2.5 text-sm font-semibold text-brand transition-all duration-200 hover:-translate-x-1 active:scale-95 md:text-base ${className}`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:-translate-x-1"
      >
        <path
          d="M16 10H4M4 10L9 5M4 10L9 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Back
    </Link>
  );
}
