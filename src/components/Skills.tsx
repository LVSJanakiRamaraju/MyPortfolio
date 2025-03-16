import React from 'react';

const skills = {
  'Languages': ['Python', 'JavaScript', 'Java', 'C++', 'PHP'],
  'Web Technologies': ['Tailwind CSS', 'React.js', 'Node.js', 'Express.js', 'TypeScript', 'REST APIs'],
  'Machine Learning': ['TensorFlow', 'Scikit-learn', 'NLP', 'Data Manipulation & Analysis', 'ML Algorithms', 'OpenCV'],
  'Databases': ['SQL' , 'Sqlite'],
  'Tools': ['Git', 'Linux', 'VS Code', 'Jupyter', 'Google Colab', 'Figma'],
};

const SkillCard = ({ skill }: { skill: string }) => (
  <div className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{skill}</h4>
    </div>
  </div>
);

const CategoryTitle = ({ title }: { title: string }) => (
  <div className="relative mb-8">
    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 inline-block">
      {title}
    </h3>
    <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 rounded-full"></div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Skills</h2>
        </div>
        
        <div className="space-y-16">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="relative">
              <CategoryTitle title={category} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((skill) => (
                  <SkillCard key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;