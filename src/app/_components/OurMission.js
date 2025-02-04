/** @format */

import React from "react";

function OurMission() {
  return (
    <div className="bg-black px-6 md:px-16 lg:px-32 font-abhaya text-white pt-8">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Mission Content Section */}
        <div className="flex flex-col my-16 lg:my-32 w-full lg:w-1/2 gap-5">
          <div className="font-bold text-primary-default text-xl md:text-2xl">
            Our Mission
          </div>
          <div className="text-white font-bold text-3xl md:text-5xl">
            Professional And Experienced Chauffeurs
          </div>
          <div className="text-gray-300 text-sm md:text-lg">
            Our chauffeurs are highly trained, professional, and discrete. With
            extensive knowledge of London’s roads and traffic patterns, they
            ensure the most efficient routes for timely arrivals and departures.
            Their courteous and respectful service guarantees a VIP experience
          </div>
          {/* Statistics Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 text-center">
              <div className="text-4xl md:text-6xl font-bold">1500</div>
              <div className="text-gray-300 text-lg md:text-2xl mt-2">
                Successful Rides
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="text-4xl md:text-6xl font-bold">13</div>
              <div className="text-gray-300 text-lg md:text-2xl mt-2">
                Years of Experience
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="text-4xl md:text-6xl font-bold">300</div>
              <div className="text-gray-300 text-lg md:text-2xl mt-2">
                Satisfied Partners & Clients
              </div>
            </div>
            <div className="p-4 text-center">
              <div className="text-4xl md:text-6xl font-bold">33</div>
              <div className="text-gray-300 text-lg md:text-2xl mt-2">
                Company`s Offices
              </div>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src="/our-mission.svg"
            alt="Our Mission"
            className="w-full lg:w-3/4"
          />
        </div>
      </div>
    </div>
  );
}

export default OurMission;
