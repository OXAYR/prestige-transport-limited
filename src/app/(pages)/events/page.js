/** @format */

import AboutUs from "@/app/_components/AboutUs";
import Footer from "@/app/_components/Footer";
import GetQoute from "@/app/_components/GetQoute";
import HeroSection from "@/app/_components/HeroSection";
import NavHeader from "@/app/_components/NavHeader";
import RidePricing from "@/app/_components/RidePricing";
import React from "react";

function Events() {
  return (
    <div className=" font-abhaya">
      <div>
        <HeroSection
          heroTitle="Prestige Transport For Events"
          heroDetails=" Setting the standard for exceptional service and sustainability"
          heroBackgroundImage="/event-hero.svg"
        />
      </div>
      <div className="lg:px-32 px-8  pt-32 bg-black ">
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
        <Footer />
      </div>
    </div>
  );
}

export default Events;
