
import React, { useState } from "react";
import logo from '../assets/logo.jpg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About Me", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Languages", path: "#languages" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav aria-label="Main navigation" className="fixed h-20 top-0 left-0 w-full z-50 bg-slate-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#home" onClick={() => setIsOpen(false)} aria-label="Dieudonne home" className="flex items-center gap-3 text-2xl font-bold tracking-wide">
          <img src={logo} alt="Dieudonne" className="size-14 rounded-full object-cover" />
          <span>Dieudonne<span className="text-blue-500">.</span></span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.path}
                className="text-gray-300 hover:text-blue-900 hover:border-b-2 border-blue-600 transition duration-300 font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:block bg-blue-700 hover:bg-blue-700 px-5 py-2 rounded-full font-medium transition"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl focus:outline-none"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div id="mobile-navigation" className="md:hidden bg-slate-900 px-6 py-5">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-blue-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-block bg-blue-600 px-5 py-2 rounded-full"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
