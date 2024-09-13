import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sitemap Section */}
        <div className="sitemap">
          <h3>Doormat Navigation</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
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
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#twitter">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
