/** @format */

"use client";
/** @format */

import React, { useState } from "react";

function NavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "Airport Service", "business", "Events", "About"];

  return (
    <div className="bg-black  md:bg-transparent flex justify-between items-center px-6 md:px-32 py-4">
      {/* Logo Section */}
      <div className="flex items-end gap-2">
        <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
        <div className="text-primary-default text-2xl font-medium font-abhaya">
          Prestige
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center gap-8">
        {navItems.map((item) => (
          <div
            key={item}
            className="text-white text-lg font-medium hover:border-b-2 hover:border-gray-300 transition cursor-pointer font-abhaya"
          >
            {item}
          </div>
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
            <div
              key={item}
              className="text-white text-lg font-medium hover:border-b-2 hover:border-gray-300 transition cursor-pointer font-abhaya"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavHeader;
