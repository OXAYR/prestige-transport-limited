/** @format */
"use client";
import React, { useState } from "react";
import Button from "./Button";

function RidePricing() {
  const rides = [
    {
      name: "Mercedes S-Class",
      hourlyRate: "$65",
      dayRate: "$2760",
      heathrowToCentralLondon: "$160",
      image: "/mercedes-s-class.svg",
    },
    {
      name: "Mercedes S-Class & EQV",
      hourlyRate: "$65",
      dayRate: "$2760",
      heathrowToCentralLondon: "$160",
      image: "/mercedes-s-class-eqv.svg",
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="my-24 px-6 md:px-16 lg:px-32">
      {/* Heading Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl text-center font-bold">
          Our Ride Pricing
        </h1>
        <hr className="w-20 border-2 mt-2 border-primary-default" />
      </div>

      {/* Content Section */}
      <div className="text-center text-silver-default mt-10 flex flex-col items-center gap-16">
        {/* Description */}
        <div className="text-balance text-center w-full lg:w-2/3 text-sm md:text-lg font-extralight tracking-wider">
          Our department is here to ensure personalized guidance. Our smart team
          takes care of everything. The entire team has been great to work with
          from start to finish.
        </div>

        {/* Image Navigation Section */}
        <div className="flex flex-row justify-center items-center gap-4 w-full">
          {/* Left Arrow Button */}
          <button
            className="w-1/6 flex justify-center"
            onClick={() => setIndex(index !== 0 ? index - 1 : rides.length - 1)}
          >
            <img
              src="/left-arrow.svg"
              alt="Left Arrow"
              className="w-8 md:w-auto"
            />
          </button>

          {/* Ride Image */}
          <div className="w-full md:w-4/6 flex justify-center items-center">
            <img
              src={rides[index].image}
              alt={rides[index].name}
              className=""
            />
          </div>

          {/* Right Arrow Button */}
          <button
            className="w-1/6 flex justify-center"
            onClick={() => setIndex(index !== rides.length - 1 ? index + 1 : 0)}
          >
            <img
              src="/right-arrow.svg"
              alt="Right Arrow"
              className="w-8 md:w-auto"
            />
          </button>
        </div>

        {/* Pricing Section */}
        <div className="w-full lg:w-1/3 mx-auto mt-6">
          <div className="text-2xl md:text-3xl text-left font-bold">
            {rides[index].name}
          </div>
          <div className="my-3 flex flex-col gap-2">
            {/* Hourly Rate */}
            <div className="flex justify-between items-center">
              <div className="text-silver-default">
                Hourly rate (minimum 3hrs)
              </div>
              <div className="text-black font-extrabold">
                {rides[index].hourlyRate}
              </div>
            </div>
            <hr />
            {/* Day Rate */}
            <div className="flex justify-between items-center">
              <div className="text-silver-default">Day rate (8hrs)</div>
              <div className="text-black font-extrabold">
                {rides[index].dayRate}
              </div>
            </div>
            <hr />
            {/* Heathrow to Central London */}
            <div className="flex justify-between items-center">
              <div className="text-silver-default">
                Heathrow to Central London
              </div>
              <div className="text-black font-extrabold">
                {rides[index].heathrowToCentralLondon}
              </div>
            </div>
            <hr />
          </div>
          <Button
            buttonColor="bg-black"
            buttonWidth="w-full md:w-1/2"
            textColor="text-white"
            shadowColor="shadow-black"
            shadowSpread="shadow-md"
            buttonText="Book This Ride"
          />
        </div>
      </div>
    </div>
  );
}

export default RidePricing;
