import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = {
  'Full Stack': [
    {
      title: 'Student Result Portal ',
      description: "Built a full-stack Student Result Analysis Portal using React.js, Node.js, and MongoDB to visualize academic data across8 semesters, including SGPA/CGPA trends, batch-wise pass percentages, and peer performance comparisons.",
      image: 'https://res.cloudinary.com/drlfc6gsb/image/upload/v1753637074/Screenshot_2025-07-27_224336_o72mox.png',
      tech: ['React', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Express.js'],
      github: 'https://github.com/LVSJanakiRamaraju/Student-Result-Analysis-Portal',
      demo: 'https://student-result-analysis-portal.vercel.app/',
    },
    {
      title: 'Fruit & Vegetable Order Platform',
      description: "It's a full-stack web application that enables users to place orders for vegetables and fruits, track order status, and allows admins to manage inventory and order data. Built using Next.js, PostgreSQL, and Tailwind CSS, with separate authentication for users and admins.",
      image: 'https://res.cloudinary.com/drlfc6gsb/image/upload/v1746162082/Screenshot_2025-05-02_102504_mlqqnj.png',
      tech: ['React', 'Tailwind CSS', 'PostgreSQL', 'Node.js', 'Express.js'],
      github: 'https://github.com/LVSJanakiRamaraju/AgroFix',
      demo: 'https://agro-fix-one.vercel.app/',
    },
    
    {
      title: 'Task Manager',
      description: 'An interactive and responsive Task Manager Application built using HTML, CSS, and JavaScript. This app helps users efficiently manage their daily, weekly, and monthly tasks with an intuitive UI and local storage support.',
      image: 'https://res.cloudinary.com/drlfc6gsb/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1742105372/Screenshot_2025-03-16_113633_acv5kl.png',
      tech: ['HTML', 'CSS', 'JavaScript', 'Boxicons', 'SweetAlert'],
      github: 'https://github.com/LVSJanakiRamaraju/ToDo_Application',
      demo: 'https://lvsjanakiramaraju.github.io/ToDo_Application/',
    },
        {
      title: 'New Year 2025',
      description: "This project is an animated New Year greeting featuring colorful text animations, balloons, and fireworks using HTML, CSS, and JavaScript.",
      image: 'https://res.cloudinary.com/drlfc6gsb/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1742122314/Screenshot_2025-03-16_161226_axex4m.png',
      tech: ['HTML', 'CSS (Keyframe Animations, Transitions)', 'JavaScript'],
      github: 'https://github.com/LVSJanakiRamaraju/NewYear2025',
      demo: 'https://lvsjanakiramaraju.github.io/NewYear2025/',
    },
    // {
    //   title: 'Wikipedia Search Application',
    //   description: "This is a simple Wikipedia Search Application built using HTML, CSS (Bootstrap), and JavaScript. The application fetches search results from Wikipedia's API and displays them in a user-friendly format.",
    //   image: 'https://res.cloudinary.com/drlfc6gsb/image/upload/v1742122291/Screenshot_2025-03-16_161146_ebn9ld.png',
    //   tech: ['HTML', 'CSS (Bootstrap 4.5.2)', 'JavaScript'],
    //   github: 'https://github.com/LVSJanakiRamaraju/Wikipedia_Search_Application',
    //   demo: 'https://lvsjanakiramaraju.github.io/Wikipedia_Search_Application/',
    // },
    
  ],
  'Machine Learning': [
    {
      title: 'Learning Path Generator',
      description: 'A Streamlit-based application that creates personalized learning paths using the Model Context Protocol (MCP), helping learners follow adaptive, goal-driven study plans. The system integrates with YouTube, Google Drive, and Notion through APIs, unifying video-based learning, document storage, and note-taking in one platform.',
      image: 'https://res.cloudinary.com/drlfc6gsb/image/upload/t_correct/v1753112204/Screenshot_2025-07-21_210628_pengs4.png',
      tech: ['Python', 'Streamlit', 'APIs'],
      github: 'https://huggingface.co/spaces/RamaRaju18/Learning_Pat_Generator/tree/main',
      demo: 'https://huggingface.co/spaces/RamaRaju18/Learning_Pat_Generator',
    },
    {
      title: 'Book Recommender System',
      description: 'A collaborative filtering-based web app that recommends similar books and showcases the top 50 popular ones. Built using Streamlit, it utilizes user ratings and cosine similarity to personalize recommendations.',
      image: 'https://res.cloudinary.com/drlfc6gsb/image/upload/v1743958533/Screenshot_2025-04-06_222054_m4iemp.png',
      tech: ['Python', 'Streamlit', 'Pandas', 'Cosine Similarity'],
      github: 'https://huggingface.co/spaces/RamaRaju18/Personalized-Book-Recommender/tree/main',
      demo: 'https://huggingface.co/spaces/RamaRaju18/Personalized-Book-Recommender',
    },
    {
      title: 'Twitter Trending Topics Predictor',
      description: 'This is a machine learning-powered web application that predicts trending topics on Twitter based on country and context selection. Built using Streamlit, it leverages machine learning techniques to analyze and forecast popular discussions across different regions.',
      image: 'https://res.cloudinary.com/drlfc6gsb/image/upload/v1742124632/Screenshot_2025-03-16_165947_imtt0z.png',
      tech: ['Python', 'Streamlit', 'Random Forest Classifier', 'KMeans Clustering'],
      github: 'https://github.com/LVSJanakiRamaraju/ML_Maestros',
      demo: 'https://huggingface.co/spaces/RamaRaju18/ML_Maestros',
    },
    {
      title: 'COVID-19 Prediction',
      description: 'This project is a COVID-19 Prediction App built using Streamlit and K-Nearest Neighbors (KNN) algorithm. The application takes user inputs based on various symptoms and risk factors and predicts whether the user might be affected by COVID-19.',
      image: 'https://res.cloudinary.com/drlfc6gsb/image/upload/v1742125793/Screenshot_2025-03-16_171939_kimkru.png',
      tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      github: 'https://github.com/LVSJanakiRamaraju/Covid-19',
      demo: 'https://huggingface.co/spaces/RamaRaju18/Covid-19',
    },
  ],
 
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Full Stack');

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Projects</h2>
        
        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
            {Object.keys(projects).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects[activeCategory].map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;