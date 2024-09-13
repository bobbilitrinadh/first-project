import React from 'react';

const About = () => {
  return (
    <section className="about">
        <div>
      <h2>Little Lemon</h2>
      <h3>Chicago</h3>
      <p>
        We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
      </p>
      </div>
      <div>
      <img
        src={require('../pictures/Mario and Adrian b.jpg')}
        alt="Family working in the kitchen"
        className="about-image"
      />
      </div>
    </section>
  );
};

export default About;
