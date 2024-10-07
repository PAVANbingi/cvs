import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg py-4 border border-gray-300 rounded-lg fixed top-0 left-0 right-0 z-20 mx-6 mt-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={logo} // Use the imported logo variable
            alt="Code Vibe Studios Logo"
            className="h-12" // Adjust height as needed
          />
        </div>

        {/* Links Section */}
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
        <div>
          <button className="bg-amber-400 text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-yellow-300">
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// import React, { useState } from 'react';
// import logo from '../assets/logo.png'; // Adjust the path as necessary

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white shadow-lg py-4 border border-gray-300 rounded-lg fixed top-0 left-0 right-0 z-20 mx-6 mt-4">
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <img
//             src={logo} 
//             alt="Code Vibe Studios Logo"
//             className="h-12" 
//           />
//         </div>

//         {/* Links Section for desktop */}
//         <div className="hidden md:flex space-x-10">
//           <a href="#home" className="text-gray-800 hover:text-yellow-500 text-lg font-medium">
//             Home
//           </a>
//           <a href="#services" className="text-gray-800 hover:text-yellow-500 text-lg font-medium">
//             Services
//           </a>
//           <a href="#about" className="text-gray-800 hover:text-yellow-500 text-lg font-medium">
//             About Us
//           </a>
//         </div>

//         {/* Button Section */}
//         <div className="hidden md:block">
//           <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300">
//             Book a Call
//           </button>
//         </div>

//         {/* Hamburger Icon for mobile */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             <svg
//               className="w-6 h-6 text-gray-800"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden flex flex-col space-y-4 mt-4 bg-white border border-gray-300 p-4 rounded-lg">
//           <a
//             href="#home"
//             className="text-gray-800 hover:text-yellow-500 text-lg font-medium"
//             onClick={toggleMenu}
//           >
//             Home
//           </a>
//           <a
//             href="#services"
//             className="text-gray-800 hover:text-yellow-500 text-lg font-medium"
//             onClick={toggleMenu}
//           >
//             Services
//           </a>
//           <a
//             href="#about"
//             className="text-gray-800 hover:text-yellow-500 text-lg font-medium"
//             onClick={toggleMenu}
//           >
//             About Us
//           </a>
//           <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300">
//             Book a Call
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
