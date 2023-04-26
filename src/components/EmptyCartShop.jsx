import React, { useEffect } from 'react'
import CutePizza from '../assets/images/cutepizza.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/EmptyCartShop.css'
import { Link } from 'react-router-dom';

export default function EmptyCartShop() {

  useEffect(() => {
      AOS.init();
  }, [])

  return (
    <div className='emptyCartShop' data-aos="zoom-in-up">
        <img src={CutePizza} alt="Empty Cart Shop" />
        <h2 className='emptyitems'>Your Cart is Empty !</h2>
        <Link to='/menu' className='menuListBtn'>📃Menu List</Link>
    </div>
  )
}
