import React, { useState } from 'react';
import './Fg.css';
 // Import your CSS file

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showOtp,setShowOtp]=useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword1, setShowPassword1] = useState(false);
  const [showconfirmPassword, setShowConfirmPassword] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);
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
  const handlenewpass = async (e) => {
    e.preventDefault();
    try {
      // Make a request to your backend to verify the OTP
      const response = await fetch('http://localhost:3000/Resetpass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({newPassword,confirmPassword,email}),})
        if (response.ok) {
          alert("Password reset successful");
          window.location.href="/login";
        }
      else if(response.status===400){
        alert("New-Password and Confirmed-Password not matching")
        setNewPassword('');
        setConfirmPassword('');
      }}
      
      catch (error) {
        console.error('Error:', error.message);
        alert("Invalid OTP. Please try again");
      }};
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

    if (response.ok) {
      // const data = await response.json();
      // setMessage(data.message);
      alert("OTP is Verified");
      setShowOtp(false);
      setShowPassword1(true);
      setShowConfirmPassword(true);
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
        <div>{showOtp && (
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
        </form>)}
        
        </div>
        <div >{showPassword1&&showconfirmPassword && (<form onSubmit={handlenewpass}> <label htmlFor="newPassword">New Password:</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />

              
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
<i className={showPassword1 ? 'bx bxs-hide' : 'bx bxs-show'} onClick={() => setShowPassword1(!showPassword1)}></i>
              <button type="submit">Submit</button></form> )}
              </div>
        <p className={`message ${message.startsWith('Error') ? 'error' : 'success'}`}>
          {message}
        </p>
      </div>
    </div>
  );
};

export default Forgotpassword;
