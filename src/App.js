import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import BookingPage from "./components/BookingPage";
import LoginForm from './components/LoginForm';



function App(){
  return(
    <Router>
    <>
    <Routes> {/* Define the Routes for different paths */}
      <Route path="/home" element={<Header />} />
      <Route path="/" element={<Hero /> }/>
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/Login" element={<LoginForm />} />
      </Routes>
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
    </Router>
  );
}
export default App;