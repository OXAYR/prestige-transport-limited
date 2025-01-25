/** @format */

import AboutUs from "./_components/AboutUs";
import HeroSection from "./_components/HeroSection";
import NavHeader from "./_components/NavHeader";
import RidePricing from "./_components/RidePricing";

// import Image from "next/image";

export default function Home() {
  return (
    <div className=" font-abhaya">
      <div>
        <NavHeader />
        <HeroSection />
      </div>
      <div className="px-32 pt-32 bg-black ">
        <AboutUs />
      </div>
      <div>
        <RidePricing />
      </div>
    </div>
  );
}
