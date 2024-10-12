import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import logo from '../assets/logo.png'; // Adjust the path if necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white bg-opacity-30 backdrop-blur-md shadow-lg py-0 border border-gray-600 rounded-lg fixed top-0 left-0 right-0 z-20 mx-4 md:mx-20 mt-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Code Vibe Studios Logo" className="h-20 md:h-20" />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex space-x-10">
          <Link to="/" className="text-gray-900 hover:text-yellow-300 text-lg font-medium">
            Home
          </Link>
          <Link to="/services" className="text-gray-900 hover:text-yellow-300 text-lg font-medium">
            Services
          </Link>
          <Link to="/about" className="text-gray-900 hover:text-yellow-300 text-lg font-medium">
            About us
          </Link>
        </div>

        <div className="hidden md:block">
          <button className="bg-amber-400 text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-yellow-300">
            Book a Call
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 px-6 space-y-4">
          <Link to="/" className="block text-gray-900 hover:text-yellow-300 text-lg font-medium" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/services" className="block text-gray-900 hover:text-yellow-300 text-lg font-medium" onClick={toggleMenu}>
            Services
          </Link>
          <Link to="/about" className="block text-gray-900 hover:text-yellow-300 text-lg font-medium" onClick={toggleMenu}>
            About us
          </Link>
          <button className="bg-amber-400 text-gray-800 w-full px-6 py-2 rounded-full font-medium hover:bg-yellow-300">
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
