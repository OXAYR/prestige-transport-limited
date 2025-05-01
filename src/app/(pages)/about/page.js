/** @format */
"use client";
import GetQoute from "@/app/_components/GetQoute";
import HeroSection from "@/app/_components/HeroSection";
import ServiceAndSupport from "@/app/_components/ServiceAndSupport";
import React from "react";

export const metadata = {
  title: "About Prestige Transport | Your Trusted Transport Service",
  description: `Learn more about Prestige Transport, London's premier provider of luxury transport services. Discover our commitment to excellence and customer satisfaction.`,
};

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

      <ServiceAndSupport />

      <GetQoute />
    </div>
  );
}

export default About;
