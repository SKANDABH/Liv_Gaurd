import React,{useState} from 'react'
import './Emailsub.css'
import emailback from '../assets/emailph.webp'
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
const Emailsub = () => {

  const [email, setEmail] = useState('');
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    try {
      // Make a POST request to your backend endpoint
      await axios.post('http://localhost:3000/subscribe', { email });
      console.log('Subscription successful!');
      if (response.status === 200) {
        console.log('Subscription successful!');
        alert('Subscription successful! Check your email for confirmation.');
      } else if (response.status === 409) {
        console.log('You are already subscribed!');
        alert('You are already subscribed!');
      } else {
        console.error('Unexpected response:', response);
        alert('An unexpected error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error subscribing:', error.message);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='emailsub' style={{ backgroundImage: `url(${emailback})`,backgroundSize: isSmallScreen ? 'contain' : 'cover', }}>
        <div className='text'>
            <p id="para">Get Exclusive Offers On Your Email</p>
            <p id="para1" >Stay Updted By Subscribing</p>
        </div>
        <div className='email'>
        <form onSubmit={handleSubmit}>
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
        <button className="btnemail"type="submit">SUBSCRIBE</button>
        </form>
            
        </div>
    </div>
  )
}

export default Emailsub