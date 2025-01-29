/** @format */

import React from "react";
import BookingForm from "./BookingForm";
import NavHeader from "./NavHeader";

function HeroSection({ heroTitle, heroDetails, heroBackgroundImage }) {
  return (
    <div
      style={{
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        width: "100%",
      }}
    >
      {/* <NavHeader /> */}
      <div className="flex flex-col lg:flex-row lg:justify-between justify-evenly items-center gap-4 px-6 md:px-16 lg:px-32 h-full pt-44 lg:pt-0">
        {/* Text Content */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <div className="text-4xl md:text-6xl  font-bold text-white font-abhaya">
            {heroTitle}
          </div>
          <div className="text-white mt-6 md:mt-10 font-abhaya text-sm md:text-lg font-thin tracking-wide">
            {heroDetails}
          </div>
        </div>

        {/* Booking Form */}
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
