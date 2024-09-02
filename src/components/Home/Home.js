import React, { useState } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../../assets/My-Image.JPG';
import "./Home.css";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="home" className="flex items-center justify-center min-h-screen bg-gray-900 px-10">
      <div className="flex flex-col md:flex-row items-center justify-center w-full p-4 md:p-8">
        {/* Content Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Hello, I'm a <span className="text-[#356c70] role">Front-End Developer</span>
          </h1>
          <p className="text-md md:text-lg mb-6 text-white">
            With over 3 years of experience, I design and maintain web applications using HTML, CSS, JavaScript, TypeScript, Angular, React, and Next.js. I specialize in creating responsive, high-performance interfaces and stay current with industry trends to deliver innovative, user-centric solutions.
          </p>
          <button 
            onClick={openModal}
            className="px-6 py-2 cursor-pointer bg-[#356c70] text-white font-semibold rounded-md shadow transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Get in Touch
          </button>
        </div>

        {/* Animated Image and Dot Section */}
        <motion.div
          className="relative md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          {/* Profile Image with Circular Path */}
          <div className="relative flex justify-center items-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-40 h-40 md:w-64 md:h-64 rounded-full shadow-lg object-cover border border-gray-300"
            />

            {/* Rotating Circular Path */}
            <motion.div
              className="absolute rounded-full border border-gray-300"
              style={{ width: '320px', height: '320px' }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: 'linear',
              }}
            >
              {/* Dots positioned on the Circular Path */}
              <div className="absolute w-4 h-4 bg-[#356c70] rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute w-4 h-4 bg-[#356c70] rounded-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2" />
              <div className="absolute w-4 h-4 bg-[#356c70] rounded-full left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2" />
              <div className="absolute w-4 h-4 bg-[#356c70] rounded-full right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2" />
            </motion.div>
          </div>
          
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex items-start justify-center z-50 p-4">
          <div className="relative bg-white p-6 rounded-md shadow-lg w-80 md:w-96">
            <button 
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition cursor-pointer"
            >
              <i className="fas fa-times fa-lg"></i>
            </button>
            <div className="flex flex-col space-y-4">
              <a href="mailto:mounikadonga113@gmail.com" className="flex items-center text-gray-700 no-underline">
                <i className="fas fa-envelope mr-2"></i>
                <span>mounikadonga113@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/mounika-d-0057321a7" className="flex items-center text-gray-700 no-underline" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin mr-2"></i>
                <span>linkedin.com/in/mounika-d-0057321a7</span>
              </a>
              <a href="tel:8074408793" className="flex items-center text-gray-700 no-underline">
                <i className="fas fa-mobile-alt mr-2"></i>
                <span>(+91) 8074408793</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
