import { Check, Copy, Github, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { Section } from '../components/Section';
import { profile } from '../data/portfolio';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  async function handleCopyEmail() {
    if (!navigator.clipboard) {
      return;
    }

    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(`Запрос с портфолио от ${form.name || 'посетителя сайта'}`);
    const body = encodeURIComponent(
      `Имя: ${form.name}\nEmail: ${form.email}\n\nСообщение:\n${form.message || 'Сообщение не указано.'}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <Section id="contact" title="Контакты" className="mt-24">
      <div className="grid gap-10 md:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 text-base-600 transition-colors hover:text-base-900 dark:text-base-300 dark:hover:text-base-50"
          >
            <Mail size={16} /> {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-base-600 transition-colors hover:text-base-900 dark:text-base-300 dark:hover:text-base-50"
          >
            <Github size={16} /> github.com/Rg7676
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 rounded-full border border-base-300 px-3 py-1.5 text-sm text-base-700 transition-colors hover:border-base-500 hover:text-base-900 dark:border-base-700 dark:text-base-300 dark:hover:border-base-500 dark:hover:text-base-50"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Скопировано' : 'Скопировать email'}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-base-200 p-5 dark:border-base-800">
          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-base-500">Имя</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              className="w-full rounded-lg border border-base-300 bg-transparent px-3 py-2 text-sm text-base-900 outline-none transition-colors focus:border-base-500 dark:border-base-700 dark:text-base-100"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-base-500">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              className="w-full rounded-lg border border-base-300 bg-transparent px-3 py-2 text-sm text-base-900 outline-none transition-colors focus:border-base-500 dark:border-base-700 dark:text-base-100"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-base-500">Сообщение</span>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              className="w-full rounded-lg border border-base-300 bg-transparent px-3 py-2 text-sm text-base-900 outline-none transition-colors focus:border-base-500 dark:border-base-700 dark:text-base-100"
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full border border-base-300 px-4 py-2 text-sm text-base-700 transition-colors hover:border-base-500 hover:text-base-900 dark:border-base-700 dark:text-base-200 dark:hover:border-base-500 dark:hover:text-base-50"
          >
            <Send size={15} /> Отправить через Email
          </button>
        </form>
      </div>
    </Section>
  );
}
