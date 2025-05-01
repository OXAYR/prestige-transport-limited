/** @format */

import AboutUs from "@/app/_components/AboutUs";
import Footer from "@/app/_components/Footer";
import GetQoute from "@/app/_components/GetQoute";
import HeroSection from "@/app/_components/HeroSection";
import NavHeader from "@/app/_components/NavHeader";
import RidePricing from "@/app/_components/RidePricing";
import React from "react";

export const metadata = {
  title: "Event Chauffeur Services | Weddings, Parties & Special Occasions",
  description: `Make your special events unforgettable with our luxury chauffeur services. Perfect for weddings, parties, and other significant occasions in and around London.`,
};

function Events() {
  return (
    <div className=" font-abhaya">
      <div>
        <HeroSection
          heroTitle="Prestige Transport For Events"
          heroDetails=" Make your special event unforgettable with a luxury ride. From weddings to anniversaries or business celebrations, we provide elegant transport that enhances the occasion."
          heroBackgroundImage="/event-hero.svg"
        />
      </div>
      <div className="lg:px-32 px-8  pt-32  bg-gradient-to-br from-black from-50% to-amber-950 ">
        <AboutUs
          aboutUsDetails="Our dedicated events team can provide premium chauffeur services for any occasion — global or local, big or small, personalized or standardized, we’ve got you covered:
                            Award ceremonies or gala dinners
                            Meetings and conferences
                            Roadshows
                            Private events
                            VIP services
                            Sporting events"
          aboutUsHeading="Our Event Team"
          buttonText="Contact Us"
          aboutUsImage="/event-team.svg"
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

export default Events;
