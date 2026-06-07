import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { PostListItem } from "@/components/blog/PostListItem";

type PostSummary = {
  _id: string;
  title?: string;
  subtitle?: string;
  slug?: string;
  publishedAt?: string;
  views?: number;
};

export default async function BlogPage() {
  const { data } = await sanityFetch({ query: POSTS_QUERY });
  const posts = (data as PostSummary[] | null) ?? [];

  return (
    <div className="animate-fade-up space-y-6 sm:space-y-8">
      <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-6 sm:mb-8 text-white">
        Archive
      </h2>

      {posts.length === 0 ? (
        <p className="font-mono text-sm text-stone-500">No posts yet.</p>
      ) : (
        <ul className="space-y-5 sm:space-y-8">
          {posts.map((post: PostSummary) => (
            <PostListItem
              key={post.slug}
              post={{
                slug: post.slug ?? "",
                title: post.title ?? "",
                subtitle: post.subtitle ?? undefined,
                date: post.publishedAt
                  ? post.publishedAt.slice(0, 10)
                  : "",
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
