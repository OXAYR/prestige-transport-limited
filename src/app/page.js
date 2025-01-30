/** @format */

import AboutUs from "./_components/AboutUs";
import Footer from "./_components/Footer";
import GetQoute from "./_components/GetQoute";
import HeroSection from "./_components/HeroSection";
import NavHeader from "./_components/NavHeader";
import OurChauffeurs from "./_components/OurChauffeurs";
import OurMission from "./_components/OurMission";
import RidePricing from "./_components/RidePricing";
import Services from "./_components/Services";

// import Image from "next/image";

export default function Home() {
  return (
    <div className=" font-abhaya">
      <div>
        <HeroSection
          heroTitle="The Prestige Transport Limited Company"
          heroDetails="Specialized in Providing High-end, Luxury Transport Services in all over the London "
          heroBackgroundImage="/hero.svg"
        />
      </div>
      <div className="lg:px-32 px-8  pt-32 bg-black ">
        <AboutUs
          aboutUsDetails="At Prestige Transport Limited, We Specialize in Providing High-end, Luxury
Airport Transfer Services to and From All Major Airports in London, Including Heathrow,
Gatwick, London City, Luton, and Stansted. Whether You Are a Business Executive, a
Celebrity, or a Discerning Traveler, We Ensure a Seamless, Comfortable,
and Exclusive Travel Experience"
          aboutUsHeading="We Are A Prestige Transport Limited Car Hire Service"
          buttonText="Contact Us"
          aboutUsImage="/about-us-car.svg"
          aboutUsQuestionRequired={true}
        />
      </div>
      <div>
        <Services />
        <RidePricing />
        <OurMission />
        {/* No need if demanded by the client then will show it */}
        {/* <OurChauffeurs /> */}

        <GetQoute />
        <Footer />
      </div>
    </div>
  );
}
