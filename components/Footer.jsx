import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = (isDarkmode) => {
  return (
    <footer className='w-full bg-white dark:bg-darkTheme'>
      {/* Contenedor principal del footer */}
      <div className='mx-auto max-w-full px-[10%] py-8 flex flex-col items-center'>
        {/* Contenedor del logo y el correo */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-outfit text-black cursor-pointer mb-2 inline-block dark:text-white'>
            Santiago<span className='text-red-600'>Quiroz</span>
          </h1>
          <div className='flex items-center gap-2 mx-auto'>
            <Image src={isDarkmode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
            <span>santiagoquiroz.dev@gmail.com</span>
          </div>
        </div>

        {/* Contenedor del footer (derechos reservados y enlaces) */}
        <div className='w-full border-t border-gray-400 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between'>
          {/* Derechos reservados */}
          <p className='mb-4 sm:mb-0 text-center dark:text-white'>© 2025 Santiago Quiroz. All rights reserved.</p>

          {/* Enlaces */}
          <ul className='flex items-center gap-6 justify-center'>
            <li>
              <a target='_blank' href="https://github.com/EmilianoQuiroz" className='hover:text-red-600 transition-colors'>
                GitHub
              </a>
            </li>
            <li>
              <a target='_blank' href="https://www.linkedin.com/in/santiago-quiroz-dev/" className='hover:text-red-600 transition-colors'>
                LinkedIn
              </a>
            </li>
            <li>
              <a target='_blank' href="" className='hover:text-red-600 transition-colors'>
                Games
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;