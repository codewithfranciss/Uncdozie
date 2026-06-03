import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/data/posts";
import { Block } from "@/components/blog/Block";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — Dozie` : "Post not found" };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="animate-fade-up">
      <div className="flex items-baseline justify-end mb-8 sm:mb-10 font-mono text-xs sm:text-sm text-stone-500">
        <time dateTime={post.date}>{post.date}</time>
      </div>

      <header className="mb-8 sm:mb-10">
        <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
          {post.title}
        </h1>
      </header>

      <div className="space-y-5">
        {post.content.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      <footer className="mt-24 flex flex-col items-center gap-3 text-stone-600">
        <div className="font-mono text-xs">147</div>
        <div className="w-2 h-2 rounded-full bg-stone-700" />
      </footer>
    </article>
  );
}
