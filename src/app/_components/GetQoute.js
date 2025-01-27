/** @format */

import React from "react";
import Button from "./Button";

function GetQoute() {
  return (
    <div
      style={{
        backgroundImage: `url('/get-qoute.svg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "30vh",
        width: "100%",
        position: "relative",
      }}
      className="font-abhaya"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Black color with 50% opacity
          zIndex: 1,
        }}
        className="flex justify-between items-center h-full px-32"
      >
        <div className="1/3 text-4xl text-white">
          Make your trip an unforgettable moment together.
        </div>
        <div className="w-1/6">
          <Button
            buttonColor="bg-primary-default"
            buttonWidth="w-full"
            textColor="text-white"
            shadowColor="shadow-primary-default"
            shadowSpread="shadow-md"
            buttonText="Get A Qoute"
          />
        </div>
      </div>
    </div>
  );
}

export default GetQoute;
