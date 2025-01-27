/** @format */

import React from "react";

function OurMission() {
  return (
    <div className="bg-black px-32 font-abhaya text-white py-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-col my-32 w-1/2 gap-5">
          <div className=" font-bold text-primary-default text-2xl">
            Our Mission
          </div>
          <div className="text-white font-bold text-5xl">
            We are Proffessional Chauffeurs
          </div>
          <div className="text-silver-default text-lg">
            Our clients can rely on us in terms of accounting, budget planning,
            taxes etc. We provide a wide range of financial services for
            businesses and individual purposes.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div className="p-4">
              <div className="text-6xl font-bold">1500</div>
              <div className="text-silver-default text-2xl mt-2">
                Successful Rides
              </div>
            </div>
            <div className="p-4">
              <div className="text-6xl font-bold">13</div>
              <div className="text-silver-default text-2xl  mt-2">
                Years of Experience
              </div>
            </div>
            <div className="p-4">
              <div className="text-6xl font-bold">300</div>
              <div className="text-silver-default text-2xl  mt-2">
                Satisfied Partners & Clients
              </div>
            </div>
            <div className="p-4">
              <div className="text-6xl font-bold">33</div>
              <div className="text-silver-default text-2xl  mt-2">
                Company`s Offices
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/our-mission.svg" />
        </div>
      </div>
    </div>
  );
}

export default OurMission;
