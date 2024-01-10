import React from 'react'
import './Contactus.css'
function Contactus() {
  return (
    <div className="mainContainer">
        <div className="form-box">
            <h2>Contact Us</h2>
            <p>You will hear from us at the earliest!</p>
            <form action="https://formspree.io/f/mpzgvnnj" method="POST"id="Cform">
                <div className="input-container">
                    <input type="text" placeholder="Full Name" name="name" id="name" required/>
                    <i className="fas fa-user"></i>
                </div>
                <div className="input-container">
                    <input type="email" name="mail" id="email" placeholder="Email" required/>
                    <i className="fas fa-envelope"></i>
                </div>
                <div className="input-container">
                    <input type="tel" name="phone" id="phone" placeholder="Phone" required/>
                    <i className="fas fa-phone"></i>
                </div>
                <div className="input-container">
                    <textarea name="query" id="query" cols="30" rows="5" placeholder="Any comment or your query" required></textarea>
                    <i className="fas fa-comment"></i>
                </div>
                <div className="submit-btn">
                    <button onclick="notif()">Send Message</button>
                </div>
            </form>
            <p className="extra">You can also contact us at 181-2323-8282</p>
        </div>
        <div className="contact-info">
            <h3>Address</h3>
            <p>Shop no 7 <b/>kadri commercial complex <br/>Mallikatta,Mangalore <br/>WhatsApp no:63632 31299 </p>
            <br/><br/> <h3>Email</h3>
            <p>livguard@gmail.com
                <br/>shreeraksha.energy@gamil.com
            </p>
        </div>
    </div>
  )
}

export default Contactus