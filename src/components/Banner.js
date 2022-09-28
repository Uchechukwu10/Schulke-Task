import React from 'react';
import atom from '../images/Atom.png';
import bulb from '../images/Bulb.png';
import flask from '../images/Flask.png';
import molecules from '../images/Molecules.png';
import logo from '../images/Schulke-logo.png';

const Banner = () => {
  return (
    <section className='banner flex flex-col items-center justify-center py-16 px-20 relative'>
      <div className='welcome-text w-1/2 flex flex-col items-center justify-center mt-20 mb-24'>
          <h1 className='font-bold py-2 my-4 px-20 text-center leading-10'>Acquire and Apply to Achieve</h1>
          <p className='font-bold text-base'>Lorem ipsum dolor sit amet, consectetur </p>
      </div>
      <img src={molecules} alt='molecules'/>
      <img src={flask} alt='flask'/>
      <img src={bulb} alt='bulb'/>
      <img src={atom} alt='atom'/>
      <img src={logo} alt='logo'/>
      <img src={logo} alt='logo'/>
    </section>
  )
}

export default Banner