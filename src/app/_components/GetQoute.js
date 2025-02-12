/** @format */
"use client";
import React from "react";
import Button from "./Button";
import { openWhatsAppChat } from "../_utills/whatsappService";

function GetQoute() {
  const contactUs = () => {
    openWhatsAppChat("contactUs");
  };
  return (
    <div
      style={{
        backgroundImage: `url('/get-qoute.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="font-abhaya relative h-60 md:h-80 w-full"
    >
      {/* Overlay */}
      <div className="absolute py-16  bg-amber-950 w-full bg-opacity-50 z-1 flex flex-col md:flex-row justify-between items-center h-full px-6 md:px-16 lg:px-32 ">
        {/* Text Section */}
        <div className="text-xl md:text-3xl lg:text-4xl text-white text-center md:text-left mb-4 md:mb-0 w-full md:w-2/3">
          Make your trip an unforgettable moment together.
        </div>
        {/* Button Section */}
        <div className="w-full md:w-1/3 lg:w-1/3 flex justify-center md:justify-end">
          <Button
            buttonColor="bg-gradient-to-tl   to-primary-default from-amber-950"
            buttonWidth="w-72"
            textColor="text-white"
            shadowColor="shadow-amber-800"
            shadowSpread="shadow"
            buttonText="Get A Qoute"
            onButtonClick={contactUs}
          />
        </div>
      </div>
    </div>
  );
}

export default GetQoute;
