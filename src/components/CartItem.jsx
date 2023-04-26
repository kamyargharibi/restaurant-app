import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shop-Context'


export default function CartItem(props) {

    const { id, image, name, price } = props.data;
    const { addToCart, cartItems, removeFromCart, updateCartItemCount } = useContext(ShopContext);


  return (
    <>
        <div className='cart_item'>
            <img src={image} alt={name} />
            <p className='title'>{name}</p>
            <div className="countitem">
                <button className='discount_btn' onClick={() => removeFromCart(id)}>-</button>
                <input type="number" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button className='addcount_btn' onClick={() => addToCart(id)}>+</button>
            </div>
            <p>💲{price}</p>
        </div>
    </>
  )
}
