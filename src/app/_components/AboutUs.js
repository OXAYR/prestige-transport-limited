/** @format */

import React from "react";

function AboutUs() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center font-abhaya lg:justify-between gap-8  md:px-16 lg:px-32 ">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 ">
        <img src="/about-us-car.svg" alt="About Us Car" className="" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-start items-start w-full lg:w-1/3 gap-4  lg:text-left">
        <div className="font-bold text-primary-default md:text-2xl text-lg">
          Who Are We
        </div>
        <div className="text-white font-bold text-xl md:text-5xl">
          We Are A Prestige Driven Car Hire Service
        </div>
        <div className="text-gray-300 text-sm md:text-base">
          Based in London, meeting the needs of our valued clients. Having been
          in the industry for more than 20 years, we have established a name for
          our reliability and efficient service. We constantly seek to provide
          client satisfaction as one of our main goals.
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
