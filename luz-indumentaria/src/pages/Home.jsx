import React from 'react'
import { CartProvider } from './../Context/CartContext'
import HomePage from './HomePage'
const Home = () => {
  return (
    <div>
   <CartProvider>
    <HomePage/>
   </CartProvider>
   <br />
   <br />
   </div>
  )
}

export default Home