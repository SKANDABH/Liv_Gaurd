import React, { useState } from 'react';
import './Faq.css'
import drpdwnicon from '../assets/down.png'
const Faq = () => {
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2,setShowDropdown2]=useState(false);
    const [showDropdown3,setShowDropdown3]=useState(false);
    const [showDropdown4,setShowDropdown4]=useState(false);
    const [showDropdown5,setShowDropdown5]=useState(false);

 
  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };
  const toggleDropdown3 = () => {
    setShowDropdown3(!showDropdown3);
  };
  const toggleDropdown4 = () => {
    setShowDropdown4(!showDropdown4);
  };
  const toggleDropdown5 = () => {
    setShowDropdown5(!showDropdown5);
  };
  return (
    <div className='faq'>
        <div className='contents'>
        <h1>Frequently Asked Questions</h1>
<h3>Got questions on your mind? Find your answers here</h3>
            
        </div>
        <div className='faqs'>
        <div className={`faq1 ${showDropdown1 ? 'open' : ''}`}  id="faqs">
            <h4>Which inverter battery is best for my use?</h4>
            <img id='dropic'onClick={toggleDropdown1}src={drpdwnicon} alt=""></img>
          
         {showDropdown1 && (
        <div className='dropdown-content'>
          <p>Livguard's Load Calculator, a Load Calculator tool helps you find the best inverter battery for your energy needs. Trust Livguard for superior performance and durability.</p>
          
          {/* Add answers for other faq items */}
        </div>
      )}  </div>
      
        <div className={`faq2 ${showDropdown2 ? 'open' : ''}`} id="faqs"><h4>How to connect inverter to battery ?</h4>
        <img id='dropic'onClick={toggleDropdown2} src={drpdwnicon} alt=""></img>
        {showDropdown2 && (
        <div className='dropdown-content'>
          <p>Connecting an inverter to a battery is a simple process of ensuring compatibility, connecting the cables, and testing. Livguard Inverter Batteries are designed for seamless compatibility and superior performance, ensuring reliable and uninterrupted power supply for your home or office.</p>
          
          {/* Add answers for other faq items */}
        </div>
      )}  </div>
      
        <div className={`faq3 ${showDropdown3 ? 'open' : ''}`}id="faqs"><h4>Are inverters for the home and the office Inverters different?</h4>
        <img id='dropic'onClick={toggleDropdown3} src={drpdwnicon} alt=""></img>
        {showDropdown3 && (
        <div className='dropdown-content'>
          <p>Inverters are the same for both homes and offices, however, their capacities differ based on power needs & backup required. Whether you need an inverter for your home or business, Livguard has a variety of quality and durable options to choose from.</p>
          
          {/* Add answers for other faq items */}
        </div>
      )}  </div>
      
        
        <div className={`faq4 ${showDropdown4 ? 'open' : ''}`}id="faqs">
        <h4>Which inverter is best for home?</h4>
        <img id='dropic'onClick={toggleDropdown4} src={drpdwnicon} alt=""></img>
        {showDropdown4 && (
        <div className='dropdown-content'>
          <p>When it comes to selecting the best inverter for your home, Livguard Inverter is the top choice. Use our Load Calculator, your personal Load Calculator to find the right inverter for you.</p>
          
        </div>
      )}  </div>
     
      <div className={`faq5 ${showDropdown5 ? 'open' : ''}`} id="faqs">
  <h4>How does the Load Calculator work?</h4>
  <img id='dropic' onClick={toggleDropdown5} src={drpdwnicon} alt=""></img>
  {showDropdown5 && (
    <div className='dropdown-content'>
      <p>The Livguard Load Calculator is a personalised Load Calculator that suggests you the best Livguard Inverter and Inverter Battery based on devices you choose, backup hours needed, and average power use. It guarantees reliable power backup solution for your home.</p>
      {/* Add more answers or content here */}
    </div>
  )}
</div>

   </div></div>
  )
}

export default Faq