/** @format */

"use client";
import Link from "next/link";
/** @format */

import React, { useEffect, useState } from "react";

function NavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "Airport Service", "business", "Events", "About"];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change background color after scrolling 50px (adjust as needed)
      if (window.scrollY > 1500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    console.log("wokign");

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` hover:bg-black flex justify-between items-center px-6 md:px-32 py-4 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-end gap-2">
        <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
        <Link
          href={`/`}
          className="text-primary-default text-2xl font-medium font-abhaya"
        >
          Prestige
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center gap-8 capitalize">
        {navItems.map((item) => (
          <Link
            key={item}
            className="text-white text-lg font-medium hover:border-b-2 hover:border-gray-300 transition cursor-pointer font-abhaya"
            href={`/${
              item.toLowerCase().includes("airport service")
                ? "airportService"
                : item.toLowerCase().includes("home")
                ? ""
                : item.toLowerCase()
            }`}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="flex md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          {isMenuOpen ? "×" : "≡"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item}
              className="text-white text-lg font-medium hover:border-b-2 hover:border-gray-300 transition cursor-pointer font-abhaya"
              href={`/${
                item.toLowerCase().includes("airport service")
                  ? "airportService"
                  : item.toLowerCase().includes("home")
                  ? ""
                  : item.toLowerCase()
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavHeader;
