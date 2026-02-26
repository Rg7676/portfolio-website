import { Section } from '../components/Section';
import { profile } from '../data/portfolio';

export function AboutSection() {
  return (
    <Section id="about" title="Обо мне" className="mt-24">
      <div className="space-y-4 max-w-3xl">
        {profile.about.map((sentence) => (
          <p key={sentence} className="text-base leading-relaxed text-base-600 dark:text-base-300">
            {sentence}
          </p>
        ))}
      </div>
    </Section>
  );
}
