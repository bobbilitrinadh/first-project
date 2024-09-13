import React from "react";
import "./App.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footerr from "./components/Footerr";

function App(){
  return(
    <>
      <Header />
      <Footer />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footerr />
    </>
  );
}
export default App;