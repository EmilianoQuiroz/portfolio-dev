import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react"

const About = ({ isDarkmode }) => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full min-h-screen flex items-center justify-center px-[12%] py-10 scroll-mt-20"
    >
      <div className="w-full max-w-7xl">
        {/* Títulos */}
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }} 
          className="text-center mb-2 text-lg font-Ovo"
        >
          Introduction
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}  
          className="text-center text-5xl font-Ovo"
        >
          About me
        </motion.h2>

        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}  
          className="flex flex-col lg:flex-row items-center justify-center gap-20 my-20"
        >
          {/* Imagen de perfil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}  
            className="w-64 sm:w-80 rounded-3xl mx-auto lg:mx-0 lg:mb-0 mb-10"
          >
            <Image
              src={assets.user_image}
              alt="foto-perfil"
              className="w-full rounded-3xl"
            />
          </motion.div>

          {/* Información y herramientas */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}  
            className="flex-1 text-center lg:text-left"
          >
            {/* Descripción */}
            <p className="mb-10 max-w-2xl font-Ovo text-base lg:text-lg mx-auto lg:mx-0">
              I am a front-end web and mobile developer with more than three years of experience in software development for companies and as a freelancer. My most used technologies are Typescript, React, React Native, Node, Express and MongoDB. A fact to highlight is that in my free time I develop video games in Unreal Engine and C++, another of my hobbies related to video games is 3D art in Blender.
            </p>

            {/* Lista de información */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}  
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0"
            >
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <motion.li
                  whileInView={{scale: 1.05}}
                  key={index}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                >
                  <Image
                    src={isDarkmode ? iconDark : icon}
                    alt={title}
                    className="w-7 mt-3"
                  />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white text-base lg:text-lg">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base dark:text-white/50">
                    {description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>

            {/* Herramientas */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }} 
              className="my-6 text-gray-700 font-Ovo dark:text-white text-lg lg:text-xl text-center lg:text-left"
            >
              Tools I use
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }} 
              className="flex flex-wrap gap-3 sm:gap-5 justify-center mx-auto lg:justify-start lg:mx-0"
            >
              {toolsData.map(({ icon, darkIcon }, index) => (
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                >
                  <Image
                    src={isDarkmode ? darkIcon : icon}
                    alt="Tool"
                    className="w-5 sm:w-7"
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;