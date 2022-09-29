import React from 'react';
import logo from '../images/Schulke-text.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  return (
    <section className='footer'>
      <div className='details flex flex-row pl-20 pr-12 py-12'>
        <div className='logo flex flex-col w-4/12 px-10 mx-5'>
           <button href="#" className="flex flex-col py-4 pr-2">
                <img src={logo} alt="Logo" className="h-7 w-40 mr-2" />
                <span className='text-white text-xs font-semibold'>Knowledge Transfer</span>
            </button>
            <p className='text-white text-base pr-4 text-justify py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum do
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum do
            </p>
            <div className='flex py-5 gap-4'>
              <FaFacebookF fontSize='1.2rem'/>
              <FaTwitter fontSize='1.2rem'/>
              <FaLinkedinIn fontSize='1.2rem'/>
            </div>
        </div>
        <div className='quick-links flex flex-col px-16 mx-5'>
          <h1 className='text-xl font-bold py-5'>Quick Links</h1>
          <p className='text-sm py-2'>Home</p>
          <p className='text-sm py-2'>About</p>
          <p className='text-sm py-2'>Trainings</p>
          <p className='text-sm py-2'>Contact</p>
        </div>
        <div className='topics flex flex-col px-16 mx-5'>
          <h1 className='text-xl font-bold py-5'>Topics</h1>
          <p className='text-sm py-2'>Blanket Topics</p>
          <p className='text-sm py-2'>Country Topics</p>
          <p className='text-sm py-2'>Product Topics</p>
        </div>
        <div className='important-links flex flex-col pl-16 pr-6 mx-5'>
          <h1 className='text-xl font-bold py-5'>Important Links</h1>
          <p className='text-sm py-2'>Privacy Policy</p>
          <p className='text-sm py-2'>Terms and Conditions</p>
          <p className='text-sm py-2'>Disclaimer</p>
          <p className='text-sm py-2'>Sitemap</p>
        </div>
      </div>
      <div className='copyright flex items-center justify-center py-2'>
        <span className='text-sm py-2 text-white'>&copy; Copyright 2022 Schulke</span>
      </div>
    </section>
  )
}

export default Footer