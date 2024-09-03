import React from 'react';


const Nav = () => {
  return (
     <nav>
      <img src='./lemon logo.svg' alt='logo' />
      <ul className='nav-bar'>
        <li>
          <a href='/home'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/menu'>Menu</a>
        </li>
        <li>
          <a href='/reservations'>Reservations</a>
        </li>
        <li>
          <a href='/order online'>Order Online</a>
        </li>
        <li>
          <a href='/login'>Login</a>
        </li>
      </ul>
     </nav>
  );
};

export default Nav;