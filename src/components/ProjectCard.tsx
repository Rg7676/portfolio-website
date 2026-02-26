import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import type { Project } from '../data/portfolio';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="rounded-2xl border border-base-200 bg-base-50 p-6 transition-colors hover:border-base-300 dark:border-base-800 dark:bg-base-900 dark:hover:border-base-700">
      <h3 className="text-lg font-semibold text-base-900 dark:text-base-50">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-base-600 dark:text-base-300">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-base-200 px-2.5 py-1 text-xs text-base-500 dark:border-base-700 dark:text-base-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-sm">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-base-600 transition-colors hover:text-base-900 dark:text-base-300 dark:hover:text-base-50"
          >
            <Github size={15} /> GitHub
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-base-600 transition-colors hover:text-base-900 dark:text-base-300 dark:hover:text-base-50"
            >
              <ExternalLink size={15} /> Демо
            </a>
          ) : null}
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="inline-flex items-center gap-1 text-sm text-base-600 transition-colors hover:text-base-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base-400 dark:text-base-300 dark:hover:text-base-50"
          aria-expanded={isExpanded}
        >
          Подробнее
          <ChevronDown size={16} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="mt-5 border-t border-base-200 pt-5 text-sm leading-relaxed text-base-600 dark:border-base-800 dark:text-base-300">
              {project.details}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
