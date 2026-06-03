import type { Project } from "@/data/projects";

export function ProjectItem({ project }: { project: Project }) {
  return (
    <li className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 text-sm sm:text-base">
      <span className="text-stone-600 hidden sm:inline">•</span>
      <div>
        <a
          href={project.href}
          className="font-mono underline underline-offset-4 decoration-stone-600 hover:decoration-white transition-colors text-[#d4a574]"
        >
          {project.name}
        </a>
        <span className="text-stone-600 ml-3 font-mono text-xs sm:text-sm hidden sm:inline">
          -
        </span>
        <p className="text-stone-400 mt-1 sm:mt-0 sm:inline sm:ml-3">
          {project.description}
        </p>
      </div>
    </li>
  );
}
