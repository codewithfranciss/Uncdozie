import { sanityFetch } from "@/sanity/lib/live";
import { SITE_STATS_QUERY } from "@/sanity/lib/queries";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SocialLinks } from "@/components/SocialLinks";
import { SiteViewTracker } from "@/components/SiteViewTracker";

type SiteStats = { totalViews: number } | null;

export default async function HomePage() {
  const { data: siteStats } = await sanityFetch({ query: SITE_STATS_QUERY });
  const stats = siteStats as SiteStats;

  return (
    <div className="animate-fade-up space-y-12 sm:space-y-16">
      <section className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-stone-300">
        <p className="text-white">Software Engineer. Builder.</p>
        <p>
          Curious by default; adventurous by choice. I build clean, scalable
          systems and intuitive user interfaces.
        </p>
        <FeaturedProjects />
      </section>

      <section className="space-y-4 sm:space-y-6 pt-6 sm:pt-8 border-t border-stone-800/50">
        <p className="text-base sm:text-lg text-stone-300">
          You can reach me via email:{" "}
          <span className="font-mono text-[#d4a574]">
            hello @ [website domain]
          </span>
          .
        </p>
        <p className="text-sm sm:text-base text-stone-400">
          Of course, replace [website domain] with the domain name. Just
          fighting spambots.
        </p>
        <SocialLinks />
      </section>

      <SiteViewTracker initialViews={stats?.totalViews ?? 0} />
    </div>
  );
}
