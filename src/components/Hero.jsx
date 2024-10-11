import React from 'react';
import hero_bg from '../assets/hero_bg.jfif'; 

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url(${hero_bg})`, 
          filter: 'brightness(0.5)', // Adjust brightness to make the background dull
        }} 
      ></div>

      {/* Hero Content */}
      <div className="text-center px-6 relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          From Ideation to <br /> Launch, Everything at Your Fingertips!
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Seamless design and development to bring your website to life effortlessly!
        </p>

        {/* Call to Action Button */}
        <button className="bg-amber-400 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition duration-300 ease-in-out">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
