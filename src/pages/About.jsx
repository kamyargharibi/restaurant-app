import React, { useEffect } from 'react'
import MultiplePizzas from '../assets/images/multiplePizzas.jpeg'
import { Fade } from "react-awesome-reveal";
import '../assets/styles/About.css'

export default function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
        <div className='aboutBottom'>
            <Fade>
              <h1>ABOUT US</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium cupiditate vero iste repellat quod, animi ea qui sed laboriosam in harum incidunt sint esse voluptas assumenda porro odio quidem! Atque, a porro accusamus voluptatem fuga at dolorum dolore quaerat autem sapiente? Totam officia unde facere dolores perferendis doloremque fuga fugit nobis dolorem cupiditate commodi architecto inventore molestias culpa, eos, eveniet accusamus sapiente quod numquam nesciunt? Magni maiores beatae ullam veritatis saepe magnam temporibus similique tempore nesciunt excepturi amet porro dolor fugiat vel adipisci dolorem, sequi odio aspernatur error eligendi pariatur inventore labore. Facilis ipsam soluta magni officia maiores minima nam.</p>
            </Fade>
        </div>
    </div>
  )
}
