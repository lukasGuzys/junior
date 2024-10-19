import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Elements/Home';
import Services from './Elements/Services';
import About from './Elements/About';
import ServicesCards from '../ServicesCards/ServicesCards';
import './Navigation.scss';
import LoginForm from './Login/LoginForm';

function Navigation() {
  return (
    <Router>
      <div>
        <nav>
          <div className='logo-nav'>
            <img className='logo' src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?t=st=1727708718~exp=1727712318~hmac=e24ef832f7c713bcef8e5e2d0919e79638dc877b3e7792df4cd0ba82070eaf37&w=740" alt="Logo" />
            <h1 className='logo-name'>Logo Ipsum</h1>
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services-cards">Services</Link></li>
            <li><Link to="/loginForm" className='btn-login'>Login</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services-cards" element={<ServicesCards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Navigation;
