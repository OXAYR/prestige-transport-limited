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
      <div className="lg:px-32 px-8  pt-32 bg-black ">
        <AboutUs
          aboutUsDetails="You will be met by one of our uniformed professional chauffeurs who will be waiting to welcome you when you step out of the arrivals hall. He will be holding a board with your name on it. You will expect us to be discreet at all times. If you prefer we can arrange a meeting point and phone or text you when you are in the baggage hall."
          aboutUsHeading="Your Safety Is With Us"
          buttonText="Contact Us"
          aboutUsImage="/safety.svg"
          aboutUsQuestionRequired={false}
        />
      </div>
      <div>
        <RidePricing />

        <GetQoute />
        <Footer />
      </div>
    </div>
  );
}

export default AirportService;
