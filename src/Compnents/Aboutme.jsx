import React from 'react'
import portrait from '../assets/logo.jpg'

const Aboutme = () => {
  return (
    <>
      <section id="home" className="scroll-mt-28 px-6 pb-20 pt-32 sm:pb-28 sm:pt-36">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
          <div>
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#36735a]">
              <span className="h-px w-8 bg-[#36735a]" /> Frontend developer
            </p>
            <h1 className="max-w-2xl font-serif text-5xl leading-[1.06] sm:text-6xl lg:text-7xl">
              Hi, I’m Dieudonne<span className="text-[#e76c4b]">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#59645e]">
              I build clear, thoughtful web experiences that make everyday tasks feel a little easier.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-md bg-[#1d3028] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#315342]">
                Explore my projects <span aria-hidden="true">↗</span>
              </a>
              <a href="#about" className="rounded-md border border-[#cbd5cd] px-6 py-3 text-sm font-semibold text-[#1d3028] transition hover:border-[#1d3028]">
                A little about me
              </a>
            </div>
            <p className="mt-12 text-sm text-[#68746d]">Currently learning, building, and open to new opportunities.</p>
          </div>

          <div className="relative mx-auto w-full max-w-md md:ml-auto">
            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-2xl border border-[#9fb5a4]" />
            <img src={portrait} alt="Dieudonne" className="relative aspect-[4/4.5] w-full rounded-2xl object-cover object-center shadow-xl" />
            <div className="absolute -bottom-5 right-4 rounded-md bg-[#e6a94f] px-4 py-3 text-sm font-semibold text-[#263229] shadow-lg sm:right-[-1.5rem]">
              Making the web feel human <br />
              <p className='font-bold'>Call me <span className='text-violet-700'>Mike</span></p>
            </div>
          </div>
          
        </div>
      </section>

      <section id="about" className="scroll-mt-28 border-y border-[#e1e7e1] bg-black text-white px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#36735a]">01 / About</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Curious by nature. Builder by choice.</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#59645e]">
            <p>
              I’m Dieudonne, a frontend developer who enjoys turning ideas into useful, welcoming experiences on the web. I care about the details people feel: clear layouts, readable content, and interactions that make sense.
            </p>
            <p>
              I’m growing my craft one project at a time, learning from each challenge and looking for thoughtful ways to make the web more accessible and enjoyable.
            </p>
            <div className="grid gap-4 pt-3 sm:grid-cols-3">
              {[
                ['01', 'Stay curious'],
                ['02', 'Keep it clear'],
                ['03', 'Build with care'],
              ].map(([number, value]) => (
                <div key={number} className="border-t-2 border-[#e6a94f] pt-3">
                  <span className="text-xs font-bold text-[#36735a]">{number}</span>
                  <p className="mt-1 font-semibold text-[#263229]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutme
