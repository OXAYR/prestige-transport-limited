/** @format */
import React from "react";

export default function ServiceAndSupport() {
  return (
    <div className="lg:px-32 px-8  py-32 bg-gradient-to-br from-black from-50% to-amber-950 ">
      <div className=" flex flex-col justify-center items-center gap-16">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl  font-bold text-white">
            Our Guarantee
          </h1>
          <hr className="w-32 border-2 mt-2 border-primary-default" />
        </div>
        <div className=" lg:w-2/3 sm:w-1/2 w-full">
          <div className=" text-white  text-xl">
            At Prestige Transport Limited, your satisfaction is our top
            priority. We guarantee a seamless, luxurious experience from the
            moment you book your ride until you reach your destination. Whether
            you’re traveling for business, pleasure, or anything in between,
            we’re here to make your journey unforgettable.
          </div>
          <div className=" text-white mt-4 text-xl">
            This portfolio is designed to give potential clients a complete
            overview of your services and establish trust. Feel free to
            customize this template with your
          </div>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center gap-10 mt-32">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-5xl  font-bold text-white">
            Contact us
          </h1>
          <hr className="w-32 border-2 mt-2 border-primary-default" />
        </div>
        <div className=" lg:w-2/3 sm:w-1/2 w-full mt-4">
          <div className=" text-white  text-xl text-center">
            For inquiries or to make a booking, please contact us:
          </div>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="   w-full">
            <div className="   bg-transparent border border-amber-50 text-white w-full sm:px-10 py-6 px-4 rounded-lg hover:bg-amber-50 hover:text-amber-950 flex justify-between items-center text-base gap-10 ">
              <div className="flex items-center gap-2">
                <span className="material-icons">phone</span>
              </div>
              <div className=" font-Abhaya">02088776670, +447857181685</div>
            </div>
          </div>
          <div className="   w-full">
            <div className="   bg-transparent border border-amber-50 text-white w-full sm:px-10 py-6 px-4  rounded-lg hover:bg-amber-50 hover:text-amber-950 flex justify-between items-center text-base gap-10 ">
              <div className="flex items-center gap-2">
                <span className="material-icons">email</span>
              </div>
              <div className=" font-Abhaya">prestigetransport77@gmail.com</div>
            </div>
          </div>
          <div className="   w-full">
            <div className="   bg-transparent border border-amber-50 text-white w-full sm:px-10 py-6 px-4  rounded-lg hover:bg-amber-50 hover:text-amber-950 flex justify-between items-center text-base gap-10 ">
              <div className="flex items-center gap-2">
                <span className="material-icons">location_on</span>
              </div>
              <div className=" font-Abhaya">
                2038 2nd Avenue, Las Vegas, United States
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
