import React, { useContext, useState } from 'react'
import Logo from '../assets/images/pizzaLogo.png'
import { Link, NavLink } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { motion } from 'framer-motion';
import { ShopContext } from '../Context/Shop-Context'
import '../assets/styles/Navbar.css'


export default function Navbar() {

    const { getCurrentCartItem } = useContext(ShopContext);

    const currentCartItem = getCurrentCartItem();

    const [openLinks, setOpenLinks] = useState(false);
    const [icon, setIcon] = useState(true);


    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
        setIcon(!icon);
    }

    const activeNavLinks = ({isActive}) => {
        return (
            {color: isActive && 'orange'}
        )
    }

  return (
    <div className='navbar'>
        <div className="navbarItems">
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <motion.div
                animate={{ rotate: [0, 200, 200, 0]}}
                transition={{ duration: 1 }}>
                    <Link to='/'><img src={Logo} alt='Logo' /></Link>
                </motion.div>
                <div className='hiddenLinks'>
                        <NavLink className='nav_links' to='/' style={activeNavLinks}><HomeIcon /> Home</NavLink>
                        <NavLink className='nav_links' to='/menu' style={activeNavLinks}><ReceiptLongIcon /> Menu</NavLink>
                        <NavLink className='nav_links' to='/about' style={activeNavLinks}><InfoIcon /> About</NavLink>
                        <NavLink className='nav_links' to='/contact' style={activeNavLinks}><ContactsIcon /> Contact us</NavLink>
                </div>
            </div>
            <div className='rightSide'>
                    <NavLink className='nav_links' to='/' style={activeNavLinks}>Home</NavLink>
                    <NavLink className='nav_links' to='/menu' style={activeNavLinks}>Menu</NavLink>
                    <NavLink className='nav_links' to='/about' style={activeNavLinks}>About</NavLink>
                    <NavLink className='nav_links' to='/contact' style={activeNavLinks}>Contact</NavLink>
            </div>
            <div className="navButtons">
                <div className='cart_button'>
                    <button className='cart_btn'>
                        <NavLink className='cartLink_btn' to='/cart' style={activeNavLinks}><ShoppingCartIcon /></NavLink>
                        <span className={currentCartItem > 0 ? 'countCartShop' : ''}>{currentCartItem > 0 && currentCartItem}</span>
                    </button>
                </div>
                <div className="login_button">
                    <NavLink className='logReg_Btn' to='/login' style={activeNavLinks}><PersonIcon /></NavLink>
                </div>
                <div className="mobileMenu">
                    <button className='menuButton' onClick={toggleNavbar}>
                        {icon ? <ReorderIcon /> : <CloseIcon />}
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
