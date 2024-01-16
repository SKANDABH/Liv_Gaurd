    import { Link } from 'react-router-dom';
    import './Signup.css';
    import React, { useState } from 'react';
    // import { auth } from "../firebase";


    const Signup = () => {
        const [passwordVisible, setPasswordVisible] = useState(false);

        const toggleVisibility = () => {
            setPasswordVisible(prevState => !prevState);
        };  

        const handleSub = async (e) => {
            e.preventDefault();
            console.log("Form submitted");
            // Fetch input values
            const username = e.target.elements.username.value;
            const email = e.target.elements.email.value;
            const password = e.target.elements.password.value;
            const phone = e.target.elements.phone.value; 
            
            try {console.log(username);
                const response = await fetch('http://localhost:3000/Signup', {  // Corrected the endpoint URL
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, email, phone, password })
                });

                const data = await response.json();
                console.log(data.message);
                // TODO: Handle the response appropriately (e.g., show a message to the user)
              if(response.ok){
                alert("Signup is sucess");
                
                window.location.href = '/login';
                alert("Please login");
            }
                else{
                    alert("email is already exist");
                }
            } catch (error) {alert("error occured");
                console.error('Error:', error);
            }
        };

    
    return (
        <div className='bdy'>
                    <div className="scontainer">
                        <form onSubmit={handleSub} className="signup-form">
                            <h2>Sign in</h2>
                            <div className="form-group">
                                <input type="text" placeholder="Username" name="username" required />
                                <i className='bx bxs-user-circle'></i>
                            </div>
                            <div class="form-group">
                            <input type="email" id="email" name="email" placeholder="Email" required />
                        </div>
                            
                            <div class="form-group">
                        <input type="tel" id="phone" name="phone" placeholder="Phone" required/>
                        </div>
                        <div className="form-group">
                                <input type={passwordVisible ? "text" : "password"} placeholder="Password" id="password" name="password" required />
                                <i className='bx bxs-lock-alt' onClick={toggleVisibility}></i>
                            </div>
        
                            <div className="remember-forget">
                                <label id="sg"><input type="checkbox" id="sn"/>Remember me</label>
                                {/* <a href="/login" id="fg">Forgot Password?</a> */}
                            </div>
                            <button type="submit" className="sbtn" >Signup</button>
                            
                        </form>
                        <div class="form-group">
        <button id="google-login-btn">
            <span class="google-icon"><i class="fab fa-google"></i></span>Sign Up with Google
        </button>
        </div>
        <div class="login-link">
        Already have an account? <Link to="/Login">Login</Link>
        </div>
    </div></div>
                
    );
    }

    export default Signup;
