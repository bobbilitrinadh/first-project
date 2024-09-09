import React from "react";
import logo from "../pictures/lemonlogo.svg";


 const Header = () => {
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="logo"  />
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/orderonline">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>

        </header>
    );
 }
 export default Header;