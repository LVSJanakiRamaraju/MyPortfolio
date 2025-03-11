import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img
              src="https://res.cloudinary.com/drlfc6gsb/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1741415729/WhatsApp_Image_2025-03-08_at_11.53.34_AM_e6zdom.jpg"
              alt="Profile"
              className="rounded-lg w-full shadow-xl"
            />
          </div>
          <div className="md:w-2/3">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I specialize in building scalable web applications using modern technologies. My journey in tech started at Anil Neerukonda Institute of Technology and Sciences(ANITS).
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
               💻 What I Do:<br/>

                  Frontend Development: I create responsive and interactive user interfaces using React, HTML, CSS, and JavaScript.<br/>
                  Backend Development: I build strong APIs and manage databases with Node.js, Express, MongoDB, and SQL.<br/>
                  Problem Solving: I’m really good with Data Structures & Algorithms and love optimizing code to make it run better.<br/>
                  Machine Learning Enthusiast: I’m diving into AI-driven apps and data-based solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                When I'm not coding, you'll find me contributing to open-source projects,
                mentoring aspiring developers, or exploring the latest developments in AI and technology.
                I believe in continuous learning and staying at the forefront of technological innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;