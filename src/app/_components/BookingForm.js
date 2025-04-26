/** @format */

"use client";
import { useState, useEffect } from "react";
import Button from "./Button";
import { locations } from "../_data/londonLocations";
import { openWhatsAppChat } from "../_utills/whatsappService";
import fetchLocationsLondon from "../api/locations";

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

  const [fromLocations, setFromLocations] = useState([]);
  const [toLocations, setToLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const [fromLat, setFromLat] = useState(null);
  const [fromLng, setFromLng] = useState(null);
  const [fromCity, setFromCity] = useState("");

  const [toLat, setToLat] = useState(null);
  const [toLng, setToLng] = useState(null);
  const [toCity, setToCity] = useState("");

  const fetchLocations = async (query, type) => {
    setErrorMessage(""); // Reset error message
    try {
      const response = await fetchLocationsLondon(query);
      if (response && response.length > 0) {
        if (type === "from") {
          setFromLocations(response);
        } else {
          setToLocations(response);
        }
      } else {
        setErrorMessage("We cannot operate in that area.");
      }
    } catch (error) {
      console.error("Error fetching locations:", error);
      setErrorMessage("An error occurred while fetching locations.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    if (whereFrom) {
      setDebounceTimeout(
        setTimeout(() => {
          fetchLocations(whereFrom, "from");
        }, 2000) // 3 seconds debounce
      );
    }

    return () => {
      clearTimeout(debounceTimeout); // Cleanup timeout on unmount or change
    };
  }, [whereFrom]);

  useEffect(() => {
    setLoading(true);
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    if (whereTo) {
      setDebounceTimeout(
        setTimeout(() => {
          fetchLocations(whereTo, "to");
        }, 2000) // 3 seconds debounce
      );
    }

    return () => {
      clearTimeout(debounceTimeout); // Cleanup timeout on unmount or change
    };
  }, [whereTo]);

  const handleFromChange = (e) => {
    const value = e.target.value;
    setWhereFrom(value);
    if (!value) {
      setFromLat(null);
      setFromLng(null);
      setFromCity("");
      setShowFromDropdown(false);
    } else {
      setShowFromDropdown(true);
    }
  };

  const handleToChange = (e) => {
    const value = e.target.value;
    setWhereTo(value);
    if (!value) {
      setToLat(null);
      setToLng(null);
      setToCity("");
      setShowToDropdown(false);
    } else {
      setShowToDropdown(true);
    }
  };

  const handleSelectFromLocation = (location) => {
    setWhereFrom(location.formatted);
    setFromLat(location.lat);
    setFromLng(location.lon);
    setFromCity(location.city || "London");
    setShowFromDropdown(false);
  };

  const handleSelectToLocation = (location) => {
    setWhereTo(location.formatted);
    setToLat(location.lat);
    setToLng(location.lon);
    setToCity(location.city || "London");
    setShowToDropdown(false);
  };

  const handleGetPriceClick = () => {
    if (
      whereFrom &&
      whereTo &&
      !errorMessage &&
      date &&
      time &&
      passengers &&
      baggage
    ) {
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
      fromLat,
      fromLng,
      toLat,
      toLng,
      fromCity,
      toCity,
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
            onChange={handleFromChange}
            onFocus={() => setShowFromDropdown(true)}
          />
          {showFromDropdown && whereFrom && (
            <ul className="absolute z-10 w-full bg-white text-black border border-gray-300 mt-1 max-h-60 overflow-y-auto rounded-md">
              {loading ? (
                <div className="h-32 flex justify-center items-center">
                  <svg
                    aria-hidden="true"
                    className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-200  fill-amber-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              ) : fromLocations.length > 0 && !errorMessage ? (
                fromLocations.map((location, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSelectFromLocation(location)}
                  >
                    {location.formatted}
                  </li>
                ))
              ) : (
                <li className="p-2 ">
                  Apologies, our services are currently limited to the London
                  area
                </li>
              )}
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
            onChange={handleToChange}
            onFocus={() => setShowToDropdown(true)}
          />
          {showToDropdown && whereTo && (
            <ul className="absolute z-10 w-full bg-white text-black border border-gray-300 mt-1 max-h-60 overflow-y-auto rounded-md">
              {loading ? (
                <div className="h-32 flex justify-center items-center">
                  <svg
                    aria-hidden="true"
                    className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-200 fill-amber-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              ) : toLocations.length > 0 && !errorMessage ? (
                toLocations.map((location, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSelectToLocation(location)}
                  >
                    {location.formatted}
                  </li>
                ))
              ) : (
                <li className="p-2 ">
                  Apologies, our services are currently limited to the London
                  area
                </li>
              )}
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
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
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
