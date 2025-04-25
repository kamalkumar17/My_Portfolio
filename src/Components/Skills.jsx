import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaGit, FaBootstrap, FaSass, FaVuejs, FaAngular } from 'react-icons/fa'
import { SiTailwindcss, SiRedux, SiTypescript, SiNextdotjs } from 'react-icons/si'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div className='flex flex-col items-start justify-center gap-5 px-4 py-5 bg-gray-200 bg-4 sm:px-6'>
      <div className='w-full text-center lg:text-left'>
        <h1 className='text-3xl font-bold text-gray-600 tracking-[10px] mb-4'>Skills</h1>
        <h1 className='mb-4 text-3xl font-bold text-gray-800'>What Can I Do...</h1>
      </div>

      <div className='grid w-full grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        {/* Reusable Skill Cards */}
        <SkillCard Icon={FaHtml5} skillName="HTML5" iconColor="text-orange-500" />
        <SkillCard Icon={FaCss3Alt} skillName="CSS3" iconColor="text-blue-500" />
        <SkillCard Icon={FaJsSquare} skillName="JavaScript" iconColor="text-yellow-500" />
        <SkillCard Icon={FaReact} skillName="React" iconColor="text-blue-400" />
        <SkillCard Icon={SiRedux} skillName="Redux" iconColor="text-purple-600" />
        <SkillCard Icon={SiTailwindcss} skillName="Tailwind CSS" iconColor="text-teal-500" />
        <SkillCard Icon={FaBootstrap} skillName="Bootstrap" iconColor="text-purple-500" />
        <SkillCard Icon={SiTypescript} skillName="TypeScript" iconColor="text-blue-600" />
        <SkillCard Icon={FaGit} skillName="Git" iconColor="text-red-500" />
        <SkillCard Icon={FaGithub} skillName="GitHub" iconColor="text-gray-800" />
      </div>
    </div>
  )
}

export default Skills