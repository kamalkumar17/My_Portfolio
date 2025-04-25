import React from 'react'
import bgImage from '../assets/image.png' // Import the background image
import TodoImage from '../assets/todo.png' // Import the background image
import CryotoTracker from '../assets/cryptotracker.png' // Import the background image
import CloneImage from '../assets/clone.png' // Import the background image


const ProjectCard = ({ bgImage, demoLink }) => {
  return (
    <div
      className='relative z-0 h-64 bg-center bg-cover rounded-lg shadow-lg group'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100'>
        <a
          href={demoLink}
          target='_blank'
          rel='noopener noreferrer'
          className='px-4 py-2 font-bold text-black bg-white rounded-lg shadow-lg'
        >
          View Demo
        </a>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className='z-0 flex flex-col items-start justify-center gap-5 px-4 bg-gray-200 sm:px-6 '>
      <div className='w-full mt-10 text-center lg:text-left'>
        <h1 className='text-3xl font-bold text-gray-600 tracking-[10px] mb-4'>Projects</h1>
        <h1 className='mb-4 text-3xl font-bold text-gray-800'>What I Have Built.</h1>
      </div>

      {/* Grid Layout for Projects */}
      <div className='grid w-full grid-cols-1 gap-6 sm:grid-cols-2'>
        <ProjectCard
          title='Project 1'
          bgImage={bgImage}
          demoLink='https://poke-dex-ten-orpin.vercel.app/'
        />
        <ProjectCard
          title='Project 2'
          bgImage={TodoImage}
          demoLink='https://lucent-sprinkles-f46cac.netlify.app/'
        />
        <ProjectCard
          title='Project 3'
          bgImage={CryotoTracker}
          demoLink='https://github.com/kamalkumar17/Crypto-CoinGecko-Project'
        />
        <ProjectCard
          title='Project 4'
          bgImage={CloneImage}
          demoLink='https://github.com/kamalkumar17/Andi_Software_demo'
        />
      </div>
    </div>
  )
}

export default Projects