"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "about", path: "/about" },
  { name: "projects", path: "/projects" },
  { name: "blog", path: "/blog" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="mb-12 sm:mb-16">
      {pathname !== "/" && (
        <Link
          href="/"
          className="inline-block mb-4 sm:mb-5 font-mono text-xs sm:text-sm text-stone-400 underline decoration-stone-600 underline-offset-4 hover:text-white hover:decoration-white transition-colors"
          aria-label="Back to home"
        >
          ..
        </Link>
      )}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-5 sm:mb-6 tracking-tight text-white">
        Dozie
      </h1>
      <nav className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs sm:text-sm">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.path ||
            (link.path !== "/" && pathname.startsWith(link.path));
          return (
            <Link
              key={link.name}
              href={link.path}
              className={`underline underline-offset-4 decoration-1 hover:text-white transition-colors ${
                isActive
                  ? "text-white decoration-white"
                  : "text-stone-400 decoration-stone-600"
              }`}
            >
              /{link.name}
            </Link>
          );
        })}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 decoration-1 text-stone-400 decoration-stone-600 hover:text-white transition-colors"
        >
          /resume
        </a>
      </nav>
    </header>
  );
}
