import React from 'react';
import AboutImage from '../assets/my_photo.jpg'; // Adjust the path based on your folder structure
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-10 px-5 pt-24 bg-gray-200 lg:flex-row lg:items-start lg:gap-16'>
      {/* Image Section */}
      <div className='flex justify-center w-full lg:w-1/2'>
        <img
          src={AboutImage}
          alt="About"
          className='object-cover h-auto max-w-sm rounded-lg shadow-lg '
        />
      </div>

      {/* Text Section */}
      <div className='flex flex-col items-center justify-center w-full text-center lg:w-1/2 lg:items-start lg:text-left'>
        <h2 className='mb-4 text-3xl font-bold text-gray-800 lg:text-4xl'>
          About Me
        </h2>
        <h2 className='mb-4 text-3xl font-bold text-gray-800 lg:text-5xl'>
          Frontend Developer
        </h2>
        <p className='text-base leading-relaxed text-gray-600 lg:text-lg'>
          My Name is <span className='text-2xl font-bold text-gray-800'>Kamal</span>. a frontend developer driven by clean design and clean code. I specialize in building modern, responsive web apps using React.js, Tailwind CSS, and JavaScript. I’ve brought projects like a real-time Crypto Tracker and a Pokédex search app to life, focusing on smooth UX, reusable components, and efficient state handling.

          I enjoy turning complex ideas into simple, elegant interfaces. Whether I’m collaborating with a team or building solo, my goal is always the same: craft user-first experiences that look good and work even better.
        </p>
        <div className='flex items-center justify-center mt-6 space-x-4'>
          <Link
            to="https://drive.google.com/file/d/1q4NBpso08_wSenkZx8w3QMTKilJcbnf5/view?usp=sharing"
            target="_blank"
            download
            className='px-6 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900'
          >
            Download Resume
          </Link>
          <Link
            to="https://linkedin.com/in/kamal-kumar-418b4521a"
            target="_blank"
            className='px-6 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900'
          >
            Visit LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About; 