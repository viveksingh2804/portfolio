import ProjectCard from "../components/ProjectCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <div>
      <SectionHeader eyebrow="Projects" title="Applied projects across full-stack systems and computer vision.">
        Project links are hidden for now, so each card focuses on the known scope, description, and tech stack.
      </SectionHeader>
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
