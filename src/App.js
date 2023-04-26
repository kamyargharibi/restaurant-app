import React from 'react'
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './components/Login'
import Register from './components/Register'
import Error from './components/Error';
import Peyment from './components/Peyment';
import { Product } from './components/Product';
import ShopContextProvider from './Context/Shop-Context';
import './App.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className='Apps'>
          <ShopContextProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/peyment' element={<Peyment />} />
              <Route path='product/:productId' element={<Product />} />
              <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
          </ShopContextProvider>
        </div>
      </BrowserRouter>
    </>
  )
}
