/** @format */

import AboutUs from "./_components/AboutUs";
import HeroSection from "./_components/HeroSection";
import NavHeader from "./_components/NavHeader";

// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <NavHeader />
        <HeroSection />
      </div>
      <div className="px-32 pt-32 bg-black ">
        <AboutUs />
      </div>
    </div>
  );
}
