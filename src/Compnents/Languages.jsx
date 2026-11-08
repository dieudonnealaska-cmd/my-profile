import React from 'react'

const skills = [
  { name: 'HTML', detail: 'Semantic structure', mark: '</>' },
  { name: 'CSS', detail: 'Responsive styling', mark: '{ }' },
  { name: 'JavaScript', detail: 'Interactive behavior', mark: 'JS' },
  { name: 'React', detail: 'Reusable interfaces', mark: 'R' },
  { name: 'Tailwind CSS', detail: 'Utility-first styling', mark: 'TW' },
]

const Languages = () => {
  return (
    <section id="languages" className="scroll-mt-28 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#36735a]">03 / Languages & tools</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">My frontend toolkit.</h2>
          <p className="mt-4 leading-7 text-[#59645e]">
            The building blocks I’m using to create responsive, interactive experiences for the web.
          </p>
        </div>

        <ul className="mt-10 grid gap-3 text-white sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <li key={skill.name} className="flex min-h-28 text-white items-center gap-4 border border-[#dce3dc] bg-slate-900 p-5 transition hover:border-[#36735a]">
              <span className={`flex size-12 shrink-0 items-center justify-center rounded-md font-mono text-sm font-bold ${index % 2 === 0 ? 'bg-[#e6a94f] text-[#263229]' : 'bg-[#dce9df] text-[#28543e]'}`} aria-hidden="true">
                {skill.mark}
              </span>
              <div>
                <h3 className="font-semibold text-[#263229]">{skill.name}</h3>
                <p className="mt-1 text-sm text-[#68746d]">{skill.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Languages
