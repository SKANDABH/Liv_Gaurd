import React, { useEffect } from 'react';
import './Productl.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import $ from 'jquery';
import "slick-carousel";
import img1 from '../assets/LGS900VA.webp';
import img2 from '../assets/LGS1100VA.webp';
import img3 from '../assets/LGS1500VA.webp';
import img4 from '../assets/LG1000I.webp';
import img5 from '../assets/100AH BTRY(48).webp';
import img6 from '../assets/1642TT(42).webp';
import img7 from '../assets/2060TT(48).webp';
import img8 from '../assets/2360TT(60).webp';
import img9 from '../assets/3048MSOLAR.webp';
import img10 from '../assets/5048MSOLARUPS.webp';
import img11 from '../assets/LS16560TT.webp';
import img12 from '../assets/400WMSOLAR.webp';
const Productsl = () => {

  useEffect(() => {
    $('#containerSlider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div class="pcontainer">
  <h1>Our Products</h1>

  <div class="categories">
    <a href="#inverters" class="category">Inverters</a>
    <a href="#batteries" class="category">Batteries</a>
    <a href="#solar" class="category">Solar</a>
  </div>

  <div class="products">
   
    <div class="product-card" id="inverters">
        <div class="product-image">
          <img src={img1} alt="Inverter 1"/>
        </div>
        <div class="product-details">
          <h2>LGS900</h2>
          <p class="description">Sine wave Inverter | 900 VA Capacity | 3 years Warranty</p>
          <p class="price">$199.99</p>
          <a href="#" class="explore-btn">Explore</a>
        </div>
      </div>
      <div class="product-card" id="inverters">
        <div class="product-image">
          <img src={img2} alt="Inverter 2"/>
        </div>
        <div class="product-details">
          <h2>LGS1100</h2>
          <p class="description">Sine wave Inverter | 1100 VA Capacity | 3 years Warranty</p>
          <p class="price">$199.99</p>
          <a href="#" class="explore-btn">Explore</a>
        </div>
      </div>
      <div class="product-card" id="inverters">
        <div class="product-image">
          <img src={img3} alt="Inverter 3"/>
        </div>
        <div class="product-details">
          <h2>LGS1600</h2>
          <p class="description">Sine wave Inverter | 1600 VA Capacity | 3 years Warranty</p>
          <p class="price">$199.99</p>
          <a href="#" class="explore-btn">Explore</a>
        </div>
      </div>
      <div class="product-card" id="inverters">
        <div class="product-image">
          <img src={img4} alt="Inverter 4"/>
        </div>
        <div class="product-details">
          <h2>LG1000I</h2>
          <p class="description">Square wave Inverter | 1000 VA Capacity | 3 years Warranty</p>
          <p class="price">$199.99</p>
          <a href="#" class="explore-btn">Explore</a>
        </div>
      </div>
      
     
   
    <div class="product-card" id="batteries">
        <div class="product-image">
          <img src={img5} alt=" "/>
        </div>
        <div class="product-details">
          <h2>IT1048ST</h2>
          <p class="description">Inverter Battery | 100Ah Capacity | 48 Months Warranty</p>
          <p class="price">$199.99</p>
          <a href="#" class="explore-btn">Explore</a>
        </div>
      </div>
      <div class="product-card" id="batteries ">
        <div class="product-image">
          <img src={img6} alt=""/>
        </div>
        <div class="product-details">
          <h2>IT1642TT</h2>
          <p class="description">Inverter Battery | 160Ah Capacity | 42 Months Warranty</p>
          <p class="price">$199.99</p>
          <a href="#" class="explore-btn">Explore</a>
        </div>
      </div>
      <div class="product-card" id="batteries ">
        <div class="product-image">
          <img src={img7} alt=""/>
        </div>
        <div class="product-details">
          <h2>IT2048TT</h2>
          <p class="description">Inverter Battery | 200Ah Capacity | 48 Months Warranty</p>
          <p class="price">$199.99</p>
          <a href="#" class="explore-btn">Explore</a>
        </div>
      </div>
      <div class="product-card" id="batteries ">
        <div class="product-image">
          <img src={img8}alt=""/>
        </div>
        <div class="product-details">
          <h2>IT2360TT</h2>
          <p class="description">Inverter Battery | 230Ah Capacity | 60 Months Warranty</p>
          <p class="price">$199.99</p>
          <a href="#" class="explore-btn">Explore</a>
        </div>
      </div>

   
    <div class="product-card" id="solar">
        <div class="product-image">
          <img src={img9}alt=""/>
        </div>
        <div class="product-details">
          <h2>LSOG3048M</h2>
          <p class="description">MPPT Off Grid Inverter | 5 Years Warranty | 48V Nominal Voltage | 3KVA Rating</p>
          <p class="price">$199.99</p>
          <a href="#" class="explore-btn">Explore</a>
        </div>
      </div>
      <div class="product-card" id="solar">
        <div class="product-image">
          <img src={img10} alt=""/>
        </div>
        <div class="product-details">
          <h2>LSOG5048M</h2>
          <p class="description">MPPT Off Grid Inverter | 5 Years Warranty | 48V Nominal Voltage | 5KVA Rating</p>
          <p class="price">$199.99</p>
          <a href="#" class="explore-btn">Explore</a>
        </div>
      </div>
      <div class="product-card" id="solar">
    <div class="product-image">
        <img src={img11} alt=""/>
    </div>
    <div class="product-details">
        <h2>LS16560TT</h2>
        <p class="description">Solar Battery | 60 Months Warranty | 165Ah Capacity</p>
        <p class="price">$199.99</p>
        <a href="#" class="explore-btn">Explore</a>
    </div>
</div>

      <div class="product-card" id="solar">
        <div class="product-image">
          <img src={img12} alt=""/>
        </div>
        <div class="product-details">
          <h2>LGV24VS400WM</h2>
          <p class="description">Mono-Perc Solar Panel | 24V Capacity | 400 Wp Power</p>
          <p class="price">$199.99</p>
          <a href="#" class="explore-btn">Explore</a>
        </div>
      </div>

</div>
<div class="z-scroll-container">
  <section id="product1" class="full-height-width about-z-scroll-info">

  </section>
   <section id="product2" class="full-height-width third-z-scroll-info">
  </section>
    <section id="product3" class="full-height-width fourth-z-scroll-info">

    </section>
    <section id="" class="full-height-width about-z-scroll-info">

  </section>
   <section id="" class="full-height-width third-z-scroll-info">
  </section>
    <section id="" class="full-height-width fourth-z-scroll-info">

    </section>
    <section id="" class="full-height-width about-z-scroll-info">

  </section>
   <section id="" class="full-height-width third-z-scroll-info">
  </section>
    <section id="" class="full-height-width fourth-z-scroll-info">

    </section>
    
</div></div>
  );}
  

export default Productsl;
