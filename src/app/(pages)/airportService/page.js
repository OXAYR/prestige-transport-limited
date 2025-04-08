/** @format */

import AboutUs from "@/app/_components/AboutUs";
import Footer from "@/app/_components/Footer";
import GetQoute from "@/app/_components/GetQoute";
import HeroSection from "@/app/_components/HeroSection";
import NavHeader from "@/app/_components/NavHeader";
import RidePricing from "@/app/_components/RidePricing";
import React from "react";

function AirportService() {
  return (
    <div className=" font-abhaya">
      <div>
        <HeroSection
          heroTitle="Airport Transfers"
          heroDetails=" Whether you're arriving or departing from any of London's major airports, we ensure a smooth and comfortable journey. We'll meet you at the designated pick-up point and take you directly to your destination or to your flight with no stress or delays. "
          heroBackgroundImage="/airport-hero.svg"
        />
      </div>
      <div className="lg:px-32 px-8  pt-32  bg-gradient-to-br from-black from-50% to-amber-950 ">
        <AboutUs
          aboutUsDetails="Whether arriving in or departing from the UK, Prestige Transport Limited ensures a stress-free airport transfer experience. Available at major UK airports, our reliable service eliminates the hassle of public transport or local taxis. Our professional chauffeurs track your flight for any delays and adjust accordingly. With options like First Class for added luxury, we cater to all needs. Booking is quick via our website—just provide your pickup and destination, choose your vehicle, and confirm the fare with no hidden charges. Prestige Transport Limited offers a seamless, comfortable, and transparent airport transfer experience."
          aboutUsHeading="Seamless Airport Transfers "
          buttonText="Contact Us"
          aboutUsImage="/safety.svg"
          aboutUsQuestionRequired={false}
        />
      </div>
      <div>
        <RidePricing />
        <GetQoute />
      </div>
    </div>
  );
}

export default AirportService;
