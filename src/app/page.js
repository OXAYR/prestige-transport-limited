/** @format */

import AboutUs from "./_components/AboutUs";
import Footer from "./_components/Footer";
import GetQoute from "./_components/GetQoute";
import HeroSection from "./_components/HeroSection";
import NavHeader from "./_components/NavHeader";
import OurChauffeurs from "./_components/OurChauffeurs";
import OurMission from "./_components/OurMission";
import RidePricing from "./_components/RidePricing";

// import Image from "next/image";

export default function Home() {
  return (
    <div className=" font-abhaya">
      <div>
        <HeroSection
          heroTitle="The Best Prestige Transport Company"
          heroDetails=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
            consectetur adipiscing elit. "
          heroBackgroundImage="/hero.svg"
        />
      </div>
      <div className="lg:px-32 px-8  pt-32 bg-black ">
        <AboutUs
          aboutUsDetails="Based in London, meeting the needs of our valued clients. Having been in the industry for more than 20 years, we have established a name for our reliability and efficient service. We constantly seek to provide client satisfaction as one of our main goals."
          aboutUsHeading="We Are A Chauffeur Driven Car Hire Service"
          buttonText="Contact Us"
          aboutUsImage="/about-us-car.svg"
          aboutUsQuestionRequired={true}
        />
      </div>
      <div>
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
