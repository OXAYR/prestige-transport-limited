/** @format */

"use client";
import { useState } from "react";
import Button from "./Button";
import { locations } from "../_data/londonLocations";

const BookingForm = () => {
  const [tripType, setTripType] = useState("one-way");
  const [whereFrom, setWhereFrom] = useState("");
  const [whereTo, setWhereTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [baggage, setBaggage] = useState("");
  const [passengers, setPassengers] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  const filteredFromLocations = locations.filter((location) =>
    location.toLowerCase().includes(whereFrom.toLowerCase())
  );

  const filteredToLocations = locations.filter((location) =>
    location.toLowerCase().includes(whereTo.toLowerCase())
  );

  const handleSelectFromLocation = (location) => {
    setWhereFrom(location);
    setShowFromDropdown(false);
  };

  const handleSelectToLocation = (location) => {
    setWhereTo(location);
    setShowToDropdown(false);
  };

  const navigateToWhatsapp = () => {
    const phone = "+923044979487";
    // Construct the time string based on the hour value and AM/PM
    const timeArray = time.split(":");
    let hour = parseInt(timeArray[0]);
    const minute = timeArray[1];
    let formattedTime = "";

    // Check AM/PM formatting
    if (hour >= 12) {
      formattedTime = `${hour > 12 ? hour - 12 : hour}:${minute} PM`; // Convert to 12-hour format
    } else {
      formattedTime = `${hour === 0 ? 12 : hour}:${minute} AM`; // Handle 12 AM case
    }

    let message = `Booking Details
  
    Where From: ${whereFrom}
    Date: ${date}
    Time: ${formattedTime}
    Number of Passengers: ${passengers}
    Number of Baggage: ${baggage}
`;

    if (tripType === "hourly") {
      message += `Number of Hours: ${whereTo}`;
    } else {
      message += `Where To: ${whereTo}`;
    }

    message += `

What price would you offer?`;

    if (
      whereFrom &&
      (tripType === "hourly" ? whereTo : true) &&
      date &&
      time &&
      passengers &&
      baggage
    ) {
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
      setIsValidated(false); // Reset validation state
    } else {
      setIsValidated(true); // Set validation state to true to highlight empty fields
    }
  };

  return (
    <div className="bg-amber-50 bg-opacity-10 p-6 md:p-8 rounded-xl font-abhaya">
      <div className="flex space-x-2 mb-4">
        <button
          className={`flex-1 py-2 rounded-xl text-lg font-abhaya shadow-gray-200 shadow-sm ${
            tripType === "one-way"
              ? "bg-white text-black shadow-sm shadow-gray-200"
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
        {/* Where From Input with Dropdown */}
        <div className="relative">
          <input
            type="text"
            placeholder="Where From?"
            className={`w-full bg-black text-white border ${
              isValidated && !whereFrom ? "border-red-500" : "border-gray-300"
            } p-4 rounded-md focus:outline-none focus:border-gray-500`}
            value={whereFrom}
            onChange={(e) => {
              setWhereFrom(e.target.value);
              setShowFromDropdown(true);
            }}
            onFocus={() => setShowFromDropdown(true)}
          />
          {showFromDropdown && whereFrom && (
            <ul className="absolute z-10 w-full bg-white text-black border border-gray-300 mt-1 max-h-60 overflow-y-auto rounded-md">
              {filteredFromLocations.map((location) => (
                <li
                  key={location}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSelectFromLocation(location)}
                >
                  {location}
                </li>
              ))}
            </ul>
          )}
        </div>
        {tripType === "hourly" ? (
          <input
            type="number"
            placeholder="Number of Hours"
            className={`w-full bg-black text-white border ${
              isValidated && !whereTo ? "border-red-500" : "border-gray-300"
            } p-4 rounded-md focus:outline-none focus:border-gray-500`}
            value={whereTo}
            onChange={(e) => setWhereTo(e.target.value)}
          />
        ) : (
          <div className="relative">
            <input
              type="text"
              placeholder="Where To?"
              className={`w-full bg-black text-white border ${
                isValidated && !whereTo ? "border-red-500" : "border-gray-300"
              } p-4 rounded-md focus:outline-none focus:border-gray-500`}
              value={whereTo}
              onChange={(e) => {
                setWhereTo(e.target.value);
                setShowToDropdown(true);
              }}
              onFocus={() => setShowToDropdown(true)}
            />
            {showToDropdown && whereTo && (
              <ul className="absolute z-10 w-full bg-white text-black border border-gray-300 mt-1 max-h-60 overflow-y-auto rounded-md">
                {filteredToLocations.map((location) => (
                  <li
                    key={location}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSelectToLocation(location)}
                  >
                    {location}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        <input
          type="date"
          className={`w-full bg-black ${
            date ? "text-white" : "text-gray-400"
          }  border ${
            isValidated && !date ? "border-red-500" : "border-gray-300"
          } p-4 rounded-md focus:outline-none focus:border-gray-500`}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          placeholder="Time"
          className={`w-full bg-black text-white border ${
            isValidated && !time ? "border-red-500" : "border-gray-300"
          } p-4 rounded-md focus:outline-none focus:border-gray-500`}
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of Passengers"
          className={`w-full bg-black text-white border ${
            isValidated && !passengers ? "border-red-500" : "border-gray-300"
          } p-4 rounded-md focus:outline-none focus:border-gray-500`}
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
        />
        <input
          type="number"
          placeholder="Number of Baggage"
          className={`w-full bg-black text-white border ${
            isValidated && !baggage ? "border-red-500" : "border-gray-300"
          } p-4 rounded-md focus:outline-none focus:border-gray-500`}
          value={baggage}
          onChange={(e) => setBaggage(e.target.value)}
        />
      </div>
      <Button
        buttonColor="bg-gradient-to-tl   to-primary-default from-amber-950"
        buttonWidth="w-full"
        textColor="text-white"
        shadowColor="shadow-amber-900"
        shadowSpread="shadow-md"
        buttonText="Get My Price"
        onButtonClick={navigateToWhatsapp}
      />
    </div>
  );
};

export default BookingForm;
