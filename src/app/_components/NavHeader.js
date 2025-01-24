/** @format */

import React from "react";

function NavHeader() {
  const navItems = ["Home", "About Us", "Airport Service", "Cars"];

  return (
    <div className="bg-black flex justify-between px-32 py-4">
      <div className="flex items-end w-1/6 gap-2">
        <img src="/logo.svg" />
        <div className=" text-primary-default text-2xl font-medium font-abhaya">
          Prestige
        </div>
      </div>
      <div className="flex justify-between items-center gap-4 w-1/4">
        {navItems.map((item) => {
          return (
            <div
              key={item}
              className="text-white text-lg font-medium hover:border-b-2 hover:border-gray-300 transition cursor-pointer font-abhaya"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavHeader;
