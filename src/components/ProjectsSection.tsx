import ProjectCard from "./ProjectCard.tsx";
import projects from "@/data/projects.json";

interface ProjectsSectionProps {
  exclude?: string[];
}

export default function ProjectsSection({ exclude = [] }: ProjectsSectionProps) {
  const filteredProjects = projects.filter(
    (project) => !exclude.includes(project.title.toLowerCase().replace(/\s+/g, "-"))
  );

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
