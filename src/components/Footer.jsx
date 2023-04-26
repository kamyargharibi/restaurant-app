import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Zoom } from "react-awesome-reveal";
import { motion } from 'framer-motion';
import "../assets/styles/Footer.css"

export default function Footer() {
  return (
    <footer>
      <div className='footer'>
          <div className='socialMedia'>
            <div className="socialBigIcon">
              <motion.div whileHover={{ scale: 1.2 }} data-aos="fade-right">
                <span><InstagramIcon /></span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} data-aos="zoom-in">
                <span><TwitterIcon /></span> 
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} data-aos="zoom-in">
                <span><FacebookIcon /></span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} data-aos="fade-left">
                <span><LinkedInIcon /></span> 
              </motion.div>
            </div>
            <div className="socialSmallIcon">
              <motion.div whileHover={{ scale: 0.9 }} data-aos="zoom-in">
                <span><InstagramIcon /></span>
              </motion.div>
              <motion.div whileHover={{ scale: 0.9 }} data-aos="zoom-in">
                <span><TwitterIcon /></span> 
              </motion.div>
              <motion.div whileHover={{ scale: 0.9 }} data-aos="zoom-in">
                <span><FacebookIcon /></span>
              </motion.div>
              <motion.div whileHover={{ scale: 0.9 }} data-aos="zoom-in">
                <span><LinkedInIcon /></span> 
              </motion.div>
            </div>
          </div>
          <Zoom>
            <p>&copy; 2023 Kamyar Gharibi</p>
          </Zoom>
      </div>
    </footer>
  )
}
