import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Youtube, Code2 } from 'lucide-react';

const roles = [
  'Full Stack Developer',
  'Problem Solver',
  'Tech Enthusiast',
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (isTyping) {
      const role = roles[roleIndex];
      if (currentRole.length < role.length) {
        timeout = setTimeout(() => {
          setCurrentRole(role.slice(0, currentRole.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (currentRole.length > 0) {
        timeout = setTimeout(() => {
          setCurrentRole(currentRole.slice(0, currentRole.length - 1));
        }, 50);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentRole, isTyping, roleIndex]);

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 -translate-y-2">
            <h1 className="text-4xl lg:text-5xl font-bold mb-5 dark:text-white">
              I'm <span className="text-indigo-600 dark:text-indigo-400">L V S JANAKI RAMA RAJU </span>
              <br />
              <span className="inline-block min-h-[1.2em]">{currentRole}</span>
              <span className="animate-blink">|</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              I am a Web-Applications Developer, focused on developing scalable web applications with modern tech and strong foundation in Data Structures and Algorithms, now exploring AI/ML to build intelligent, data-driven solutions.
            </p>
            <div className="flex gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition"
              >
                Contact Me
              </a>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/LVSJanakiRamaraju"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transform hover:scale-110 transition-transform"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/lvsjanakiramarajukanumuri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transform hover:scale-110 transition-transform"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://leetcode.com/u/being_Limitless/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transform hover:scale-110 transition-transform"
              >
                <Code2 className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@LVS_Logics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transform hover:scale-110 transition-transform"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 -translate-y-2">
            <img
              src="https://camo.githubusercontent.com/2de6ac0c6b16f59641bf9b120afab2d3e7fb1af52487d212521e3d3ae6b7eee1/68747470733a2f2f696d672e6672656570696b2e636f6d2f7072656d69756d2d766563746f722f696c6c757374726174696f6e2d7765622d646576656c6f706d656e742d70726f6772616d6d65722d636f64696e672d776562736974655f3734363635352d323831372e6a7067"
              alt="Programming"
              className="rounded-lg w-full max-w-lg mx-auto shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;