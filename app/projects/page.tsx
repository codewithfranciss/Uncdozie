import { projects } from "@/data/projects";
import { ProjectItem } from "@/components/projects/ProjectItem";

export default function ProjectsPage() {
  return (
    <div className="animate-fade-up space-y-6 sm:space-y-8">
      <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-6 sm:mb-8 text-white">
        Projects
      </h2>

      <ul className="space-y-5 sm:space-y-6">
        {projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </ul>
    </div>
  );
}
