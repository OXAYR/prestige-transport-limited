/** @format */

import React from "react";
import Button from "./Button";

function AboutUs({
  buttonText,
  aboutUsDetails,
  aboutUsHeading,
  aboutUsImage,
  aboutUsQuestionRequired,
}) {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center font-abhaya lg:justify-between gap-8  md:px-16 lg:px-32 ">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 ">
        <img src={aboutUsImage} alt="About Us Car" className="" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-start items-start w-full lg:w-1/2 gap-4  lg:text-left">
        {aboutUsQuestionRequired && (
          <div className="font-bold text-primary-default md:text-2xl text-lg">
            Who Are We
          </div>
        )}
        <div className="text-white font-bold text-xl md:text-5xl">
          {aboutUsHeading}
        </div>
        <div className="text-gray-300 text-sm md:text-base">
          {aboutUsDetails}
        </div>
        <div className="w-full">
          <Button
            buttonColor="bg-primary-default"
            buttonWidth="w-full"
            textColor="text-black"
            shadowColor="shadow-primary-default"
            shadowSpread="shadow-md"
            buttonText={buttonText}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
