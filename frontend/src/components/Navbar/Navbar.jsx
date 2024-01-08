import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../footer/Footer.css'
import logo from '../assets/livguard logo.svg';
import distr_logo from '../assets/SHREERAKSHA LOGO.png';
import cart_icon from '../assets/grocery-store.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'> 
      <div className='navbar-logo'>
        <img src={logo} alt="" id="img1" />
        <div className='logo-distr'>
      <img src={distr_logo} alt="" id="imga" />
      </div>
      </div>
     
      {/* <p className="name"><strong>SHREERAKSHA DISTRIBUTORS</strong></p> */}
    
      <nav className='navbar-menu'>
  <ul>
    <li onClick={() => setMenu("Home")} className={menu === "Home" ? "hovered" : ""}>
      <Link to='/'>Home</Link>
    </li>
    <li onClick={() => setMenu("Products")} className={menu === "Products" ? "hovered" : ""}>
      <Link to='/Products'>Products</Link>
    </li>
    <li onClick={() => setMenu("Services")} className={menu === "Services" ? "hovered" : ""}>
      <Link to='/Services'>Services</Link>
    </li>
    <li onClick={() => setMenu("About")} className={menu === "About" ? "hovered" : ""}>
      <Link to='/About'>About</Link>
    </li>
    <li onClick={() => setMenu("Contact")} className={menu === "Contact" ? "hovered" : ""}>
      <Link to='/Contact'>Contact</Link>
    </li>
    <li onClick={() => setMenu("Login")} className={menu === "Login" ? "hovered" : ""}>
      <Link to='/Login'>Login</Link>
    </li>
  </ul>
</nav>
<div className="dropdown d-lg-none">
  <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"  aria-expanded="false">
    Menu
  </button>
  <ul className="dropdown-menu"  aria-labelledby="dropdownMenuButton1">
    <li onClick={() => setMenu("Home")} className={menu === "Home" ? "hovered" : ""}>
      <Link to='/'>Home</Link>
    </li>
    <li onClick={() => setMenu("Products")} className={menu === "Products" ? "hovered" : ""}>
      <Link to='/Products'>Products</Link>
    </li>
    <li onClick={() => setMenu("Services")} className={menu === "Services" ? "hovered" : ""}>
      <Link to='/Services'>Services</Link>
    </li>
    <li onClick={() => setMenu("About")} className={menu === "About" ? "hovered" : ""}>
      <Link to='/About'>About</Link>
    </li>
    <li onClick={() => setMenu("Contact")} className={menu === "Contact" ? "hovered" : ""}>
      <Link to='/Contact'>Contact</Link>
    </li>
    <li onClick={() => setMenu("Login")} className={menu === "Login" ? "hovered" : ""}>
      <Link to='/Login'>Login</Link>
    </li>
  </ul>
  </div>


      <div className='nav-cart'>
        <Link to='/cart'>
          <img src={cart_icon} alt="" id="img2" />
        </Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
};

export default Navbar;
