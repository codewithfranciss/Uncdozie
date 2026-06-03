import { posts } from "@/data/posts";
import { PostListItem } from "@/components/blog/PostListItem";

export default function BlogPage() {
  return (
    <div className="animate-fade-up space-y-6 sm:space-y-8">
      <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-6 sm:mb-8 text-white">
        Archive
      </h2>

      <ul className="space-y-5 sm:space-y-8">
        {posts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </ul>
    </div>
  );
}
