import './App.css';
import { useRef, useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import ScienceCorner from './components/ScienceCorner';
import Footer from './components/Footer';
import {IoIosArrowUp} from 'react-icons/io';

function App() {
  const banner = useRef();
  const [scrolled, setScrolled] = useState(123)
  const scrollUp = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }
  const handleScroll = (event) => {
    // console.log('scrollTop: ', event.currentTarget.scrollTop);
    // console.log('offsetHeight: ', event.currentTarget.offsetHeight);
    const scroll = banner.current.getBoundingClientRect();
    setScrolled(scroll.top);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  return (
    <div onScroll={handleScroll} className='final'>
        <NavBar />
        <div ref={banner} onClick={handleScroll}><Banner /></div>
        <ScienceCorner />
        <Footer />
        <button className={scrolled < -240 ? 'scroll-up p-2' : 'invisible'} onClick={scrollUp}><IoIosArrowUp fontSize='1.3rem' color='white'/></button>
    </div>
  );
}

export default App;
