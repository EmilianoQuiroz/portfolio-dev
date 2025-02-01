import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full min-h-screen flex items-center justify-center px-[12%] py-10 scroll-mt-20'>
        <div className='w-full max-w-7xl'>
          <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
          <h2 className='text-center text-5xl font-Ovo'>My services</h2>
          <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
              I am a frontend developer with 3 years of experience in React and React Native. I have several full-stack projects and mobile applications published in the PlayStore.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
            {serviceData.map(({icon, title, description, link}, index) =>(
              <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                <Image src={icon} alt='icon' className='w-10' />
                <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5'>
                  {description}
                </p>
                <a href={link} className='flex items-center mt-5 gap-2 text-sm'>
                  Read more <Image alt='read-more' src={assets.right_arrow} className='w-4' />
                </a>
              </div>
            ))}
          </div>
        </div>
      <div>

      </div>
    </div>
  )
}

export default Services