import carousel1 from "../assets/carousel1.webp";
import carousel2 from "../assets/carousel2.webp";
import carousel3 from "../assets/carousel3.png";
import leftslide from "../assets/slide-left.png";
import rightslide from "../assets/slide-right.png";
import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    const newPosition = -index * 100;
    setTransformStyle({ transform: `translateX(${newPosition}%)` });
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + 3) % 3;
    showSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % 3;
    showSlide(newIndex);
  };

  const [transformStyle, setTransformStyle] = useState({});

  return (
    <div className="carousel-container1"><div className="container-fluid"><div className="row">
    <div className="col-lg-12 col-sm-1 col-md-8 ">
      <div className="carousel-wrapper1 " style={transformStyle}>
        <div className="carousel-item1"><img src={carousel1} alt="Slide 1" id="sld1" /></div>
        <div className="carousel-item1"><img src={carousel2} alt="Slide 2" id="sld2" /></div>
        <div className="carousel-item1"><img src={carousel3} alt="Slide 3" id="sld3" /></div>
      </div>
      <button className="carousel-btn prev-btn" onClick={prevSlide}><img src={leftslide} alt="" id="slide1" /></button>
      <button className="carousel-btn next-btn" onClick={nextSlide}><img src={rightslide} alt="" id="slide2" /></button>
    </div></div></div></div>
  );
};

export default Carousel;
