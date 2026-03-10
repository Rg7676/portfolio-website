export type Project = {
  title: string;
  description: string;
  stack: string[];
  details: string;
  githubUrl: string;
  liveUrl?: string;
};

export const profile = {
  name: 'Rahman Gurbanmuhammedow',
  title: 'Frontend React Developer (TypeScript / React / Next.js)',
  location: 'Turkmenistan',
  email: 'rahman020205@gmail.com',
  github: 'https://github.com/Rg7676',
  telegram: 'https://t.me/kleemann55',
  cv: '/Rahman_Gurbanmuhammedow_CV.pdf',
  summary:
    'Разрабатываю современные интерфейсы на React с акцентом на производительность, доступность и аккуратную архитектуру компонентов. Предпочитаю чистый TypeScript, продуманную UX-логику и поддерживаемый код.',
  about: [
    'Я frontend-разработчик, который специализируется на React и TypeScript.',
    'Мне важно превращать макеты и бизнес-требования в понятные, быстрые и стабильные интерфейсы.',
    'В работе делаю акцент на архитектуре компонентов, переиспользуемости и аккуратной типизации.',
    'Отдельное внимание уделяю адаптивности, доступности и качеству пользовательского опыта.',
    'Умею выстраивать чистую интеграцию frontend с API и поддерживать предсказуемое состояние приложения.',
    'Моя цель — создавать интерфейсы, которые легко развивать команде и приятно использовать пользователю.'
  ]
};

export const skillGroups = [
  {
    title: 'Frontend Core',
    skills: ['TypeScript', 'React', 'Next.js', 'JavaScript (ES6+)', 'Vite']
  },
  {
    title: 'UI / Styling',
    skills: ['Tailwind CSS', 'SCSS', 'CSS Modules', 'Framer Motion', 'Responsive Design']
  },
  {
    title: 'State & Data',
    skills: ['Zustand', 'Redux Toolkit', 'TanStack Query', 'REST API', 'Axios']
  },
  {
    title: 'Инструменты',
    skills: ['Git', 'GitHub', 'Figma', 'Storybook', 'ESLint', 'Prettier']
  }
];

export const projects: Project[] = [
  {
    title: 'URL Checker Frontend',
    description:
      'Интерфейс для проверки URL с live-обновлением статусов, фильтрацией и удобной работой со списком задач.',
    stack: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Vite', 'REST API'],
    details:
      'Во frontend реализованы формы валидации, таблица результатов, optimistic UI и обработка состояний загрузки/ошибок. Приложение построено на компонентном подходе с явной типизацией API-ответов, что упростило масштабирование и поддержку.',
    githubUrl: 'https://github.com/Rg7676',
    liveUrl: '#'
  },
  {
    title: 'Auth Flow UI',
    description:
      'Frontend-модуль аутентификации: регистрация, вход, восстановление доступа и защищенные маршруты.',
    stack: ['React', 'TypeScript', 'React Hook Form', 'Zod', 'JWT', 'Tailwind CSS'],
    details:
      'Сделан акцент на UX форм, клиентскую валидацию и удобные сценарии ошибок. Логика авторизации изолирована в переиспользуемых хуках и утилитах, что позволяет легко переносить модуль между проектами.',
    githubUrl: 'https://github.com/Rg7676',
    liveUrl: '#'
  },
  {
    title: 'Next.js Dashboard',
    description:
      'Дашборд с продуманной информационной иерархией, адаптивной сеткой и чистой системой компонентов.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Charts', 'App Router'],
    details:
      'Проект начинался как учебный, но был доработан как production-like интерфейс: улучшены состояния загрузки, добавлены reusable layout-блоки и унифицированы UI-паттерны. В итоге получилась сильная база для admin/internal tooling.',
    githubUrl: 'https://github.com/Rg7676',
    liveUrl: '#'
  }
];
