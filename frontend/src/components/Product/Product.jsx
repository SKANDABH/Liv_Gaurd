import React, { useEffect } from 'react';
import './Product.css';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import $ from 'jquery';
// import "slick-carousel";
import { useState } from 'react';
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
const Product = () => {

  const [userInfo, setUserInfo] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const [showForm, setShowForm] = useState(false);

  const placeOrder = async (productId) => {setShowForm(true);
    // Check if user information is complete before placing the order
    if (!userInfo.name || !userInfo.phone || !userInfo.address) {
      alert('Please fill in all the required fields end of the page');
      return;
    }
  }
  // useEffect(() => {
  //   $('#containerSlider').slick({
  //     dots: true,
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //   });
  // }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pcontainer">
  {/* <h1>Our Products</h1> */}
<br /><br />
  <div className="categories">
    <a href="#inverters" className="category">Inverters</a>
    <a href="#batteries" className="category">Batteries</a>
    <a href="#solar" className="category">Solar</a>
  </div>

  <div className="products">
  
   
    <div className="product-card" id="inverters">
        <div className="product-image">
          <img src={img1} alt="Inverter 1"/>
        </div>
        <div className="product-details">
          <h2>LGS900</h2>
          <p className="description">Sine wave Inverter | 900 VA Capacity | 3 years Warranty</p>
          <p className="price">$199.99</p>
          <a onClick={() => scrollToSection("product1")} className="explore-btn">Explore</a>
        </div>
      </div>
      <div className="product-card" id="inverters">
        <div className="product-image">
          <img src={img2} alt="Inverter 2"/>
        </div>
        <div className="product-details">
          <h2>LGS1100</h2>
          <p className="description">Sine wave Inverter | 1100 VA Capacity | 3 years Warranty</p>
          <p className="price">$199.99</p>
          <a onClick={() => scrollToSection("product2")} className="explore-btn">Explore</a>

        </div>
      </div>
      <div className="product-card" id="inverters">
        <div className="product-image">
          <img src={img3} alt="Inverter 3"/>
        </div>
        <div className="product-details">
          <h2>LGS1600</h2>
          <p className="description">Sine wave Inverter | 1600 VA Capacity | 3 years Warranty</p>
          <p className="price">$199.99</p>
          <a onClick={() => scrollToSection("product3")} className="explore-btn">Explore</a>

        </div>
      </div>
      <div className="product-card" id="inverters">
        <div className="product-image">
          <img src={img4} alt="Inverter 4"/>
        </div>
        <div className="product-details">
          <h2>LG1000I</h2>
          <p className="description">Square wave Inverter | 1000 VA Capacity | 3 years Warranty</p>
          <p className="price">$199.99</p>
          <a onClick={() => scrollToSection("product4")} className="explore-btn">Explore</a>

        </div>
      </div>
      
     
   
    <div className="product-card" id="batteries">
        <div className="product-image">
          <img src={img5} alt=" "/>
        </div>
        <div className="product-details">
          <h2>IT1048ST</h2>
          <p className="description">Inverter Battery | 100Ah Capacity | 48 Months Warranty</p>
          <p className="price">$199.99</p>
          <a href="#" className="explore-btn">Explore</a>
        </div>
      </div>
      <div className="product-card" id="batteries ">
        <div className="product-image">
          <img src={img6} alt=""/>
        </div>
        <div className="product-details">
          <h2>IT1642TT</h2>
          <p className="description">Inverter Battery | 160Ah Capacity | 42 Months Warranty</p>
          <p className="price">$199.99</p>
          <a href="#" className="explore-btn">Explore</a>
        </div>
      </div>
      <div className="product-card" id="batteries ">
        <div className="product-image">
          <img src={img7} alt=""/>
        </div>
        <div className="product-details">
          <h2>IT2048TT</h2>
          <p className="description">Inverter Battery | 200Ah Capacity | 48 Months Warranty</p>
          <p className="price">$199.99</p>
          <a href="#" className="explore-btn">Explore</a>
        </div>
      </div>
      <div className="product-card" id="batteries ">
        <div className="product-image">
          <img src={img8}alt=""/>
        </div>
        <div className="product-details">
          <h2>IT2360TT</h2>
          <p className="description">Inverter Battery | 230Ah Capacity | 60 Months Warranty</p>
          <p className="price">$199.99</p>
          <a href="#" className="explore-btn">Explore</a>
        </div>
      </div>

   
    <div className="product-card" id="solar">
        <div className="product-image">
          <img src={img9}alt=""/>
        </div>
        <div className="product-details">
          <h2>LSOG3048M</h2>
          <p className="description">MPPT Off Grid Inverter | 5 Years Warranty | 48V Nominal Voltage | 3KVA Rating</p>
          <p className="price">$199.99</p>
          <a href="#" className="explore-btn">Explore</a>
        </div>
      </div>
      <div className="product-card" id="solar">
        <div className="product-image">
          <img src={img10} alt=""/>
        </div>
        <div className="product-details">
          <h2>LSOG5048M</h2>
          <p className="description">MPPT Off Grid Inverter | 5 Years Warranty | 48V Nominal Voltage | 5KVA Rating</p>
          <p className="price">$199.99</p>
          <a href="#" className="explore-btn">Explore</a>
        </div>
      </div>
      <div className="product-card" id="solar">
    <div className="product-image">
        <img src={img11} alt=""/>
    </div>
    <div className="product-details">
        <h2>LS16560TT</h2>
        <p className="description">Solar Battery | 60 Months Warranty | 165Ah Capacity</p>
        <p className="price">$199.99</p>
        <a href="#" className="explore-btn">Explore</a>
    </div>
</div>

      <div className="product-card" id="solar">
        <div className="product-image">
          <img src={img12} alt=""/>
        </div>
        <div className="product-details">
          <h2>LGV24VS400WM</h2>
          <p className="description">Mono-Perc Solar Panel | 24V Capacity | 400 Wp Power</p>
          <p className="price">$199.99</p>
          <a href="#" className="explore-btn">Explore</a>
        </div>
      </div>

</div>
<div className="z-scroll-container">
  <section id="product1" className="full-height-width about-z-scroll-info"style={{height:"45rem"}}>
  <div className="container bootdey">
        <section className="panel">
            <div className="panel-heading">
                {/* <h1 className="panel-title">Product Details</h1> */}
            </div>
            <div className="panel-body">
                <div className="pro-img-details">
                    <img src={img1} alt=""/>
                </div>
                <div className="product-detailss">
                    <h2 className="pro-d-title"><strong>LGS1100</strong></h2>
                    <p className="product-description">
                    <h3>Livguard i-verter pro Sine Wave inverter 1100  with 3-Year Warranty </h3>(Suitable Inverter for small offices, homes, and small shops)
                      Bring home the power of unlimited energy with our Inverter. <br /> Equipped with the best-in-class warranty and Smart AI Charging to offer a smooth flow of energy to you
                    </p>
                    <div className="product_meta">
                        <strong>Features:</strong> 
                        <p>
                        Supports All Battery Types<br /> Backed with Smart Artificial Intelligent Charging<br /> 
                          Fault Detection for Overcharging, Overload & Short Circuit etc. <br />Premium New Age Design with LED Display for indications of current status of your inverter</p>
                        <strong>Specifications</strong>
                        <p>Model Number:i-verter pro <br />
                        Warranty :3 Years <br />
                       
                        Package Contents:Inverter and User Manual <br />
                        
                        Rating:1100(1.1kv)
                        
                        </p>
                        
                    </div>
                    <div className="m-bot15">
                        <strong>Price :</strong>
                        <span className="amount-old">$544</span>
                        <span className="pro-price">$300.00</span>
                    </div>
                    {/* <div className="form-group">
                        <label for="quantity">Quantity</label>
                        <input type="number" id="quantity" placeholder="1" className="quantity"/>
                    </div> */}
                    <p>
                        <button className="btn btn-danger" type="button">
                            <i className="fa fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button className="btn btn-danger mx-2" type="button">
                            <i className="fa fa-shopping-cart"></i> Buy Now
                        </button>
                    </p>
                </div>
            </div>
        </section>

      
    </div>
  </section>
  
   <section id="product2" className="full-height-width third-z-scroll-info"style={{height:"45rem"}}>
   <div className="container bootdey">
        <section className="panel">
            <div className="panel-heading">
                {/* <h1 className="panel-title">Product Details</h1> */}
            </div>
            <div className="panel-body">
                <div className="pro-img-details">
                    <img src={img1} alt=""/>
                </div>
                <div className="product-detailss">
                    <h2 className="pro-d-title"><strong>LGS1100</strong></h2>
                    <p className="product-description">
                    <h3>Livguard i-verter pro Sine Wave inverter 1100  with 3-Year Warranty </h3>(Suitable Inverter for small offices, homes, and small shops)
                      Bring home the power of unlimited energy with our Inverter. <br /> Equipped with the best-in-class warranty and Smart AI Charging to offer a smooth flow of energy to you
                    </p>
                    <div className="product_meta">
                        <strong>Features:</strong> 
                        <p>
                        Supports All Battery Types<br /> Backed with Smart Artificial Intelligent Charging<br /> 
                          Fault Detection for Overcharging, Overload & Short Circuit etc. <br />Premium New Age Design with LED Display for indications of current status of your inverter</p>
                        <strong>Specifications</strong>
                        <p>Model Number:i-verter pro <br />
                        Warranty :3 Years <br />
                       
                        Package Contents:Inverter and User Manual <br />
                        
                        Rating:1100(1.1kv)
                        
                        </p>
                        
                    </div>
                    <div className="m-bot15">
                        <strong>Price :</strong>
                        <span className="amount-old">$544</span>
                        <span className="pro-price">$300.00</span>
                    </div>
                    {/* <div className="form-group">
                        <label for="quantity">Quantity</label>
                        <input type="number" id="quantity" placeholder="1" className="quantity"/>
                    </div> */}
                    <p>
                        <button className="btn btn-danger" type="button">
                            <i className="fa fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button className="btn btn-danger mx-2" type="button"onClick={placeOrder}>
                            <i className="fa fa-shopping-cart"></i> Buy Now
                        </button>
                    </p>
                </div>
            </div>
        </section>

      
    </div>
  </section>
    <section id="product3" className="full-height-width fourth-z-scroll-info" style={{height:"45rem"}}>
    <div className="container bootdey">
        <section className="panel">
            <div className="panel-heading">
                {/* <h1 className="panel-title">Product Details</h1> */}
            </div>
            <div className="panel-body">
                <div className="pro-img-details">
                    <img src={img1} alt=""/>
                </div>
                <div className="product-detailss">
                    <h2 className="pro-d-title"><strong>LGS1100</strong></h2>
                    <p className="product-description">
                    <h3>Livguard i-verter pro Sine Wave inverter 1100  with 3-Year Warranty </h3>(Suitable Inverter for small offices, homes, and small shops)
                      Bring home the power of unlimited energy with our Inverter. <br /> Equipped with the best-in-class warranty and Smart AI Charging to offer a smooth flow of energy to you
                    </p>
                    <div className="product_meta">
                        <strong>Features:</strong> 
                        <p>
                        Supports All Battery Types<br /> Backed with Smart Artificial Intelligent Charging<br /> 
                          Fault Detection for Overcharging, Overload & Short Circuit etc. <br />Premium New Age Design with LED Display for indications of current status of your inverter</p>
                        <strong>Specifications</strong>
                        <p>Model Number:i-verter pro <br />
                        Warranty :3 Years <br />
                       
                        Package Contents:Inverter and User Manual <br />
                        
                        Rating:1100(1.1kv)
                        
                        </p>
                        
                    </div>
                    <div className="m-bot15">
                        <strong>Price :</strong>
                        <span className="amount-old">$544</span>
                        <span className="pro-price">$300.00</span>
                    </div>
                    {/* <div className="form-group">
                        <label for="quantity">Quantity</label>
                        <input type="number" id="quantity" placeholder="1" className="quantity"/>
                    </div> */}
                    <p>
                        <button className="btn btn-danger" type="button">
                            <i className="fa fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button className="btn btn-danger mx-2" type="button" onClick={placeOrder}>
                            <i className="fa fa-shopping-cart"></i> Buy Now
                        </button>
                    </p>
                </div>
            </div>
        </section>

      
    </div>
    </section>
    <section id="product4" className="full-height-width about-z-scroll-info"style={{height:"45rem"}}>
    <div className="container bootdey">
        <section className="panel">
            <div className="panel-heading">
                {/* <h1 className="panel-title">Product Details</h1> */}
            </div>
            <div className="panel-body">
                <div className="pro-img-details">
                    <img src={img1} alt=""/>
                </div>
                <div className="product-detailss">
                    <h2 className="pro-d-title"><strong>LGS1100</strong></h2>
                    <p className="product-description">
                    <h3>Livguard i-verter pro Sine Wave inverter 1100  with 3-Year Warranty </h3>(Suitable Inverter for small offices, homes, and small shops)
                      Bring home the power of unlimited energy with our Inverter. <br /> Equipped with the best-in-class warranty and Smart AI Charging to offer a smooth flow of energy to you
                    </p>
                    <div className="product_meta">
                        <strong>Features:</strong> 
                        <p>
                        Supports All Battery Types<br /> Backed with Smart Artificial Intelligent Charging<br /> 
                          Fault Detection for Overcharging, Overload & Short Circuit etc. <br />Premium New Age Design with LED Display for indications of current status of your inverter</p>
                        <strong>Specifications</strong>
                        <p>Model Number:i-verter pro <br />
                        Warranty :3 Years <br />
                       
                        Package Contents:Inverter and User Manual <br />
                        
                        Rating:1100(1.1kv)
                        
                        </p>
                        
                    </div>
                    <div className="m-bot15">
                        <strong>Price :</strong>
                        <span className="amount-old">$544</span>
                        <span className="pro-price">$300.00</span>
                    </div>
                    {/* <div className="form-group">
                        <label for="quantity">Quantity</label>
                        <input type="number" id="quantity" placeholder="1" className="quantity"/>
                    </div> */}
                    <p>
                        <button className="btn btn-danger" type="button">
                            <i className="fa fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button className="btn btn-danger mx-2" type="button" onClick={placeOrder}>
                            <i className="fa fa-shopping-cart"></i> Buy Now
                        </button>
                    </p>
                </div>
            </div>
        </section>

      
    </div>
  </section>
   <section id="" className="full-height-width third-z-scroll-info">
  </section>
    <section id="" className="full-height-width fourth-z-scroll-info">

    </section>
    <section id="" className="full-height-width about-z-scroll-info">

  </section>
   <section id="" className="full-height-width third-z-scroll-info">
  </section>
    <section id="" className="full-height-width fourth-z-scroll-info">

    </section>
  
    <div>{showForm && (
        <div className="order-form">
          <h2>Enter Your Details</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                value={userInfo.phone}
                onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                value={userInfo.address}
                onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
              />
            </label>
            <button type="button" onClick={() => placeOrder('productId')}>
              Place Order
            </button>
          </form>
        </div>
      )}</div>
</div></div>
  );}
                  
  export default Product;