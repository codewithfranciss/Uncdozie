import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const links = [
  { href: "#", label: "GitHub", Icon: GithubIcon },
  { href: "#", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "#", label: "Twitter", Icon: TwitterIcon },
];

export function SocialLinks() {
  return (
    <div className="flex gap-5 sm:gap-6 pt-4 sm:pt-6">
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          className="text-stone-400 hover:text-white transition-colors"
          aria-label={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
