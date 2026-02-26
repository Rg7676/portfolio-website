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
  title: 'Fullstack разработчик (TypeScript / React / Node.js)',
  location: 'Turkmenistan',
  email: 'rahman020205@gmail.com',
  github: 'https://github.com/Rg7676',
  telegram: 'https://t.me/kleemann55',
  cv: '/Rahman_Gurbanmuhammedow_CV.pdf',
  summary:
    'Создаю практичные fullstack-продукты с чистой архитектурой, строгой типизацией и поддерживаемыми интерфейсами. Фокусируюсь на надежной инженерии, быстрой итерации и коде, который остается понятным в долгой перспективе.',
  about: [
    'Я fullstack-разработчик, которому нравится превращать сложные требования в понятные технические решения.',
    'Мой подход опирается на базовые принципы: ясная структура, читаемый код и аккуратное тестирование.',
    'Во frontend я уделяю внимание доступности интерфейса, сильным паттернам TypeScript и продуманному управлению состоянием.',
    'Во backend я делаю акцент на предсказуемых API, фоновой обработке задач и стабильных потоках данных.',
    'Ценю коммуникацию, документацию и последовательные улучшения вместо резких и рискованных переписываний.',
    'Моя цель — выпускать продукт, который выглядит качественно для пользователя и остается удобным для команды.'
  ]
};

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['TypeScript', 'React', 'Zustand', 'Tailwind CSS', 'Next.js']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'BullMQ', 'Redis', 'Swagger', 'JWT']
  },
  {
    title: 'Базы данных',
    skills: ['PostgreSQL', 'Prisma', 'MongoDB']
  },
  {
    title: 'Инструменты',
    skills: ['Docker', 'Git', 'GitHub', 'Vite', 'Postman']
  }
];

export const projects: Project[] = [
  {
    title: 'URL Checker Fullstack',
    description:
      'Платформа проверки URL с очередями задач, удобным интерфейсом и обратной связью по статусам в реальном времени.',
    stack: ['NestJS', 'BullMQ', 'Redis', 'React', 'Zustand', 'Tailwind', 'Docker'],
    details:
      'Проект объединяет API и воркеры на NestJS с BullMQ и Redis для надежной фоновой проверки URL. Во frontend используется React + Zustand для прозрачного управления состоянием и Tailwind для чистой верстки. Docker обеспечивает единообразную локальную разработку и деплой.',
    githubUrl: 'https://github.com/Rg7676',
    liveUrl: '#'
  },
  {
    title: 'Auth API',
    description:
      'Ориентированный на production API аутентификации с безопасным входом, жизненным циклом токенов и документацией.',
    stack: ['NestJS', 'PostgreSQL', 'Prisma', 'JWT', 'Swagger'],
    details:
      'API включает регистрацию, вход, refresh-токены и ролевую авторизацию. Prisma и PostgreSQL делают модель данных понятной и поддерживаемой, а Swagger дает прозрачную документацию для frontend и внешних интеграций.',
    githubUrl: 'https://github.com/Rg7676',
    liveUrl: '#'
  },
  {
    title: 'Next.js Dashboard',
    description:
      'Аккуратный dashboard-интерфейс, созданный на базе учебного проекта и доработанный до практичного уровня.',
    stack: ['Next.js', 'TypeScript'],
    details:
      'Несмотря на учебную основу, проект развивался как реальный продукт: переработана иерархия информации, улучшена структура компонентов и упрощены взаимодействия. В итоге получилась надежная база для внутреннего инструмента или админ-панели.',
    githubUrl: 'https://github.com/Rg7676',
    liveUrl: '#'
  }
];
