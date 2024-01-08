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
    <div className='footer'>
    <div className='footer-logo'> <img src={f_logo}alt=""></img>
    </div>
    <div className='quote'> <h2>LIVGUARD ENERGY TECHNOLOGIES<br/> PRIVATE LIMITED</h2></div>
    <div className='footer-links'>
        <ul>
            <li onClick={() => setMenu("Home")}className={menu === "Home" ? "hovered" : ""}><Link to='/Home'>company</Link></li>
            <li onClick={() => setMenu("Service")}className={menu === "Service" ? "hovered" : ""}><Link to='/Service'>Service</Link></li>
            <li onClick={() => setMenu("Contact")}className={menu === "Contact" ? "hovered" : ""}><Link to='/Contact'>Contact</Link></li>
            <li onClick={() => setMenu("About")}className={menu === "About  " ? "hovered" : ""}><Link to='/About-us'>About-us</Link></li>
        </ul>
    </div>
    <div className='footer-media'>
    <a href="https://www.youtube.com/@LivguardEnergy"target="_blank"rel="noopener noreferrer"><img src={youtube} alt=""></img></a>
    <a href="https://twitter.com/LivguardEnergy"target="_blank"rel="noopener noreferrer"><img src={twitter}alt=""></img></a>
    <a href="https://www.facebook.com/LivguardEnergy"target="_blank"rel="noopener noreferrer"> <img src={social}alt=""></img></a>
    <a href="https://www.instagram.com/livguardenergy"target="_blank"rel="noopener noreferrer"><img src={instagram}alt=""></img></a>
    <a href="https://www.linkedin.com/company/livguard-energy"target="_blank"rel="noopener noreferrer"><img src={linkedin}alt=""></img></a>
    

    </div>
    <div className='footer-copyright'>
        <hr/>
        <p id="footerpara">copyright @ 2023 - ALL RIGHT RESERVED</p>
    </div>

    </div>
  )
}

export default Footer