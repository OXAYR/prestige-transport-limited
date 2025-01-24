/** @format */

import React from "react";
import BookingForm from "./BookingForm";

function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: `url('/hero.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        width: "100%",
      }}
    >
      <div className="flex justify-between items-center gap-4 px-32 h-full">
        <div className="w-2/4">
          <div className=" text-8xl font-bold text-white font-abhaya">
            The Best Chauffeur Company
          </div>
          <div className="text-white mt-10 font-abhaya ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
            consectetur adipiscing elit.
          </div>
        </div>
        <div className="w-1/3">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
