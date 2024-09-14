import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import BookingPage from "./components/BookingPage";
import LoginForm from "./components/LoginForm";
import Menu from "./components/Menu";
import Home from './components/Home';



function App(){
  return(
    <Router>
    <>
    <Header />
    <Routes> {/* Define the Routes for different paths */}
      <Route path="/" element={<Home />} />
      <Route path="/hero" element={<Hero /> }/>
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/Login" element={<LoginForm />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
    </Router>
  );
}
export default App;