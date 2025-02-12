/** @format */

"use client";
import { useState } from "react";
import Button from "./Button";
import { locations } from "../_data/londonLocations";

const BookingForm = () => {
  const [tripType, setTripType] = useState("one-way");
  const [whereFrom, setWhereFrom] = useState("");
  const [whereTo, setWhereTo] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState(new Date().toISOString().split("T")[1]);
  const [baggage, setBaggage] = useState("");
  const [passengers, setPassengers] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showPassengersDropdown, setShowPassengersDropdown] = useState(false);
  const [showBaggageDropdown, setShowBaggageDropdown] = useState(false);

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
    const timeArray = time.split(":");
    let hour = parseInt(timeArray[0]);
    const minute = timeArray[1];
    let formattedTime =
      hour >= 12
        ? `${hour > 12 ? hour - 12 : hour}:${minute} PM`
        : `${hour === 0 ? 12 : hour}:${minute} AM`;

    let message = `Booking Details
  
    Where From: ${whereFrom}
    Where To: ${whereTo}
    Date: ${date}
    Time: ${formattedTime}
    Number of Passengers: ${passengers}
    Number of Baggage: ${baggage}
    `;

    message += `\n\nWhat price would you offer?`;

    if (whereFrom && whereTo && date && time && passengers && baggage) {
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
      setIsValidated(false);
    } else {
      setIsValidated(true);
    }
  };

  return (
    <div className="bg-amber-50 bg-opacity-10 p-6 md:p-8 rounded-xl font-abhaya">
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

        {/* Where To Input with Dropdown */}
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

        {/* Date and Time Fields */}
        <input
          type="date"
          className={`w-full bg-black text-white border ${
            isValidated && !date ? "border-red-500" : "border-gray-300"
          } p-4 rounded-md focus:outline-none focus:border-gray-500`}
          value={date}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          className={`w-full bg-black text-white border ${
            isValidated && !time ? "border-red-500" : "border-gray-300"
          } p-4 rounded-md focus:outline-none focus:border-gray-500`}
          value={time}
          step="1800"
          onChange={(e) => setTime(e.target.value)}
        />

        {/* Passengers Dropdown */}
        <div className="relative">
          <input
            type="text"
            placeholder="Number of Passengers"
            className={`w-full bg-black text-white border ${
              isValidated && !passengers ? "border-red-500" : "border-gray-300"
            } p-4 rounded-md focus:outline-none focus:border-gray-500`}
            value={passengers}
            readOnly
            onClick={() => setShowPassengersDropdown(!showPassengersDropdown)}
          />
          {showPassengersDropdown && (
            <ul className="absolute z-10 w-full bg-white text-black border border-gray-300 mt-1 max-h-60 overflow-y-auto rounded-md">
              {[1, 2, 3, 4].map((num) => (
                <li
                  key={num}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setPassengers(num);
                    setShowPassengersDropdown(false);
                  }}
                >
                  {num}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Baggage Dropdown */}
        <div className="relative">
          <input
            type="text"
            placeholder="Number of Baggage"
            className={`w-full bg-black text-white border ${
              isValidated && !baggage ? "border-red-500" : "border-gray-300"
            } p-4 rounded-md focus:outline-none focus:border-gray-500`}
            value={baggage}
            readOnly
            onClick={() => setShowBaggageDropdown(!showBaggageDropdown)}
          />
          {showBaggageDropdown && (
            <ul className="absolute z-10 w-full bg-white text-black border border-gray-300 mt-1 max-h-60 overflow-y-auto rounded-md">
              {[1, 2, 3, 4].map((num) => (
                <li
                  key={num}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setBaggage(num);
                    setShowBaggageDropdown(false);
                  }}
                >
                  {num}
                </li>
              ))}
            </ul>
          )}
        </div>
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
