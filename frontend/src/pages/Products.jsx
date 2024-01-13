import React from 'react'
import Product from '../components/Product/Product'
import Footer from '../components/footer/Footer';
import Carousel from '../components/Carousel/Carousel';



const products = () => {
  return (
    <div>
      <Carousel/>
      <Product />
    <Footer/></div>
  )
}

export default products