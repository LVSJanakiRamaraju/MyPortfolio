import React from 'react';

const experiences = [
  {
    company: 'AlgoTutor',
    role: 'DSA Trainer & Software Developer',
    period: 'June 2024 - Present',
    description: 'Conducted structured training sessions on Data Structures & Algorithms (DSA) for students and early-stage developers, focusing on problem-solving skills and coding efficiency.',
  },
  {
    company: 'EDUMOON',
    role: 'Front End Developer',
    period: 'April 2024 - June 2024',
    description: 'Led an amazing team in creating the frontend for Compliance Desk India, a web platform designed to simplify compliance management.',
  },
  
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-indigo-200 dark:bg-gray-700"></div>
              <div className="absolute left-0 top-2 w-2 h-2 -ml-1 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-1 dark:text-white">{exp.role}</h3>
                <div className="text-indigo-600 dark:text-indigo-400 mb-2">{exp.company}</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mb-4">{exp.period}</div>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;