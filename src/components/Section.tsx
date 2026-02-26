import { motion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

type SectionProps = PropsWithChildren<{
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
}>;

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  }
};

export function Section({ id, title, subtitle, className = '', children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeIn}
      className={`scroll-mt-24 ${className}`.trim()}
    >
      {title ? (
        <header className="mb-10">
          <h2 className="text-xl font-semibold tracking-tight text-base-900 dark:text-base-50 sm:text-2xl">
            {title}
          </h2>
          {subtitle ? <p className="mt-3 max-w-2xl text-sm text-base-500">{subtitle}</p> : null}
        </header>
      ) : null}
      {children}
    </motion.section>
  );
}
