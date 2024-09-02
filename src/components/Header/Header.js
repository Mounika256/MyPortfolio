import React, { useState } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/Images/MDLogo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#356c70] p-4 flex justify-between items-center flex-wrap md:flex-nowrap">
      {/* Logo */}
      <div className="flex items-center mb-2 md:mb-0">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-5">
          <span className="text-xl font-bold text-[#356c70]">
            <a href="/">
              <img
                src={Logo}
                alt="logo"
                className="rounded-full shadow-lg object-cover no-underline"
              />
            </a>
          </span>
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full md:flex md:items-center md:w-auto`}
      >
        <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Projects", href: "#projects" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => handleItemClick(item.label.toLowerCase())}
                className={`text-white no-underline transition-transform hover:scale-105 ${
                  activeItem === item.label.toLowerCase()
                    ? "font-extrabold scale-105"
                    : "hover:text-gray-300"
                }`}
                style={{ display: "inline-block" }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/13S7fgBjuZEZcywM8dr99p8cVB8c_zrQS/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#356c70] no-underline px-4 py-2 rounded-lg flex items-center space-x-2 shadow hover:bg-gray-100 transition"
            >
              <span>Resume</span>
              <FaDownload />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
