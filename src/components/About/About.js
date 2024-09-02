import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-900 px-10 py-10 scroll-mt-20 scroll-smooth">
      <h2 className="text-5xl font-extrabold text-center mb-8 text-[#356c70]">My Experience</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">Front-End Developer</h3>
          <h4 className="text-xl font-semibold mb-4">Mobius By Gaian</h4>
          <p className="text-gray-700 mb-4">
            02/2024 - 08/2024 | Hyderabad, India
          </p>
          <p className="mb-4">
            Mobius By Gaian is an AI-based company developing products across
            various sectors.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Built and optimized websites using AngularJS, integrating
              third-party packages like Echarts and PrimeNG.
            </li>
            <li>
              Developed and maintained test cases with Jasmine and Karma to
              ensure robust performance.
            </li>
            <li>
              Worked on the Mobius website using Next.js and Prismic for
              modular, high-performance components.
            </li>
          </ul>
        </div>

        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">
            Associate Software Engineer (ReactJS)
          </h3>
          <h4 className="text-xl font-semibold mb-4">
            Napier Healthcare Solutions
          </h4>
          <p className="text-gray-700 mb-4">09/2021 - 10/2023</p>
          <p className="mb-4">
            Napier Healthcare Solutions is a product-based company improving
            healthcare service delivery and operational efficiency.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Developed responsive layouts and UIs using HTML, CSS, JavaScript,
              and React JS.
            </li>
            <li>
            Collaborated closely with designers, back-end
            developers, and other stakeholders to deliver
            seamless and intuitive user experiences
            </li>
            <li>
              Optimized performance, integrated RESTful APIs, and managed state
              with Redux.
            </li>
            <li>
              Conducted code reviews, unit testing, and led a team of 2
              developers in best practices.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default About;
