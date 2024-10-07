import React from 'react';
import logo from '../assets/logo.png'; // Ensure this path is correct
import instagram from '../assets/instagram.png';  // Adjusted from .svg to .png
import facebook from '../assets/facebook.png';  // Adjusted from .svg to .png
import linkedin from '../assets/linkedin.png';  // Adjusted from .svg to .png

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-6 text-center p-6">

        {/* Logo and Nav */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo} // Use the imported logo variable
              alt="Code Vibe Studios Logo"
              className="h-12" // Adjust height as needed
            />
          </div>
          
          {/* Contact Form */}
          <div className="flex items-center space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-full px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-slate-950"
            />
            <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-yellow-500">
              Contact Us
            </button>
          </div>

        </div>

         {/* Navigation  */}
         <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-6">
          {/* Navigation  */}
          <div className="flex items-center">
          <nav className="flex space-x-8 text-lg text-slate-950">
            <a href="#home" className="hover:text-yellow-500">Home</a>
            <a href="#services" className="hover:text-yellow-500">Services</a>
            <a href="#about" className="hover:text-yellow-500">About Us</a>
          </nav>
          </div>
          
         {/* Social Media Links */}
        <div className="flex justify-center space-x-6 text-yellow-500 mb-6">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram logo" width={24} height={24} className="hover:text-yellow-500" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src={facebook} alt="Facebook logo" width={24} height={24} className="hover:text-yellow-500" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn" width={24} height={24} className="hover:text-yellow-500" />
          </a>
        </div>

        </div>
            
     

          {/* Divider */}
          <div className="border-t border-slate-950 mt-6"></div>

        {/* Footer Links */}
        <div className="flex justify-center space-x-6 text-gray-600">
          <a href="#privacy" className="hover:text-yellow-500">Privacy Policy</a>
          <a href="#terms" className="hover:text-yellow-500">Terms of Service</a>
          <a href="#cookies" className="hover:text-yellow-500">Cookies Settings</a>
        </div>

      
      </div>
    </footer>
  );
};

export default Footer;
