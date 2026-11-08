import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-28 bg-green-400 px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#3d4c40]">04 / Contact</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-[#1d3028] sm:text-6xl">Have something good in mind?</h2>
          <p className="mt-5 max-w-xl leading-7 text-[#3d4c40]">
            I’m open to new opportunities, creative collaborations, and conversations about building for the web.
          </p>
        </div>
        <a href="mailto:dieudonne@example.com?subject=Portfolio%20inquiry" className="inline-flex w-fit items-center gap-3 rounded-md bg-[#1d3028] px-6 py-4 font-semibold text-white transition hover:bg-[#315342]">
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}

export default Contact
