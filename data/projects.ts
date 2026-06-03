export type Project = {
  name: string;
  description: string;
  href: string;
};

export const projects: Project[] = [
  {
    name: "Building Khoomi",
    description:
      "An African marketplace for handmade goods. Built with Next.js, Tailwind, and Supabase.",
    href: "#",
  },
  {
    name: "Agentic Helix",
    description:
      "A fork of the Helix editor to make agentic coding feel native. Written in Rust.",
    href: "#",
  },
  {
    name: "TypeSafe RPC",
    description:
      "A lightweight, fully typed RPC framework for TypeScript monorepos.",
    href: "#",
  },
  {
    name: "RSSible",
    description:
      "URL + CSS selectors = RSS feed. A tool to turn any website into a feed.",
    href: "#",
  },
];
