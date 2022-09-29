import React from 'react';
import atom from '../images/Atom.png';
import bulb from '../images/Bulb.png';
import flask from '../images/Flask.png';
import molecules from '../images/Molecules.png';
import logo from '../images/Schulke-logo.png';

const Banner = () => {
  const createDots = (num) => {
      let dots = [];
      for (let i=1; i<=num; i++) {
        dots.push(<span className='dot'></span>)
      }
      
      return dots;
  }
  return (
    <section className='banner flex flex-col items-center justify-center py-16 px-20 relative'>
      <div className='welcome-text w-1/2 flex flex-col items-center justify-center mt-20 mb-24'>
          <h1 className='font-bold py-2 my-4 px-20 text-center leading-10'>Acquire and Apply to Achieve</h1>
          <p className='font-bold text-base'>Lorem ipsum dolor sit amet, consectetur </p>
      </div>
      <div className='object flask flex items-center justify-center'><img src={flask} alt='flask'/></div>
      <div className='object molecules flex items-center justify-center'><img src={molecules} alt='molecules'/></div>
      <div className='object bulb flex items-center justify-center'><img src={bulb} alt='bulb'/></div>
      <div className='object atom flex items-center justify-center'><img src={atom} alt='atom'/></div>
      <div className='absolute w-24 log-small'><img src={logo} alt='logo'/></div>
      <div className='absolute w-56 log-medium'><img src={logo} alt='logo'/></div>
      <div className='absolute w-64 log-big'><img src={logo} alt='logo'/></div>
      <div className='absolute dot-design-1 grid grid-cols-3 flex justify-center items-center gap-x-7 gap-y-4'>
        {createDots(18)}
      </div>
      <div className='absolute dot-design-2 grid grid-rows-6 grid-flow-col flex justify-center items-center gap-x-7 gap-y-4'>
        {createDots(22)}
      </div>
    </section>
  )
}

export default Banner