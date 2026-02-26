import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light') {
  document.documentElement.classList.remove('dark');
} else {
  document.documentElement.classList.add('dark');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
