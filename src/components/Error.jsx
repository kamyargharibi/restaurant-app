import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PeperoniPizza from '../assets/images/pepperoni.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Error.css'

export default function Error() {

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, [])

  return (
    <>
        <div className="error404">
            <div className="errortop" style={{ backgroundImage: `url(${PeperoniPizza})` }}>s</div>
            <div className='error' data-aos="zoom-in-up">
                <h1>404 Not Found</h1>
                <Link className='errorlink' to='/'>Back to Home Page</Link>
            </div>
        </div>
    </>
  )
}
