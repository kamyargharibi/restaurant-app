import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function FilterButton({filter, button}) {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        AOS.init();
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    },[])

  return (
    <>
        <div className='filter_Button'  data-aos="zoom-in">
            {
                button.map((cat, i)=>{
                    return <button type="button" onClick={()=> filter(cat)} className='filterItemBtn'>{cat}</button>
                })
            }
        </div>
        <motion.div ref={carousel} className='filter_Mobile_Button'  data-aos="zoom-in">
            <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='filterMobileBox'>
                {
                    button.map((cat, i)=>{
                        return (
                            <motion.div className='filBtnItem'>
                                <button type="button" onClick={()=> filter(cat)} className='filterMobItemBtn'>{cat}</button>
                            </motion.div>
                        )    
                    })
                }
            </motion.div>
        </motion.div>
    </>
  )
}
