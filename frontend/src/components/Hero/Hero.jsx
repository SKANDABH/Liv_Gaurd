import './Hero.css'
import img from '../assets/herobat.jpg'
import React from 'react';
// import Signup from '../signup/Signup.jsx'; 
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Router } from 'react-router-dom';
const Hero = () => {  
  //   const [showSignup, setShowSignup] = useState(false);
  //   console.log('showSignup:', showSignup);
  // const handleGetInTouch = () => {
  //   setShowSignup(true);
   
  // }; 
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };
  return (
    <div className='hero'>
    <div className="container-fluid"><div className="row">
    <div className="col-lg-12 col-sm-3 col-md-8 ">
        <div className='hero-left '><img id='imgbat' src={img}alt="" /></div>

        <div className='hero-right'>        <h1>Uninterrupted Power</h1>
<h1>With Livguard</h1>
<form onSubmit={handleSubmit}>
      {/* Your form fields go here */}
      <button id='herobtn'><Link to="/Signup">Get in touch with us</Link></button>
      </form>
{/* // </div> {showSignup && ( */}
{/* //         <div className="signup-overlay">
//           <Signup />
//         </div> */}
{/* //       )} */}
{/* //     </div> */}

    </div></div></div></div></div>

        
    
  );
}

export default Hero