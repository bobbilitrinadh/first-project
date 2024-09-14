import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sitemap Section */}
        <div className="sitemap">
          <h3>Doormat Navigation</h3>
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="contact">
          <h3>Contact</h3>
          <p>Address: 123 Lemon Street, Chicago</p>
          <p>Phone: +1 234 567 890</p>
          <p>Email: info@littlelemon.com</p>
        </div>

        {/* Social Media Section */}
        <div className="social-media">
          <h3>Social Media Links</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
