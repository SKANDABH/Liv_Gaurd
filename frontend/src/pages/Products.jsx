import React from 'react'
import Product from '../components/Product/Product'
import Footer from '../components/footer/Footer';
import CarouselP from '../components/CarouselP/CarouselP';



const products = () => {
  return (
    <div>
      <CarouselP/>
      <br/><br/>
      <Product />
    <Footer/></div>
  )
}

export default products