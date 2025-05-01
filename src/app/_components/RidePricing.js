/** @format */
"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import { openWhatsAppChat } from "../_utills/whatsappService";

function RidePricing() {
  const rides = [
    {
      name: "Mercedes S-Class",
      seats: 4,
      luggage: 2,
      image: "/mercedes-s-class.svg",
    },
    {
      name: "Mercedes V-Class",
      seats: 7,
      luggage: 2,
      image: "/mercedes-v-class.svg",
    },

    {
      name: "Mercedes E-Class",
      seats: 4,
      luggage: 2,
      image: "/mercedes-e-class.svg",
    },
    { name: "Audi-A6", seats: 4, luggage: 2, image: "/audi-a6.svg" },
    { name: "Audi-A8", seats: 4, luggage: 2, image: "/audi-8-l.svg" },
    { name: "BMW Series 5", seats: 4, luggage: 2, image: "/bmw-series-5.svg" },
    { name: "BMW Series 7", seats: 4, luggage: 2, image: "/bmw-series-7.svg" },
  ];

  const getRidePricing = () => {
    openWhatsAppChat("bookThisRide", { ride: rides[index] });
  };

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      moveToPrev();
    }, 9000);
    return () => clearInterval(interval);
  }, [index]);

  const moveToNext = () => {
    setIndex((prevIndex) => (prevIndex - 1 + rides.length) % rides.length);
  };

  const moveToPrev = () => {
    setIndex((prevIndex) => (prevIndex + 1) % rides.length);
  };

  return (
    <div className="my-24 px-6 md:px-16 lg:px-32">
      {/* Heading Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-5xl text-center font-bold text-amber-950">
          Our Rides
        </h1>
        <hr className="w-20 border-2 mt-2 border-primary-default" />
      </div>

      {/* Content Section */}
      <div className="text-center text-silver-default mt-4 flex flex-col items-center gap-10 lg:gap-16">
        <div className="text-balance text-center w-full lg:w-2/3 text-sm md:text-lg font-extralight tracking-wider">
          Premium Fleet of Luxury Vehicles <br />
          We offer a diverse range of luxury vehicles to suit every need.
        </div>

        {/* Image Navigation Section */}
        <div className="relative flex justify-center items-center w-full overflow-hidden">
          {/* Left Arrow Button */}
          <button
            className="absolute left-0 p-2 rounded-full cursor-pointer z-10"
            onClick={moveToPrev}
          >
            <img
              src="/left-arrow.svg"
              alt="Left Arrow"
              className="w-8 md:w-auto "
            />
          </button>

          {/* Image Carousel */}
          <div className="relative w-64 sm:w-96 lg:w-full sm:h-72 h-44 flex justify-center items-center overflow-hidden">
            {rides.map((ride, i) => (
              <img
                key={i}
                src={ride.image}
                alt={ride.name}
                className={`absolute transition-all duration-700 ease-in-out transform
                  ${
                    i === index
                      ? "opacity-100 translate-x-0 scale-100"
                      : "opacity-0"
                  }
                  ${
                    i === (index === 0 ? rides.length - 1 : index - 1)
                      ? "-translate-x-full opacity-0"
                      : ""
                  }
                  ${
                    i === (index === rides.length - 1 ? 0 : index + 1)
                      ? "translate-x-full opacity-0"
                      : ""
                  }
                  ${ride.name === "Mercedes V-Class" ? "h-72 " : "h-56"}
                `}
              />
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            className="absolute right-0 p-2 rounded-full cursor-pointer z-10 "
            onClick={moveToNext}
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
          <div className="text-2xl md:text-3xl text-left font-bold text-amber-950">
            {rides[index].name}
          </div>
          <div className="my-4 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="text-silver-default flex items-center gap-3">
                <img src="/passengers-seats.svg" alt="Seats" /> Seating Capacity
              </div>
              <div className="text-black font-extrabold">
                {rides[index].seats} Passengers
              </div>
            </div>
            <hr />
          </div>
          <Button
            buttonColor="bg-gradient-to-tl to-amber-950 from-black "
            buttonWidth="w-full md:w-1/2"
            textColor="text-white"
            shadowColor="shadow-black"
            shadowSpread="shadow-md"
            buttonText="Book This Ride"
            onButtonClick={getRidePricing}
          />
        </div>
      </div>
    </div>
  );
}

export default RidePricing;
