/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif']
      },
      colors: {
        base: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          400: '#a3a3a3',
          500: '#737373',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a'
        }
      }
    }
  },
  plugins: []
};
