import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import '../Navbar/Navbar.jsx'
import f_logo from '../assets/livguard logo.svg'
import youtube from '../assets/youtube.png'
import twitter from '../assets/twitter.png'
import social from '../assets/social.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
const Footer = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div class="footer">
        <div class="footer-container">
            <div class="footer-row">
                <div class="footer-col">
                    <h4>Products</h4>
                    <ul>
                        <li><a href="#">Inverters</a></li>
                        <li><a href="#">Batteries</a></li>
                        <li><a href="#">Solar-systems</a></li>
                        <li><a href="#">Cables</a></li>
                    </ul>
                </div>
            
                <div class="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Warranty Registration</a></li>
                        <li><a href="#">Periodic Service</a></li>
                        <li><a href="#">Installations</a></li>
                        <li><a href="#">Testing</a></li>
                        
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Help Yourself</h4>
                    <ul>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">download brochures</a></li>
                        <li><a href="#">Check prices</a></li>
                        <li><a href="#">Loan options</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Follow us</h4>
                    <div class="social-links">
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                        <a href=""><i class="fab fa-twitter"></i></a>
                        <a href=""><i class="fab fa-instagram"></i></a>
                        <a href=""><i class="fab fa-linkedin-in"></i></a>
                        <p>
                            SHREERAKSHA DISTRIBUTORS
                            <br/>
                            Kadri Commercial Complex,Mallikatta,Mangalore
                            <br/> 
                            +91-124-4987 400
                            <br/>
                            www.livguard.com
                        </p>
                           
                    </div>
                    
                </div>

            </div>
        </div> </div>
    
  )
}
{/* // <div className='footer'>
    // <div className='footer-logo'> <img src={f_logo}alt=""></img>
    // </div>
    // <div className='quote'> <h2>LIVGUARD ENERGY TECHNOLOGIES<br/> PRIVATE LIMITED</h2></div>
    // <div className='footer-links'>
    //     <ul>
    //         <li onClick={() => setMenu("Home")}className={menu === "Home" ? "hovered" : ""}><Link to='/Home'id="FLink">company</Link></li>
    //         <li onClick={() => setMenu("Service")}className={menu === "Service" ? "hovered" : ""}><Link to='/Service'id="FLink">Service</Link></li>
    //         <li onClick={() => setMenu("Contact")}className={menu === "Contact" ? "hovered" : ""}><Link to='/Contact'id="FLink">Contact</Link></li>
    //         <li onClick={() => setMenu("About")}className={menu === "About  " ? "hovered" : ""}><Link to='/About-us'id="FLink">About-us</Link></li>
    //     </ul>
    // </div>
    // <div className='footer-media'>
    // <a href="https://www.youtube.com/@LivguardEnergy"target="_blank"rel="noopener noreferrer"><img src={youtube} alt=""></img></a>
    // <a href="https://twitter.com/LivguardEnergy"target="_blank"rel="noopener noreferrer"><img src={twitter}alt=""></img></a>
    // <a href="https://www.facebook.com/LivguardEnergy"target="_blank"rel="noopener noreferrer"> <img src={social}alt=""></img></a>
    // <a href="https://www.instagram.com/livguardenergy"target="_blank"rel="noopener noreferrer"><img src={instagram}alt=""></img></a>
    // <a href="https://www.linkedin.com/company/livguard-energy"target="_blank"rel="noopener noreferrer"><img src={linkedin}alt=""></img></a>
    

    // </div>
    // <div className='footer-copyright'>
    //     <hr/>
    //     <p id="footerpara">copyright @ 2023 - ALL RIGHT RESERVED</p>
    // </div>

    // </div> */}
export default Footer