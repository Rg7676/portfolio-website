import { Github, Mail, Paperclip } from 'lucide-react'
import { Section } from '../components/Section'
import { profile } from '../data/portfolio'

export function HeroSection() {
	return (
		<Section id='hero' className='pt-20 sm:pt-28'>
			<p className='text-sm font-medium uppercase tracking-[0.2em] text-base-500'>
				{profile.location}
			</p>
			<h1 className='mt-5 text-4xl font-bold tracking-tight text-base-900 dark:text-base-50 sm:text-6xl'>
				{profile.name}
			</h1>
			<p className='mt-4 max-w-3xl text-lg text-base-700 dark:text-base-200'>
				{profile.title}
			</p>
			<p className='mt-6 max-w-3xl text-base leading-relaxed text-base-600 dark:text-base-300'>
				{profile.summary}
			</p>

			<div className='mt-10 flex flex-wrap items-center gap-3'>
				<a
					href={`mailto:${profile.email}`}
					className='inline-flex items-center gap-2 rounded-full border border-base-300 px-4 py-2 text-sm text-base-700 transition-colors hover:border-base-500 hover:text-base-900 dark:border-base-700 dark:text-base-200 dark:hover:border-base-500 dark:hover:text-base-50'
				>
					<Mail size={15} /> Связаться
				</a>
				<a
					href={profile.github}
					target='_blank'
					rel='noreferrer'
					className='inline-flex items-center gap-2 rounded-full border border-base-300 px-4 py-2 text-sm text-base-700 transition-colors hover:border-base-500 hover:text-base-900 dark:border-base-700 dark:text-base-200 dark:hover:border-base-500 dark:hover:text-base-50'
				>
					<Github size={15} /> GitHub
				</a>
				<a
					href='./Rahman_Gurbanmuhammedow_CV.pdf'
					download
					className='inline-flex items-center gap-2 rounded-full border border-base-300 px-4 py-2 text-sm text-base-700 transition-colors hover:border-base-500 hover:text-base-900 dark:border-base-700 dark:text-base-200 dark:hover:border-base-500 dark:hover:text-base-50'
				>
					<Paperclip size={15} /> Скачать CV
				</a>
			</div>
		</Section>
	)
}
