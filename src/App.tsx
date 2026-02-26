import { motion } from 'framer-motion';
import { NavBar } from './components/NavBar';
import { profile } from './data/portfolio';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';

function App() {
  return (
    <div className="min-h-screen bg-base-50 text-base-900 transition-colors dark:bg-base-950 dark:text-base-50">
      <NavBar />

      <main className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: 'easeOut' }}>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
        </motion.div>
      </main>

      <footer className="mx-auto w-full max-w-6xl border-t border-base-200 px-4 py-8 text-sm text-base-500 dark:border-base-900 sm:px-8">
        <p>© 2026 {profile.name}</p>
      </footer>
    </div>
  );
}

export default App;
