/** @format */

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Get current route
import React, { useEffect, useState } from "react";

function NavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get current route

  // Mapping nav items with their corresponding paths
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Airport Service", path: "/airportService" },
    { name: "Business", path: "/business" },
    { name: "Events", path: "/events" },
    { name: "About", path: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` hover:bg-gradient-to-tr from-70% from-black to-amber-950 flex justify-between items-center px-6 lg:px-32 py-4 transition-all duration-300 z-40 ${
        isScrolled
          ? " bg-gradient-to-tr from-70% from-black to-amber-950 shadow-md "
          : "bg-transparent"
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
        <Link
          href="/"
          className="text-primary-default text-2xl font-medium font-abhaya"
        >
          Prestige
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-between items-center gap-8 capitalize">
        {navItems.map(({ name, path }) => (
          <Link
            key={name}
            href={path}
            className={`text-white text-lg font-medium transition cursor-pointer font-abhaya ${
              pathname === path
                ? "border-b-2 border-primary-default" // Active route gets bottom border
                : "hover:border-b-2 hover:border-gray-300"
            }`}
          >
            {name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="flex lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          {isMenuOpen ? "×" : "≡"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-4 lg:hidden">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className={`text-white text-lg font-medium transition cursor-pointer font-abhaya ${
                pathname === path
                  ? "border-b-2 border-primary-default" // Active route gets bottom border
                  : "hover:border-b-2 hover:border-gray-300"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavHeader;
