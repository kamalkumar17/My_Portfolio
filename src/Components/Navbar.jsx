import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="z-50 w-full text-black bg-gray-800 shadow-lg">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Text */}
            <div className="flex items-center">
              <NavLink to="/" className="flex items-center">
                <span className="text-xl font-bold tracking-[15px] text-white uppercase just">
                  <span className="text-3xl text-red-500">K</span>amal
                </span>
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden space-x-6 md:flex">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 transition duration-300 rounded-md ${
                    isActive ? 'bg-white text-black' : 'text-white hover:bg-white hover:text-black'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 py-2 transition duration-300 rounded-md ${
                    isActive ? 'bg-white text-black' : 'text-white hover:bg-white hover:text-black'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `px-3 py-2 transition duration-300 rounded-md ${
                    isActive ? 'bg-white text-black' : 'text-white hover:bg-white hover:text-black'
                  }`
                }
              >
                Skills
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `px-3 py-2 transition duration-300 rounded-md ${
                    isActive ? 'bg-white text-black' : 'text-white hover:bg-white hover:text-black'
                  }`
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-2 transition duration-300 rounded-md ${
                    isActive ? 'bg-white text-black' : 'text-white hover:bg-white hover:text-black'
                  }`
                }
              >
                Contact
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleSidebar}
                className={`text-white hover:text-gray-300 focus:outline-none ${
                  isOpen ? 'text-white' : ''
                }`}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar for Mobile */}
        <div
          className={`z-10 fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            onClick={toggleSidebar}
            className="absolute text-white top-4 right-4 hover:text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="flex flex-col items-start p-6 space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `w-full px-3 py-2 transition duration-300 rounded-md ${
                  isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `w-full px-3 py-2 transition duration-300 rounded-md ${
                  isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `w-full px-3 py-2 transition duration-300 rounded-md ${
                  isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `w-full px-3 py-2 transition duration-300 rounded-md ${
                  isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `w-full px-3 py-2 transition duration-300 rounded-md ${
                  isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`
              }
            >
              Contact
            </NavLink>

            {/* Social Media Icons */}
            <div className="flex mt-6 space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition duration-300 hover:text-blue-500"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition duration-300 hover:text-blue-400"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com/in/kamal-kumar-418b4521a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition duration-300 hover:text-blue-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/kamalkumar17/React-Router-Dom-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition duration-300 hover:text-gray-400"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;