import React from 'react'

const projects = [
  {
    number: '01',
    type: 'Portfolio',
    title: 'A home for my work',
    description: 'A personal website that brings together an introduction, selected projects, skills, and a simple way to connect.',
    tools: ['React', 'Tailwind CSS'],
    accent: 'bg-[#e9f0e9]',
  },
  {
    number: '02',
    type: 'Stock Pro',
    title: 'A calmer task board',
    description: 'A focused planning space for organizing tasks, setting priorities, and seeing what deserves attention next.',
    tools: ['JavaScript', 'React'],
    accent: 'bg-[#f3e8dc]',
  },
  {
    number: '03',
    type: 'Coopsave',
    title: 'A guide to local places',
    description: 'A responsive discovery page for browsing neighborhood spots with useful details and a clean, map-friendly layout.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    accent: 'bg-[#e8edf2]',
  },
   {
    number: '04',
    type: 'Content Managenent System',
    title: ' Help to Content management places',
    description: 'A responsive discovery page for browsing neighborhood spots with useful details and a clean, map-friendly layout.',
    tools: ['HTML', 'NodeJs', 'JavaScript'],
    accent: 'bg-[#e8edf2]',
  }, {
    number: '05',
    type: 'Bruno Master Ai',
    title: 'Help for requesting data from satellite',
    description: 'A responsive discovery page for browsing neighborhood spots with useful details and a clean, map-friendly layout.',
    tools: ['HTML', 'Tailwind', 'JavaScript'],
    accent: 'bg-[#e8edf2]',
  }, {
    number: '06',
    type: 'Automatic Door Opening',
    title: 'Help people to open dooor whitout callingb person',
    description: 'A responsive discovery page for browsing neighborhood spots with useful details and a clean, map-friendly layout.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    accent: 'bg-[#e8edf2]',
  }
]

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28 bg-[#1d3028] px-6 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#a9cfac]">02 / Projects</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Ideas, made tangible.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#c8d4cb]">
            A few project directions that reflect the kind of clear, useful web experiences I enjoy building.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className="flex min-h-[310px] flex-col rounded-md border border-white/15 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:bg-white/[0.08] sm:p-6">
              <div className={`mb-7 flex aspect-[1.8/1] items-start justify-between rounded-sm p-4 ${project.accent}`}>
                <span className="text-xs font-bold uppercase tracking-widest text-[#263229]">{project.type}</span>
                <span className="font-serif text-3xl text-[#263229]/60">{project.number}</span>
              </div>
              <h3 className="font-serif text-2xl">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-[#c8d4cb]">{project.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                {project.tools.map((tool) => (
                  <li key={tool} className="rounded-sm border border-white/20 px-2.5 py-1 text-xs text-[#e5eee7]">{tool}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
