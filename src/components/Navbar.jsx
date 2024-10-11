import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white bg-opacity-30 backdrop-blur-md shadow-lg py-4 border border-gray-600 rounded-lg fixed top-0 left-0 right-0 z-20 mx-4 md:mx-20 mt-8">
   
  
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={logo} // Use the imported logo variable
            alt="Code Vibe Studios Logo"
            className="h-16 md:h-20" // Adjust height as needed
          />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-900 focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Links Section - Hidden on Mobile */}
        <div className="hidden md:flex space-x-10">
          <a href="#home" className="text-gray-900 hover:text-yellow-300 text-lg font-medium">
            Home
          </a>
          <a href="#services" className="text-gray-900 hover:text-yellow-300 text-lg font-medium">
            Services
          </a>
          <a href="#about" className="text-gray-900 hover:text-yellow-300 text-lg font-medium">
            About us
          </a>
        </div>

        {/* Button Section */}
        <div className="hidden md:block">
          <button className="bg-amber-400 text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-yellow-300">
            Book a Call
          </button>
        </div>
      </div>

      {/* Mobile Menu - Visible when hamburger is clicked */}
      {isOpen && (
        <div className="md:hidden mt-4 px-6 space-y-4">
          <a href="#home" className="block text-gray-900 hover:text-yellow-300 text-lg font-medium">
            Home
          </a>
          <a href="#services" className="block text-gray-900 hover:text-yellow-300 text-lg font-medium">
            Services
          </a>
          <a href="#about" className="block text-gray-900 hover:text-yellow-300 text-lg font-medium">
            About us
          </a>
          <button className="bg-amber-400 text-gray-800 w-full px-6 py-2 rounded-full font-medium hover:bg-yellow-300">
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;





// import React from 'react';
// import logo from '../assets/logo.png'; // Adjust the path as necessary

// const Navbar = () => {
//   return (
    
//       <nav className="bg-white shadow-lg py-4 border border-gray-300 rounded-lg fixed top-0 left-10 right-0 z-20 mx-10 mt-8">
//         <div className="container mx-auto px-6 flex justify-between items-center">
//           {/* Logo Section */}
//           <div className="flex items-center">
//             <img
//               src={logo} // Use the imported logo variable
//               alt="Code Vibe Studios Logo"
//               className="h-12" // Adjust height as needed
//             />
//           </div>

//           {/* Links Section */}
//           <div className="hidden md:flex space-x-10">
//             <a href="#home" className="text-gray-900 hover:text-yellow-300 text-lg font-medium">
//               Home
//             </a>
//             <a href="#services" className="text-gray-900 hover:text-yellow-300 text-lg font-medium">
//               Services
//             </a>
//             <a href="#about" className="text-gray-900 hover:text-yellow-300 text-lg font-medium">
//               About us
//             </a>
//           </div>

//           {/* Button Section */}
//           <div>
//             <button className="bg-amber-400 text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-yellow-300">
//               Book a Call
//             </button>
//           </div>
//         </div>
//       </nav>
    
//   );
// };

// export default Navbar;
