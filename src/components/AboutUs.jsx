import React from 'react';
import aboutus from '../assets/aboutus.png'; // Ensure this path is correct

const Navbar = () => {
  return (
    <section className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-10">About Us</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-6">
          {/* Text */}
          <div className="flex items-center md:w-3/5">
            <p className="mt-2 text-white">
              At Code_Vibe_Studio, we transform ideas into exceptional digital experiences. Our dedicated team of designers and developers crafts user-centric websites and applications tailored to your unique needs. We believe in collaboration and precision, working closely with clients to bring their vision to life. Let’s create something amazing together!
            </p>
          </div>
          
          {/* Image */}
          <div className="flex items-center md:w    -1/3">
            <img src={aboutus} alt="About Us"  />
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Navbar;
