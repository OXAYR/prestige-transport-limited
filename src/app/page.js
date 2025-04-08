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
import WhyChooseUs from "./_components/WhyChooseUs";

// import Image from "next/image";

export default function Home() {
  return (
    <div className=" font-abhaya">
      <div>
        <HeroSection
          heroTitle="Prestige Transport Limited Company"
          heroDetails="Specialising in Providing High-end, Luxury Transport Services across the UK "
          heroBackgroundImage="/hero.svg"
        />
      </div>
      <div className="lg:px-32 px-8  pt-32 bg-gradient-to-br from-black from-50% to-amber-950 ">
        <AboutUs
          aboutUsDetails="At Prestige Transport Limited, We Specialize in Providing High-end, Luxury
Airport Transfer Services to and From All Major Airports in London, Including Heathrow,
Gatwick, London City, Luton, and Stansted. Whether You Are a Business Executive, a
Celebrity, or a Discerning Traveler, We Ensure a Seamless, Comfortable,
and Exclusive Travel Experience"
          aboutUsHeading="We Are Prestige Transport Limited Car Hire Service"
          buttonText="Contact Us"
          aboutUsImage="/about-us-car.svg"
          aboutUsQuestionRequired={true}
        />
      </div>
      <div>
        <Services />
        <RidePricing />
        <WhyChooseUs />
        {/* <OurMission /> */}
        {/* No need if demanded by the client then will show it */}
        {/* <OurChauffeurs /> */}

        <GetQoute />
      </div>
    </div>
  );
}
