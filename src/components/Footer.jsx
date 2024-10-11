import React from 'react';
import logo from '../assets/logo.png'; // Ensure this path is correct
import instagram from '../assets/instagram.png'; // Adjusted from .svg to .png
import facebook from '../assets/facebook.png'; // Adjusted from .svg to .png
import linkedin from '../assets/linkedin.png'; // Adjusted from .svg to .png

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-10">
      <div className="container mx-auto px-6 text-center md:text-left p-6">

        {/* Logo and Contact Form */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-6">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <img
              src={logo}
              alt="Code Vibe Studios Logo"
              className="h-12" // Adjust height as needed
            />
          </div>
          
          {/* Contact Form */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto border border-gray-300 rounded-full px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-slate-950"
            />
            <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-yellow-500 w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>

        {/* Navigation and Social Media Links */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-6">
          {/* Navigation Links */}
          <div className="flex justify-center md:justify-start">
            <nav className="flex space-x-8 text-lg text-slate-950">
              <a href="#home" className="hover:text-yellow-500">Home</a>
              <a href="#services" className="hover:text-yellow-500">Services</a>
              <a href="#about" className="hover:text-yellow-500">About Us</a>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
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
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-gray-600 mt-6">
          <a href="#privacy" className="hover:text-yellow-500">Privacy Policy</a>
          <a href="#terms" className="hover:text-yellow-500">Terms of Service</a>
          <a href="#cookies" className="hover:text-yellow-500">Cookies Settings</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
