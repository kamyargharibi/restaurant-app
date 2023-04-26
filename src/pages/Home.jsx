import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/images/pizza.jpeg'
import '../assets/styles/Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
  }, [])

  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='headerContainer' data-aos="fade-right">
        <h1>Pizza Hot</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to='/menu'>
          <button className='orderMenuBtn'>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}
