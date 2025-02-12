/** @format */
"use client";
import React from "react";
import Button from "./Button";
import { openWhatsAppChat } from "../_utills/whatsappService";

function AboutUs({
  buttonText,
  aboutUsDetails,
  aboutUsHeading,
  aboutUsImage,
  aboutUsQuestionRequired,
}) {
  const contactUs = () => {
    openWhatsAppChat("contactUs");
  };

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
        <div className="w-full lg:w-1/2">
          <Button
            buttonColor="bg-gradient-to-tl   to-primary-default from-amber-950"
            buttonWidth="w-full"
            textColor="text-white"
            shadowColor="shadow-amber-900"
            shadowSpread="shadow-md"
            buttonText={buttonText}
            onButtonClick={contactUs}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
