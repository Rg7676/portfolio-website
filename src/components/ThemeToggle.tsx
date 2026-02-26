import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

type Theme = 'dark' | 'light';

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  if (theme === 'dark') {
    root.classList.add('dark');
    return;
  }

  root.classList.remove('dark');
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  const isDark = theme === 'dark';

  function handleToggle() {
    const nextTheme: Theme = isDark ? 'light' : 'dark';

    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-base-300 text-base-600 transition-colors hover:border-base-500 hover:text-base-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base-400 dark:border-base-700 dark:text-base-300 dark:hover:border-base-500 dark:hover:text-base-50"
      aria-label="Переключить тему"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
