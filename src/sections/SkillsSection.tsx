import { Section } from '../components/Section';
import { skillGroups } from '../data/portfolio';

export function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Навыки"
      subtitle="Ключевые технологии, которые я использую для чистого frontend и надежного backend."
      className="mt-24"
    >
      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-base-200 p-5 dark:border-base-800">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-base-500">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-base-200 px-2.5 py-1 text-xs text-base-600 dark:border-base-700 dark:text-base-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
