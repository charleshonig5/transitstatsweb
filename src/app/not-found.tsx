import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Head back to Transit Stats to explore Chicago CTA data, rider stats, and transit insights.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="rounded-b-[36px] bg-white">
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-6xl font-bold text-brand">404</p>
        <h1 className="mt-4 text-2xl font-bold text-gray-900 md:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 text-base text-gray-500 md:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 md:text-base"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
