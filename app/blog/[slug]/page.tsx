import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY, POST_SLUGS_QUERY } from "@/sanity/lib/queries";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await client.fetch(POST_SLUGS_QUERY);
  return posts.map(({ slug }: { slug: string }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: post } = await sanityFetch({ query: POST_QUERY, params: { slug } });
  return { title: post ? `${post.title} — Dozie` : "Post not found" };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({ query: POST_QUERY, params: { slug } });

  if (!post) notFound();

  const date = post.publishedAt ? post.publishedAt.slice(0, 10) : "";

  return (
    <article className="animate-fade-up">
      <div className="flex items-baseline justify-end mb-8 sm:mb-10 font-mono text-xs sm:text-sm text-stone-500">
        <time dateTime={date}>{date}</time>
      </div>

      <header className="mb-8 sm:mb-10">
        <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
          {post.title}
        </h1>
        {post.subtitle && (
          <p className="mt-3 font-serif text-stone-400 text-base sm:text-lg">
            {post.subtitle}
          </p>
        )}
      </header>

      {post.body && <PortableTextRenderer content={post.body} />}

      <footer className="mt-24 flex flex-col items-center gap-3 text-stone-600">
        <div className="w-2 h-2 rounded-full bg-stone-700" />
      </footer>
    </article>
  );
}
