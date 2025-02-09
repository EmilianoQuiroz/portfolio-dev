import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({isDarkmode}) => {
  return (
    <div id='about' className='w-full min-h-screen flex items-center justify-center px-[12%] py-10 scroll-mt-20'>
      <div className='w-full max-w-7xl'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About me</h2>

        {/*-----------------Columnas-----------------*/}
        <div className='flex w-full flex-col lg:flex-row items-center justify-center gap-20 my-20'>
          <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
              <Image src={assets.user_image} alt='foto-perfil' className='w-full rounded-3xl' />
          </div>
          <div className='flex-1'>
              <p className='mb-10 max-w-2xl font-Ovo'>
              I am a front-end web and mobile developer with more than three years of experience in software development for companies and as a freelancer. My most used technologies are Typescript, React, React Native, Node, Express and MongoDB. A fact to highlight is that in my free time I develop video games in Unreal Engine and C++, another of my hobbies related to video games is 3D art in Blender.
              </p>
              <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description}, index) => (
                  <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
                    <Image src={isDarkmode ? iconDark :icon} alt={title} className='w-7 mt-3' />
                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-gray-600 text-sm dark:text-white/50'>{description}</p>
                  </li>
                ))}
              </ul>
              <h2 className='my-6 text-gray-700 font-Ovo dark:text-white'>Tools I use</h2>
              <ul className=' flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index)=>(
                  <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
                    <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About