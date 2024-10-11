import React from 'react';
import design from "../assets/design.png";
import development from "../assets/development.png";
import zero_to_hero from "../assets/zero_to_hero.png";
import enchance from "../assets/enchance.png";

const Services = () => {
  return (
    <section className="p-8 md:p-20 text-white">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What We Provide</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {/* Service 1: Design */}
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden text-center transition-transform transform hover:scale-105">
          <img 
            src={design}
            alt="Design"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Design</h3>
            <p className="text-gray-400">Creative and innovative design solutions.</p>
          </div>
        </div>

        {/* Service 2: Development */}
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden text-center transition-transform transform hover:scale-105">
          <img 
            src={development}
            alt="Development"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Development</h3>
            <p className="text-gray-400">High-quality development services to build robust applications.</p>
          </div>
        </div>

        {/* Service 3: Zero to Hero */}
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden text-center transition-transform transform hover:scale-105">
          <img 
            src={zero_to_hero}
            alt="Zero to Hero"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Zero to Hero</h3>
            <p className="text-gray-400">Transforming your ideas into reality from scratch.</p>
          </div>
        </div>

        {/* Service 4: Enhance Specific Areas */}
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden text-center transition-transform transform hover:scale-105">
          <img 
            src={enchance}
            alt="Enhance Specific Areas"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Enhance Specific Areas</h3>
            <p className="text-gray-400">Focused improvements to elevate your business.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
