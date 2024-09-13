import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import logo from "../pictures/restauranfood.jpg";

const Hero = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleReserveClick = () => {
    navigate('/booking'); // Navigate to the booking form route
  };
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <button className="reserve-button" onClick={handleReserveClick}>Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img src={logo} alt="Delicious food" />
        </div>
      </div>
    </section>
  );
};
export default Hero;