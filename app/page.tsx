import { EyeIcon } from "lucide-react";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SocialLinks } from "@/components/SocialLinks";

export default function HomePage() {
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

      <div className="flex items-center justify-center gap-2 font-mono text-xs sm:text-sm text-stone-500">
        <EyeIcon size={14} strokeWidth={1.5} />
        <span>
          you are the <span className="text-[#d4a574]">11th</span> visitor
        </span>
      </div>
    </div>
  );
}
