import React, { useState } from 'react';
import './Fg.css';
 // Import your CSS file

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showOtp,setShowOtp]=useState(false);
  const [otp, setOtp] = useState('');
  const handleForgotPassword = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/Forgotpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      // Check if the response is valid JSON
      if (!response.ok) {
        throw new Error('Failed to reset password');
      }
  
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        setMessage(data.message);
          setShowOtp(true);
        // Display a success message to the user
        alert("email sent to your email id");
      } else {
        // Handle non-JSON response (might be an error page)
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error:', error.message);
      // Display an error message to the user
      alert("error has been occurred");
    }
  };
   const handleOtpSubmit = async (e) => {
    e.preventDefault();
  try {
    // Make a request to your backend to verify the OTP
    const response = await fetch('http://localhost:3000/VerifyOtp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({otp }),
    });

    if (response.status==100) {
      // const data = await response.json();
      // setMessage(data.message);
      console.log("OTP is Verified");
      // Additional logic after successful OTP verification
    } else {
      throw new Error('Invalid OTP');
    }
  } catch (error) {
    console.error('Error:', error.message);
    alert("Invalid OTP. Please try again");
  }
};
  

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h2>Forgot Password</h2>
        <form onSubmit={handleForgotPassword}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
         
          <button type="submit">Reset Password</button>
         
        </form>
        <form onSubmit={handleOtpSubmit}>
          {/* {showOtp && ( */}
            <div className='otp'>
              <label htmlFor="otp">Enter OTP:</label>
              <input
                type="text"
                id="otp"
                name="otp"
                placeholder='Enter the OTP (Sent in mail)'
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
            </div>
          {/* )} */}
        </form>
        <p className={`message ${message.startsWith('Error') ? 'error' : 'success'}`}>
          {message}
        </p>
      </div>
    </div>
  );
};

export default Forgotpassword;
