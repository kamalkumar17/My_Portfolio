import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub, FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const keyframesStyle = `
    @keyframes typing {
      0% {
        width: 0;
      }
      70% {
        width: 100%;
      }
      85% {
        width: 100%; /* Pause at full text */
      }
      100% {
        width: 0; /* Erase the text */
      }
    }

    .typewriter {
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
      animation: typing 6s steps(12, end) infinite;
    }
  `;

  return (
    <div className='flex flex-col items-center justify-center h-screen px-4 bg-gray-200'>
      <style>{keyframesStyle}</style> {/* Internal CSS for typewriter effect */}
      <p className='mb-5 text-center text-gray-700 sm:text-base md:text-lg sm:-mt-20 lg:text-[15px]'>
        LET's BUILD SOMETHING TOGETHER
      </p>
      <h1 className='mb-5 text-4xl font-bold text-center text-gray-500 sm:text-5xl md:text-6xl'>
        <span className="typewriter">
          Hi, I'm <span className="text-gray-800">Kamal</span>
        </span>
      </h1>
      <h1 className='text-4xl font-bold text-center text-gray-500 sm:text-5xl md:text-6xl'>
        A Front-End Web Developer
      </h1>

      {/* Location Section */}
      <div className='flex items-center text-2xl text-gray-700 mt-7 sm:text-base md:text-lg lg:text-xl'>
        <p>based in Noida, India</p>
        <Link to='#' target='_blank' rel='noopener noreferrer' className='mt-0 ml-2 text-black'>
          <FaLocationArrow size={15} />
        </Link>
      </div>

      {/* Social Media Links */}
      <div className='flex mt-5 space-x-6'>
        <Link
          to='https://www.linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-500 duration-300 ease-in-out hover:text-blue-600'
        >
          <FaLinkedin size={30} />
        </Link>
        <Link
          to='https://www.instagram.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-500 duration-300 ease-in-out hover:text-pink-500'
        >
          <FaInstagram size={30} />
        </Link>
        <Link
          to='https://www.facebook.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-500 duration-300 ease-in-out hover:text-blue-500'
        >
          <FaFacebook size={30} />
        </Link>
        <Link
          to='https://www.github.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-500 duration-300 ease-in-out hover:text-black'
        >
          <FaGithub size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Home;