    import React, { useState } from 'react';
    import './Logn.css';
    import { Link } from 'react-router-dom';
    
    const Logn = () => {
        const [passwordVisible, setPasswordVisible] = useState(false);

        const toggleVisibility = () => {
            setPasswordVisible(prevState => !prevState);
        };

        const handleSub = async (e) => {
            e.preventDefault();

            // Fetch input values
            const username = e.target.elements.username.value;
            const password = e.target.elements.password.value;

            try {
                const response = await fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: username, password })
                });

                const data = await response.json();
                console.log(data.message);  // Assuming backend responds with a message

                // TODO: Handle the response appropriately (e.g., show a message to the user)
               
               if(response.ok) {alert("Login successful");
            window.location.href="/"}    
               else if(response.status===400){alert("user email not exist");} 
               else {alert("Incorrect password");} 
            } catch (error) {
                console.error('Error:', error);
            }
        };

        return (
            <div className="login">
                <div className="lcontainer">
                    <form onSubmit={handleSub}>
                        <h1>Login</h1>
                        <div className="inputbox">
                            <input type="text" placeholder="Username" name="username" required />
                            <i className='bx bxs-user-circle'></i>
                        </div>
                        <div className="inputbox">
                            <input type={passwordVisible ? "text" : "password"} placeholder="Password" id="password" name="password" required />
                            <i className='bx bxs-lock-alt' onClick={toggleVisibility}></i>
                        </div>
                        <div className="remember-forget">
                            <label id="rn"><input type="checkbox" id="rm" />Remember me</label>
                            <a href="/login" id="rnn"><Link to="/Forgotpassword">Forgot Password?</Link></a>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <div className="register">
                            <p>Don't have an account here?<Link to="/Signup">Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    export default Logn;
 