import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {MenuList} from '../data/MenuList';
import { ShopContext } from '../Context/Shop-Context';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/styles/Product.css';
import ProductComments from './ProductComments';

export const Product = () => {

    const {productId} = useParams();
    const product = MenuList.find((product) => product.id == productId);
    const { id, image, name, price, discription } = product;

    const { addToCart, cartItems, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    const cartItemAmount = cartItems[id]

    useEffect(() => {
      window.scrollTo(0, 0);
      AOS.init();
    },[])

  return (
    <div className="productDetail" data-aos="zoom-in">
      <div className="productTitlePage">
        <h2 className="product_Title">Product Detail</h2>
      </div>
      <div className="productInformation">
        <img src={image} alt={name} className="productImage" />
        <div className="productInfo">
          <h2 className="productTitle"> {name} </h2>
          <p className='productDiscription'> {discription} </p>
          <div className="add_Cart_Button">
            <div className="productCountBtn">
              {cartItemAmount > 0 ? 
              <div className="productCount">
                  <button className='productDisCountBtn' onClick={() => removeFromCart(id)}>-</button>
                  <input className='productCurrentCountBox' type="number" value={cartItemAmount} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                  <button className='productAddCountBbtn' onClick={() => addToCart(id)}>+</button>
              </div> :
              <button className='addToCart_Button' onClick={() => {addToCart(id)}}>Add to Cart</button>}
              <span className='productPrice'>💲{price}</span>
            </div>
            <div className="productCheckoutBox">
              <Link to='/menu'>
                <button className='productMenuBtn'>📃 Back to Menu</button>
              </Link>
              <Link to='/cart'>
                <button className='productCheckoutBtn'>🛒 Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ProductComments />
    </div>
  )
}
