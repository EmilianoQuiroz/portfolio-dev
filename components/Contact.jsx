"use client"

import { assets } from '@/assets/assets';
import Image from 'next/image';
import { useState } from 'react';

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "36007eca-bc7e-4bf7-bab2-f2c65717aa3c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id='contact'
      className='w-full min-h-screen flex items-center justify-center px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
    >
      <div className='w-full max-w-4xl'> {/* Ajusté el ancho máximo para mejor consistencia */}
        <h4 className='text-center mb-2 text-lg font-Ovo'>Conect with me</h4>
        <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
          I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
        </p>

        {/* Formulario centrado y con inputs que ocupan el ancho completo */}
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
          <div className='grid grid-cols-1 gap-6 mt-10 mb-8'>
            <input
              type='text'
              placeholder='Enter your name'
              required
              className='w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
              name='name'
            />
            <input
              type='email'
              placeholder='Enter your email'
              required
              className='w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'
              name='email'
            />
          </div>
          <textarea
            rows='6'
            placeholder='Enter your message'
            required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'
            name='message'
          ></textarea>
          <button
            type='submit'
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'
          >
            Submit now <Image src={assets.right_arrow_white} alt='' className='w-4' />
          </button>
          <p className='mt-4 text-center'>{result}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;