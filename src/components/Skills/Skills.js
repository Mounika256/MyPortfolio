import React from 'react';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React JS',
  'Redux', 'Tailwind CSS', 'Bootstrap', 'Axios',
  'Angular/TS', 'Next.js', 'Prismic', 'Jasmine',
  'Karma', 'Python', 'SQLite', 'GIT/GitHub',
  'JIRA', 'Chrome Dev Tools'
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-gray-900 px-10 py-10 scroll-mt-20 scroll-smooth">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-8 text-[#356c70]">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-lg rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              <span className="text-xl font-semibold">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
