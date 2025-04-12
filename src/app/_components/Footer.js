/** @format */

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black to-amber-950 text-white py-5 px-6 md:px-20 font-abhaya">
      <div className="flex flex-col md:flex-row justify-between items-center mt-7 mb-10">
        <div className="lg:px-12 px-0 w-4/6 text-center lg:text-left ">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <img src="/logo.svg" alt="Logo" className="" />
            <h2 className="text-5xl font-bold text-primary-default">
              Prestige
            </h2>
          </div>
        </div>
        <div className="sm:text-2xl mt-5 sm:mt-0  text-center font-bold text-primary-default ">
          For Fastest Service: <span className="lg:mx-4"> +447857181685 </span>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-end  gap-8 text-center md:text-left">
        {/* Our Cars */}
        <div>
          <h3 className="md:text-2xl text-lg font-semibold">Our Cars</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li className=" cursor-pointer">Mercedes S-Class</li>
            <li className=" cursor-pointer">Mercedes E-Class</li>
            <li className=" cursor-pointer">BMW Series 5</li>
            <li className=" cursor-pointer">BMW Series 7</li>
            <li className=" cursor-pointer">Audi A6</li>
          </ul>
        </div>

        <div>
          <h3 className="md:text-2xl text-lg font-semibold">Our Services</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li className=" cursor-pointer">Home</li>

            <li className=" cursor-pointer">Airport Transfers</li>
            <li className=" cursor-pointer">Business</li>
            <li className=" cursor-pointer">Events</li>
          </ul>
        </div>

        {/* Subscription */}
        <div className="w-full">
          <div className="w-full my-4">
            <ul className="mt-2 space-y-1  text-gray-300 ">
              <li className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 pb-6 sm:pb-0 ">
                <div className="flex items-center gap-2">
                  <span className="material-icons">location_on</span>
                </div>
                <div className=" font-Abhaya">
                  2038 2nd Avenue, Las Vegas, United States
                </div>
              </li>
              <li className="flex flex-col sm:flex-row items-center justify-center  sm:justify-start gap-4 pb-6 sm:pb-0">
                <div className="flex items-center ">
                  <span className="material-icons text-xs">phone</span>
                </div>
                <div className=" font-Abhaya">02088776670, +447857181685</div>
              </li>
              <li className="flex  flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
                <div className="flex items-center gap-2">
                  <span className="material-icons">email</span>
                </div>
                <div className=" font-Abhaya">
                  prestigetransport77@gmail.com
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-amber-600 mt-6 border-t border-black pt-4">
        Copyright © 2025 Prestige. All rights reserved.
      </div>
    </footer>
  );
}
