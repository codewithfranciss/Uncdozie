const projects = [
  {
    name: "Project Alpha",
    description: "A high-performance distributed cache",
    href: "#",
  },
  {
    name: "DevTools",
    description: "CLI utilities for faster workflows",
    href: "#",
  },
  {
    name: "TypeSafe RPC",
    description: "End-to-end type safety for monorepos",
    href: "#",
  },
];

export function FeaturedProjects() {
  return (
    <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
      <p>Some of the stuff I made:</p>
      <ul className="list-disc list-inside space-y-2 ml-1 sm:ml-2">
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.href}
              className="font-mono underline underline-offset-4 decoration-stone-500 text-[#d4a574]"
            >
              {project.name}
            </a>
            <span className="text-stone-400">: {project.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
