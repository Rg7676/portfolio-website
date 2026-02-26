import { Code2, FolderGit2, Mail, UserRound, Wrench } from 'lucide-react';
import { profile } from '../data/portfolio';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { href: '#hero', label: 'Главная', icon: Code2 },
  { href: '#skills', label: 'Навыки', icon: Wrench },
  { href: '#projects', label: 'Проекты', icon: FolderGit2 },
  { href: '#about', label: 'Обо мне', icon: UserRound },
  { href: '#contact', label: 'Контакты', icon: Mail }
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-base-200/80 bg-base-50/95 backdrop-blur dark:border-base-900 dark:bg-base-950/90">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-tight text-base-900 transition-colors hover:text-base-600 dark:text-base-50 dark:hover:text-base-300"
        >
          {profile.name}
        </a>

        <nav aria-label="Основная навигация" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-base-600 transition-colors hover:bg-base-100 hover:text-base-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base-400 dark:text-base-300 dark:hover:bg-base-900 dark:hover:text-base-50"
              >
                <Icon size={14} />
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>

      <nav aria-label="Мобильная навигация" className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-4 pb-3 md:hidden sm:px-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full border border-base-200 px-3 py-1.5 text-xs text-base-600 transition-colors hover:border-base-300 hover:text-base-900 dark:border-base-800 dark:text-base-300 dark:hover:border-base-700 dark:hover:text-base-50"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
