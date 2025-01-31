/** @format */
"use client";
import HeroSection from "@/app/_components/HeroSection";
import React from "react";

function About() {
  return (
    <div className=" font-abhaya">
      <div>
        <HeroSection
          heroTitle="About Us"
          heroDetails=" At Prestige Transport Limited, We Specialize in Providing High-end, Luxury
Airport Transfer Services to and From All Major Airports in London, Including Heathrow,
Gatwick, London City, Luton, and Stansted. Whether You Are a Business Executive, a
Celebrity, or a Discerning Traveler, We Ensure a Seamless, Comfortable,
and Exclusive Travel Experience "
          heroBackgroundImage="/about-us-banner-mask.svg"
        />
      </div>
    </div>
  );
}

export default About;
