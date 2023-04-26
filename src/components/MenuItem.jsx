import React, { useContext, useEffect} from 'react'
import AOS from 'aos';
import { ShopContext } from '../Context/Shop-Context'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import '../assets/styles/Menu.css'

export default function MenuItem(props) {

  const { id, image, name, price, discription } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='menuItem' data-aos="zoom-in">
      <div className='coverImageItem' style={{ backgroundImage: `url(${image})` }}></div>
      <Link className='productLink' to={`/product/${id}`}>
        <h1 className='titleItem'> {name} </h1>
        <p className='discriptionItem'> {discription} </p>
      </Link>
      <div className='itemPriceCart'>
        <button className='order_btn' onClick={() => addToCart(id)}>Add to Cart {cartItemAmount > 0 && <> (<b className='boldCount'>{cartItemAmount}</b>) </>}</button>
        <p className='priceItem'>💲{price} </p>
      </div>
    </div>
  )
}
