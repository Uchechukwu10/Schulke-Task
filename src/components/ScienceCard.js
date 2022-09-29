import React from 'react'

const ScienceCard = (props) => {
  return (
    <div className='science-card flex flex-col mx-5 my-5'>
      <div><img src={props.image} alt={props.title} className='w-full'/></div>
      <div className='flex flex-col py-5 mx-5'>
        <div className='science-tag w-fit px-2'>{props.tag}</div>
        <h1 className='font-bold text-xl py-4'>{props.title}</h1>
        <p className='py-2'>{props.desc}</p>
        <div className='flex justify-between py-4'>
          <span>{props.time} mins ago</span>
          <a href='#' className='text-sky-500'>Read More</a>
        </div>
      </div>
    </div>
  )
}

export default ScienceCard