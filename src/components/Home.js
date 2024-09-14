import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
