import React, { createContext, useState } from 'react'
import { MenuList } from '../data/MenuList';

export const ShopContext = createContext(null);

// Default Current Value
export const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < MenuList.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

export default function ShopContextProvider(props) {

    // Global State
    const [cartItems, setCartItems] = useState(getDefaultCart())

    // Get Total Price For Subtotal
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = MenuList.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }

    // Get Current Amount Item For Navbar Icon Cart Shop
    const getCurrentCartItem = () => {
        let currentAmount = 0;
        for (const id in cartItems) {
            if (cartItems[id] > 0) {
                currentAmount += cartItems[id]
            }
        }
        return currentAmount;
    }

    const getTotalLastAmount = () => {
        let totalLastAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalLastAmount += cartItems[item] * 0
            }
        }
        return totalLastAmount;
    }

    // Add Item To Cart Shop
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    };

    // Remove Item From Cart Shop
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };

    // Update Current Item Value ( Input ) 
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    };

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, getCurrentCartItem, getTotalLastAmount }

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
