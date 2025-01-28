import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='profile-image' className='rounded-full w-32' />
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Santiago Quiroz <Image src={assets.hand_icon} alt='hand-icon' className='w-6' /></h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Web and mobile developer based in Portugal.</h1>
      <p className='max-w-2xl mx-auto font-Ovo'>
        I am a web and mobile front-end developer from Argentina width 3 years of experience in software development. I am passionate about creating beautiful and functional websites and applications that help people achieve their goals.
      </p>
      {/*-----------------Botones-----------------*/}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-8'>
        <a href="#contact" className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'>contact me <Image src={assets.right_arrow_white} alt='rignt-arrow' className='w-4' /></a>
        <a href="/cv-dev-en.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>download CV <Image src={assets.download_icon} alt='download' className='w-4' /></a>
      </div>
    </div>
  )
}

export default Header
