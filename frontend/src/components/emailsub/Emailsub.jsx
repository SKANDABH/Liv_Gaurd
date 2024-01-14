import React, { useState } from 'react';
import './Emailsub.css';
import emailback from '../assets/emailph.webp';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';

const Emailsub = () => {
  const [email, setEmail] = useState('');
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });

  const handSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend endpoint
      const response = await axios.post('http://localhost:3001/subscribe', { email });
      console.log('Subscription response:', response);

      if (response.data && response.data.message === 'Subscription successful!') {
        console.log('Subscription successful!');
        alert('Subscription successful! Check your email for confirmation.');
      } else if (response.data && response.data.error === 'Already subscribed') {
        console.log('You are already subscribed!');
        alert('You are already subscribed!');
      } else {
        console.error('Unexpected response:', response);
        alert('An unexpected error occurred. Please try again later.');
      }
    } catch (error) {
      if (error.response && error.response.status === 409 && error.response.data && error.response.data.error === 'Already subscribed') {
        console.log('You are already subscribed!');
        alert('You are already subscribed!');
      } else {
        console.error('Error subscribing:', error.message);
        alert('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className='emailsub' style={{ backgroundImage: `url(${emailback})`, backgroundSize: isSmallScreen ? 'contain' : 'cover' }}>
      <div className='text'>
        <p id="para">Get Exclusive Offers On Your Email</p>
        <p id="para1" >Stay Updated By Subscribing</p>
      </div>
      <div className='email'>
        <form onSubmit={handSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            placeholder='Enter your email-id'
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required=""
            autoComplete="email"
          />
          <button className="btnemail" type="submit">SUBSCRIBE</button>
        </form>
      </div>
    </div>
  );
};

export default Emailsub;
