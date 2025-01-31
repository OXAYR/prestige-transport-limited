/** @format */

import AboutUs from "@/app/_components/AboutUs";
import Footer from "@/app/_components/Footer";
import GetQoute from "@/app/_components/GetQoute";
import HeroSection from "@/app/_components/HeroSection";
import NavHeader from "@/app/_components/NavHeader";
import RidePricing from "@/app/_components/RidePricing";
import React from "react";

function Business() {
  return (
    <div className=" font-abhaya">
      <div>
        <HeroSection
          heroTitle="Business Travel"
          heroDetails="Tailored for business professionals who need to travel in style and comfort. Our luxury vehicles provide a quiet and productive environment for work on the go, complete with Wi-Fi, charging ports, and more."
          heroBackgroundImage="/business-hero.svg"
        />
      </div>
      <div className="lg:px-32 px-8  pt-32 bg-black ">
        <AboutUs
          aboutUsDetails="Whether you have a series of meetings throughout thee day, a business lunch, or you need an important client to be met at one of London's Airports we can provide you with a chauffeur driven Mercedes S Class or a Mercedes V Class luxury people carrier. With all the pressures of business meetings it makes sense to leave the driving and parking to someone else, so you can concentrate on the business day ahead."
          aboutUsHeading="We Provide Comfort"
          buttonText="Contact Us"
          aboutUsImage="/comfort.svg"
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

export default Business;
