import React from 'react';
import aboutus from '../assets/aboutus.png'; // Ensure this path is correct

const AboutUs = () => {
  return (
    <section className="bg-blue-600 text-white p-6 md:p-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 md:mb-10">About Us</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-6">
          {/* Text */}
          <div className="md:w-3/5">
            <p className="text-white text-base md:text-lg leading-relaxed">
              At Code Vibe Studio, we transform ideas into exceptional digital experiences. Our dedicated team of designers and developers crafts user-centric websites and applications tailored to your unique needs. We believe in collaboration and precision, working closely with clients to bring their vision to life. Let’s create something amazing together!
            </p>
          </div>
          
          {/* Image */}
          <div className="md:w-1/3 flex justify-center">
            <img src={aboutus} alt="About Us" className="w-full h-auto rounded-lg object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
