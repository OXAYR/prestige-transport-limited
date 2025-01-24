/** @format */

"use client";
import { useState } from "react";

const BookingForm = () => {
  const [tripType, setTripType] = useState("one-way");

  return (
    <div className="bg-gray-300 bg-opacity-10 p-6 md:p-8 rounded-xl font-abhaya  ">
      <div className="flex space-x-2 mb-4">
        <button
          className={`flex-1 py-2 rounded-xl  text-lg font-abhaya shadow-gray-200 shadow-sm ${
            tripType === "one-way"
              ? "bg-white text-black  shadow-sm shadow-gray-200"
              : "bg-gray-300 bg-opacity-30 text-gray-200 border-gray-200 border"
          }`}
          onClick={() => setTripType("one-way")}
        >
          One way
        </button>
        <button
          className={`flex-1 p-2 rounded-xl text-lg font-abhaya ${
            tripType === "hourly"
              ? "bg-white text-black shadow-sm shadow-gray-200"
              : "bg-gray-300 bg-opacity-30 text-gray-200 border-gray-200 border shadow-sm shadow-gray-200"
          }`}
          onClick={() => setTripType("hourly")}
        >
          By the hour
        </button>
      </div>

      <div className="space-y-4 mt-5">
        <input
          type="text"
          placeholder="Where From?"
          className="w-full bg-black text-gray-400 border border-gray-300 p-4 rounded-md focus:outline-none focus:border-gray-500"
        />
        <input
          type="text"
          placeholder="Where To?"
          className="w-full bg-black text-gray-400 border border-gray-300 p-4 rounded-md focus:outline-none focus:border-gray-500"
        />
        <div className="relative">
          <select className="w-full bg-black text-gray-400 border border-gray-300 p-4  rounded-md appearance-none focus:outline-none focus:border-gray-500">
            <option>Date</option>
          </select>
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            ▼
          </span>
        </div>
        <input
          type="text"
          placeholder="Time"
          className="w-full bg-black text-gray-400 border border-gray-300 p-4 rounded-md focus:outline-none focus:border-gray-500"
        />
      </div>

      <button className="mt-6 w-full bg-primary-default text-black p-4 rounded-lg text-lg font-semibold font-abhaya shadow-sm shadow-primary-default">
        Get My Prices
      </button>
    </div>
  );
};

export default BookingForm;
