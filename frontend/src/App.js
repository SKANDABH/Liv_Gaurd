import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Abouts from './pages/Abouts';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Products from './pages/Products';
import Login from './pages/Login';
import Sign from './pages/Sign';
import ForgotPass from './pages/ForgotPass';
import Cookies from 'js-cookie';

const isAuthenticated = () => {
  const token = Cookies.get('token');
  return token ? true : false;
};
const showMessageAndNavigate = (path) => {
  window.alert('You need to log in to access this page.');
  return <Navigate to="/login" state={{ from: path }} />
  

};


const ProtectedRoute = ({ element, path }) => {
  return isAuthenticated() ? (
    element
  ) : (
    showMessageAndNavigate(path)
    
  );
};

function App() {
  const [menu, setMenu] = useState("Home");

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<Abouts />} />
          <Route path="/Contact" element={<ProtectedRoute element={<Contact />} path="/Contact" />} />
          <Route path="/Services" element={<ProtectedRoute element={<Services />} path="/Services" />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<ProtectedRoute element={<Products />} path="/Products" />} />
          <Route path="/Signup" element={<Sign />} />
          <Route path="/Forgotpassword" element={<ForgotPass />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;