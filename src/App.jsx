

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
     <div className="bg-slate-950 text-white min-h-screen">
    {/* <Hero /> */}
    <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      <div className="pt-16"> {/* Add padding top to prevent content overlap */}
      
        <Services />
        <Workflow />
        <AboutUs />
        <Footer />
      </div>
       </div> 
    </>
  );
};

export default App;
