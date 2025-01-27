/** @format */

import React from "react";

function OurChauffeurs() {
  return (
    <div className="my-24">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl text-center font-bold">
          Our Expert Chauffeurs
        </h1>
        <hr className="w-20 border-2 mt-2 border-primary-default" />
      </div>
      <div className="flex justify-center my-10 ">
        <div className="w-1/2 text-balance text-center text-lg font-extralight tracking-wider">
          All of our chauffeurs are trained and experienced in this industry
          having been in it for at least 5 years. They seek to be on time,
          provide a luxury service and cater to all the needs of their clients.
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center my-10">
          <div>
            <img />
          </div>
          <div className="text-center"> John Doe</div>
          <div className="text-center"> Chauffeur</div>
        </div>
      </div>
    </div>
  );
}

export default OurChauffeurs;
