import { Section } from '../components/Section';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/portfolio';

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Проекты"
      subtitle="Frontend-проекты на React и Next.js с упором на UX, типизацию и архитектуру компонентов."
      className="mt-24"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
