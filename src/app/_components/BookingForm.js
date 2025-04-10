/** @format */

"use client";
import { useState } from "react";
import Button from "./Button";
import { locations } from "../_data/londonLocations";
import { openWhatsAppChat } from "../_utills/whatsappService";

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
  const [showModal, setShowModal] = useState(false);

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

  const handleGetPriceClick = () => {
    if (whereFrom && whereTo && date && time && passengers && baggage) {
      setShowModal(true);
    } else {
      setIsValidated(true);
    }
  };

  const handleNavigateToWhatsapp = (region) => {
    setShowModal(false);
    openWhatsAppChat("bookingForm", {
      whereFrom,
      whereTo,
      date,
      time,
      passengers,
      baggage,
      region,
    });
  };

  return (
    <div className="bg-amber-50 bg-opacity-10 p-6 md:p-8 rounded-xl font-abhaya">
      <div className="space-y-4 mt-5">
        {/* Where From Input with Dropdown */}
        <div className="relative">
          <input
            type="text"
            placeholder="Choose Starting Point"
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
            placeholder="Choose Destination"
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
        <div className="relative">
          <input
            type="date"
            className={`w-full bg-black text-white border ${
              isValidated && !date ? "border-red-500" : "border-gray-300"
            } p-4 rounded-md focus:outline-none focus:border-gray-500 appearance-none`}
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
            pattern="\d{4}-\d{2}-\d{2}"
          />
        </div>
        <div className="relative">
          <input
            type="time"
            className={`w-full bg-black text-white border ${
              isValidated && !time ? "border-red-500" : "border-gray-300"
            } p-4 rounded-md focus:outline-none focus:border-gray-500 appearance-none`}
            value={time}
            step="1800"
            onChange={(e) => setTime(e.target.value)}
            pattern="[0-9]{2}:[0-9]{2}"
          />
        </div>

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

      {showModal && (
        <div className="fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50 font-abhaya">
          <div className=" rounded-md shadow-lg  text-center  bg-white text-amber-950">
            <div className="flex justify-end m-2">
              <button
                className="flex bg-amber-950  rounded-full text-white  px-2 "
                onClick={() => setShowModal(false)}
              >
                x
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Select Your Region</h2>
              <p className="mb-4">
                Please select your travel region to proceed with booking.
              </p>
            </div>

            <div className="flex flex-col justify-between items-center">
              <button
                className="w-full   p-3 rounded-md h-32 hover:bg-amber-50 font-bold"
                onClick={() => handleNavigateToWhatsapp("USA")}
              >
                Traveling from USA
              </button>
              <button
                className="w-full   p-3 rounded-md h-32 hover:bg-amber-50 font-bold"
                onClick={() => handleNavigateToWhatsapp("UK")}
              >
                Traveling within UK
              </button>
            </div>
          </div>
        </div>
      )}

      <Button
        buttonColor="bg-gradient-to-tl to-primary-default from-amber-950"
        buttonWidth="w-full"
        textColor="text-white"
        shadowColor="shadow-amber-900"
        shadowSpread="shadow-md"
        buttonText="Get My Price"
        onButtonClick={handleGetPriceClick}
      />
    </div>
  );
};

export default BookingForm;
