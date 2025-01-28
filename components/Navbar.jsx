'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'

const Navbar = () => {

  const sidemenuRef = useRef();
  const openMenu = () => {  
    sidemenuRef.current.style.transform = 'translateX(-16rem)';
  }
  const closeMenu = () => {  
    sidemenuRef.current.style.transform = 'translateX(16rem)';
  }
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
      <Image src={assets.header_bg_color} alt='background' className='w-full' />
    </div>
      {/*-----------------Logo-----------------*/}
      <nav className='w-full fixed px-5 lg:px:8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href="#top">
            {/* <Image alt= 'logo' src={assets.logo} className='w-28 cursor-pointer mr-14'/> */}
            <h1 className='text-2xl font-outfit text-black w-28 cursor-pointer mr-14 '>Santiago<span className='text-red-600'>Quiroz</span></h1>
        </a>
        {/*-----------------Secciones-----------------*/}
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-md bg-opacity-60'>
            <li><a className='font-Ovo' href="#top">Home</a></li>
            <li><a className='font-Ovo' href="#about">About</a></li>
            <li><a className='font-Ovo' href="services">Services</a></li>
            <li><a className='font-Ovo' href="#work">My Work</a></li>
            <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>

        {/*-----------------Botones-----------------*/}
        <div className='flex items-center gap-4'> 
            <button>
              <Image src={assets.moon_icon} alt='moon-icon' className='w-6' />
            </button>
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image alt='arrow' src={assets.arrow_icon} className='w-3' /></a>
            <button className='block md:hidden ml-3'>
              <Image src={assets.menu_black} alt='menu-black' className='w-6' onClick={openMenu}/>
            </button>
        </div>

        {/*-----------------Mobile Menu-----------------*/}
        <ul ref={sidemenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
            <div className='absolute top-6 right-6' onClick={closeMenu}>
              <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
            </div>
            <li><a className='font-Ovo' href="#top" onClick={closeMenu}>Home</a></li>
            <li><a className='font-Ovo' href="#about" onClick={closeMenu}>About</a></li>
            <li><a className='font-Ovo' href="services" onClick={closeMenu}>Services</a></li>
            <li><a className='font-Ovo' href="#work" onClick={closeMenu}>My Work</a></li>
            <li><a className='font-Ovo' href="#contact" onClick={closeMenu}>Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar