import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Peyment.css'

export default function Peyment() {

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
  }, [])

  return (
    <div className='peyment'>
        <h2 className='paymeny_h2' data-aos="fade-left"
     data-aos-offset="700"
     data-aos-easing="ease-in-sine">Payment was successful</h2>
        <h1 data-aos="fade-right"
     data-aos-offset="600"
     data-aos-easing="ease-in-sine">🍕 Enjoy your foods 😍</h1>
    </div>
  )
}
