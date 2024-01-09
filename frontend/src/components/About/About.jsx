import React from 'react'
import './About.css'
import imga from "../assets/background0.jpg"
import imgb from "../assets/vision.jpg"
import imgc from "../assets/mission.jpg"
import imgd from "../assets/values.jpg"
function About() {
  return (
  <div className='bd'>
    
        <div className="Acontainer">
            <div className="about-content">
                <h2 id="Ah2">Welcome to our website</h2>
                <p>Driven by innovation and an unwavering commitment to sustainability, Livguard continues to redefine the landscape of energy storage solutions. Offering an array of quality products including automotive batteries, inverters, and residential solar solutions, we're not just powering homes and businesses, but also supporting the world's shift to a cleaner future. Pioneering in our approach, we stand dedicated to deliver limitless energy, as we stride towards shaping a world where energy is accessible, efficient, and sustainable.</p>
                <p id="dots"></p>
                <p id="more" style={{display: 'none'}}>Our Mission<br/>
                    Livguard's mission is to provide cutting-edge energy solutions that are both reliable and sustainable. We aim to achieve this by continually innovating our products, fostering a culture of excellence, and ensuring customer satisfaction. Our goal is to contribute significantly to the global movement towards renewable and cleaner energy sources.</p>
                <button className="cta-button"  id="myBtn">Read More</button>
            </div>
            <div className="about-image">
                <img id="uploadedImage" src={imga} alt="Uploaded Image"/>
            </div>
        </div>
        <div className="cards">
           
            <div className="card">
                <img src={imgb} alt="Vision Image"/>
                <h2 id="Ah2">Vision</h2>
                <p>Livguard's vision is to become a global leader in sustainable energy solutions. We envision a future where clean and renewable energy is easily accessible, powering communities, industries, and innovations worldwide.</p>
               
            </div>

           
            <div className="card">
                <img src={imgc} alt="Mission Image"/>
                <h2 id="Ah2">Mission</h2>
                <p>Livguard aims to revolutionize the energy sector by providing top-notch, eco-friendly energy storage solutions. Our mission is to lead the charge towards a greener, more sustainable future by delivering reliable, innovative, and affordable energy products.</p>
                
            </div>

           
            <div className="card">
                <img src={imgd} alt="Founders Image"/>
                <h2 id="Ah2">Values</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur fugit commodi necessitatibus tenetur debitis, nulla ea ipsa aperiam voluptatem odit. Quibusdam non qui incidunt voluptatem sint illum corrupti vero nobis.</p>
               
            </div>
        </div>
    
    </div>
  )
}

export default About