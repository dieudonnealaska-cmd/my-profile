import React from 'react'
import Navbar from './Compnents/Navbar'
import Aboutme from './Compnents/Aboutme'
import Projects from './Compnents/Projects'
import Languages from './Compnents/Languages'
import Contact from './Compnents/Contact'

const currentYear = new Date().getFullYear()

const App = () => {
  return (
    <div className="min-h-screen bg-[#f5f7f4] text-[#18211f] antialiased">
      <Navbar />
      <main>
        <Aboutme />
        <Projects />
        <Languages />
        <Contact />
      </main>
      <footer className="border-t border-[#dce3dc] bg-slate-900 px-6 text-center py-6 text-center text-sm text-[#66726b]">
        <p>Designed and built by Dieudonne. © {currentYear}</p>
      </footer>
    </div>
  )
}

export default App
