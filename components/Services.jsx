import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = ({isDarkmode}) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='services' 
      className='w-full min-h-screen flex items-center justify-center px-[12%] py-10 scroll-mt-20'
    >
        <div className='w-full max-w-7xl'>
          <motion.h4 
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
            className='text-center mb-2 text-lg font-Ovo'
          >
            What I offer
          </motion.h4>
          <motion.h2 
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
            className='text-center text-5xl font-Ovo'
          >
            My services
          </motion.h2>
          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.7}}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
          >
              I am a frontend developer with 3 years of experience in React and React Native. I have several full-stack projects and mobile applications published in the PlayStore.
          </motion.p>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.9}} 
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'
          >
            {serviceData.map(({icon, title, description, link}, index) =>(
              <motion.div
                whileInView={{scale: 1.05}}
                key={index} 
                className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
              >
                <Image src={icon} alt='icon' className='w-10' />
                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/70'>
                  {description}
                </p>
                <a href={link} className='flex items-center mt-5 gap-2 text-sm'>
                  Read more <Image alt='read-more' src={isDarkmode ? assets.right_arrow_bold_dark :assets.right_arrow} className='w-4' />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      <div>

      </div>
    </motion.div>
  )
}

export default Services