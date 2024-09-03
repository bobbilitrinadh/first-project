import React from 'react';


const Footer = () => {
  return (
     <footer>
      <div className='footer-container'>
      <div>
        <img src='./lemon logo.svg' alt='logo' className='logo'/>
      </div>
      <div>
        <h2>Doormat Navigation</h2>
        <ul>
          <li><a href='/home'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/menu'>Menu</a></li>
          <li><a href='/reservations'>Reservations</a></li>
          <li><a href='/order online'>Order online</a></li>
          <li><a href='/login'>Login</a></li>
        </ul>
      </div>
      <div>
        <h2>Contact Info..</h2>
        <ul>
          <li><a href='/address'>Address</a></li>
          <li><a href='/Phone number'>Phone number</a></li>
          <li><a href='/email'>Email</a></li>
        </ul>
      </div>
      <div>
        <h2>Social Media Links</h2>
        <ul>
          <li><a href='/facebook'>Facebook</a></li>
          <li><a href='/instagram'>Instagram</a></li>
          <li><a href='/twitter'>Twitter</a></li>
        </ul>
      </div>
      </div>
     </footer>
  );
};

export default Footer;