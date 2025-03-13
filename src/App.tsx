import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun, FileDown, Menu, X } from 'lucide-react';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
          <div className="container mx-auto px-4">
            {/* Main Navigation Bar */}
            <div className="flex items-center justify-between h-16">
              <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                LVS
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                <a href="#about" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">About</a>
                <a href="#skills" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">Skills</a>
                <a href="#projects" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">Projects</a>
                <a href="#contact" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">Contact</a>
                <a
                  href="/Portfolio_Resume.pdf"
                  download="LVS_Janaki_Rama_Raju_Resume.pdf"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <FileDown className="w-4 h-4" />
                  Resume
                </a>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {darkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>

              {/* Mobile Navigation Controls */}
              <div className="flex items-center gap-4 md:hidden">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {darkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5" />}
                </button>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  ) : (
                    <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
              className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="py-4 space-y-4">
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="block py-2 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
                >
                  About
                </a>
                <a
                  href="#skills"
                  onClick={closeMenu}
                  className="block py-2 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  onClick={closeMenu}
                  className="block py-2 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block py-2 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
                >
                  Contact
                </a>
                <a
                  href="/Portfolio_Resume.pdf"
                  download="LVS_Janaki_Rama_Raju_Resume.pdf"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 w-full justify-center"
                >
                  <FileDown className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;