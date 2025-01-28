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
        <NavHeader />
        <HeroSection />
      </div>
      <div className="lg:px-32 px-8  pt-32 bg-black ">
        <AboutUs />
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
