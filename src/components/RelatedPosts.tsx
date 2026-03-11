import Link from "next/link";
import { posts } from "@/data/posts";

export default function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const related = posts.filter((p) => p.slug !== currentSlug).slice(0, 2);
  if (related.length === 0) return null;

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold text-brand md:text-2xl">
        More resources
      </h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/${post.slug}`}
            className="flex flex-col overflow-hidden rounded-[10px] bg-white shadow-[0_0_30px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
          >
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <h3 className="text-base font-semibold leading-snug text-brand md:text-lg md:leading-snug">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-dark/70">
                {post.description}
              </p>
              <span className="group mt-auto flex items-center gap-2 pt-4 text-sm font-semibold text-brand transition-all duration-200 hover:translate-x-1">
                Read more
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path
                    d="M4 10H16M16 10L11 5M16 10L11 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
