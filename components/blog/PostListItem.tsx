import Link from "next/link";
import type { Post } from "@/data/posts";

export function PostListItem({ post }: { post: Post }) {
  return (
    <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 group">
      <span className="font-mono text-stone-500 text-xs sm:text-sm shrink-0 w-24 sm:w-28">
        {post.date}
      </span>
      <div className="flex flex-col">
        <Link
          href={`/blog/${post.slug}`}
          className="font-mono text-sm sm:text-base underline underline-offset-4 decoration-stone-700 group-hover:decoration-white transition-colors text-[#d4a574]"
        >
          {post.title}
        </Link>
        {post.subtitle && (
          <span className="text-stone-500 text-xs sm:text-sm mt-1 sm:mt-1.5 font-serif">
            {post.subtitle}
          </span>
        )}
      </div>
    </li>
  );
}
