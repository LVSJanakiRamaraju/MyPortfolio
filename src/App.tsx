import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

// Components
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Experience from './components/Experience.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">LVS</a>
              <div className="flex items-center gap-6">
                <a href="#about" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">About</a>
                <a href="#skills" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">Skills</a>
                <a href="#projects" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">Projects</a>
                <a href="#contact" className="hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400">Contact</a>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {darkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5" />}
                </button>
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