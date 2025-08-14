import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Moon,
  Sun,
  FileDown,
  Menu,
  X
} from 'lucide-react';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => setIsMenuOpen(false);


  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                <img
                  src="https://res.cloudinary.com/drlfc6gsb/image/upload/v1742109320/Screenshot_2024-09-08_194245_wydyfu.png"
                  alt="LVS Logo"
                  className="w-12 h-12 rounded-3xl shadow-2xl p-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                />
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                <a href="#about" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">About</a>
                <a href="#experience" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">Experience</a>
                <a href="#projects" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">Projects</a>
                <a href="#contact" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">Contact</a>
                <a
                  href="/Kanumuri_L_V_S_Janaki_Rama_Raju_Resume.pdf"
                  download="Kanumuri_L_V_S_Janaki_Rama_Raju_Resume.pdf"
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

              {/* Mobile Controls */}
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
                <a href="#about" onClick={closeMenu} className="block py-2 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">About</a>
                <a href="#experience" onClick={closeMenu} className="block py-2 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">Experience</a>
                <a href="#projects" onClick={closeMenu} className="block py-2 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">Projects</a>
                <a href="#contact" onClick={closeMenu} className="block py-2 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">Contact</a>
                <a
                  href="/Kanumuri_L_V_S_Janaki_Rama_Raju_Resume.pdf"
                  download="Kanumuri_L_V_S_Janaki_Rama_Raju.pdf"
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
          <Experience />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;