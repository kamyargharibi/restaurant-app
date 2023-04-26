import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import EmptyCartShop from '../components/EmptyCartShop'
import { MenuList } from '../data/MenuList'
import { ShopContext } from '../Context/Shop-Context'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Cart.css'

export default function Cart(props) {

    const {id} = props;

    const { cartItems, getTotalCartAmount, getTotalLastAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const [lastAmount, setLastAmount] = useState(getTotalLastAmount())

    const handlePayment = () => {
        if (cartItems(id) > 0) {
            setLastAmount(0)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init();
    }, [])
    
    
  return (
    <>
        <div className='cart'>
            <div className="cartTitle">
                <h1  data-aos="fade-right">Order</h1>
            </div>
            <div className="cartitems" data-aos="zoom-in-up">
                {MenuList.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            {totalAmount > 0 ? (<div className="checkout" data-aos="zoom-in">
                <div className="checkoutItems">
                    <p>Tax : <b>💲0</b></p>
                    <p>Delivery : <b>💲0</b></p>
                    <p>Subtotal : <b>💲{totalAmount}</b></p>
                </div>
                <div className="linkOrder">
                    <Link className='menuOrderBtn' to='/menu'>📃Back to Menu</Link>
                    <Link className='paymentBtn'  onClick={handlePayment} to='/peyment'>💵Payment</Link>
                </div>
            </div>) : <EmptyCartShop />}
        </div>
    </>
  )
}
