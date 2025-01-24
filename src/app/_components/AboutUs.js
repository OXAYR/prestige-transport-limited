/** @format */

import React from "react";

function AboutUs() {
  return (
    <div className="flex  items-center font-abhaya ">
      <div className="w-1/2">
        <img src="/about-us-car.svg" />
      </div>
      <div className="flex flex-col justify-start items-start w-1/3 gap-4">
        <div className="font-bold text-primary-default text-2xl">
          Who Are we
        </div>
        <div className="text-white font-bold text-5xl">
          We Are A Chauffeur Driven Car Hire Service
        </div>
        <div className="text-silver-default">
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
