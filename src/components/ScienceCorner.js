import { React, useEffect, useState } from 'react';
import ScienceCard from './ScienceCard';
import covid1 from '../images/covid-1.png';
import covid2 from '../images/covid-2.png';
import covid3 from '../images/covid-3.png';

const ScienceCorner = () => {
  const card1 = {
    tag: 'COVID',
    title: 'COVID-19 FAQs',
    image: covid1,
    description: 'COVID-19, caused by the virus SARS-CoV-2 (severe acute respiratory syndrome coronavirus..',
    postedTime: 20
  }
  const card2 = {
    tag: 'COVID',
    title: 'Germs - know your enemy',
    image: covid2,
    description: 'Infectious diseases can be caused by many different germs. These infectious agents can ..',
    postedTime: 20
  }
  const card3 = {
    tag: 'CARDIOLOGY',
    title: '5 Myths About Inherited Cardiac..',
    image: covid3,
    description: 'Just as your genes define your outer appearance, they also influence your heart an...',
    postedTime: 20
  }

  return (
    <section className='flex flex-row gap-1 justify-center items-center relative'>
            <ScienceCard tag={card1.tag} title={card1.title} desc={card1.description} image={card1.image} time={card1.postedTime}/>
            <ScienceCard tag={card2.tag} title={card2.title} desc={card2.description} image={card2.image} time={card2.postedTime}/>
            <ScienceCard tag={card3.tag} title={card3.title} desc={card3.description} image={card3.image} time={card3.postedTime}/>
    </section>
  )
}

export default ScienceCorner