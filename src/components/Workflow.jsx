import React from 'react';

import submit_req from '../assets/submit_req.png';
import team from '../assets/team.png';
import legaldocument from '../assets/legaldocument.png';
import updates from '../assets/updates.png';
import finalsubmission from '../assets/finalsubmission.png';

const Workflow = () => {
  return (

    <section className="text-white py-10 px-6 sm:px-10 md:px-20">
    <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold mb-10">How it works</h2>

        <div className="space-y-6">
          {/* Step 1 */}
          
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-evenly items-center space-y-6 md:space-y-0 mb-6">

           
            
            <div className="md:w-1/6">
              <img src={submit_req} alt="Submit Your Requirements" className="w-full h-auto mx-auto" />
            </div>

          
            <div className="flex items-center">
            <div className="md:w-4/5 md:pl-10">
              <h3 className="text-xl font-semibold">Submit Your Requirements</h3>
              <p className="mt-2 text-gray-400">Fill out a simple form to share your project details and requirements with us.</p>
            </div>
</div>

                        </div>

          {/* Step 2 */}
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-evenly items-center space-y-6 md:space-y-0 mb-6">

            
          <div className="flex items-center">
            <div className="md:w-4/5 md:pr-10">
              <h3 className="text-xl font-semibold">Team Consultation</h3>
              <p className="mt-2 text-gray-400">Our team will contact you to discuss your vision and clarify any questions.</p>
            </div>
            </div>

            <div className="md:w-1/5">
              <img src={team} alt="Team Consultation" className="w-full h-auto mx-auto" />
            </div>

          </div>

          {/* Step 3 */}
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-evenly items-center space-y-6 md:space-y-0 mb-6">

            
            <div className="md:w-1/5">
              <img src={legaldocument} alt="Legal Documentation" className="w-full h-auto mx-auto" />
            </div>

            <div className="flex items-center">
            <div className="md:w-4/5 md:pl-10">
              <h3 className="text-xl font-semibold">Legal Documentation</h3>
              <p className="mt-2 text-gray-400">We’ll take care of all the necessary legal agreements to ensure transparency and trust.</p>
            </div>
          </div>
          </div>

          {/* Step 4 */}
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-evenly items-center space-y-6 md:space-y-0 mb-6">

           
          <div className="flex items-center">
            <div className="md:w-4/5 md:pr-10">
              <h3 className="text-xl font-semibold">Project Development & Updates</h3>
              <p className="mt-2 text-gray-400">We’ll start working on your project, keeping you updated throughout the process.</p>
            </div>
            </div>


            <div className="md:w-1/5">
              <img src={updates} alt="Project Development & Updates" className="w-full h-auto mx-auto" />
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-slate-700 p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-evenly items-center space-y-6 md:space-y-0 mb-6">

           
            <div className="md:w-1/5">
              <img src={finalsubmission} alt="Final Submission" className="w-full h-auto mx-auto" />
            </div>

            <div className="flex items-center">
            <div className="md:w-4/5 md:pl-10">
              <h3 className="text-xl font-semibold">Final Submission</h3>
              <p className="mt-2 text-gray-400">Once everything is completed, we’ll deliver the final product to you.</p>
            </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
