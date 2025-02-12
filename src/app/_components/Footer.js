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
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 text-center md:text-left">
        {/* Our Cars */}
        <div>
          <h3 className="md:text-2xl text-lg font-semibold">Our Cars</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>Mercedes S-Class</li>
            <li>Mercedes C-Class</li>
            <li>Mercedes E-Class</li>
            <li>BMW Series 5</li>
            <li>BMW Series 7</li>
            <li>Audi A6</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="md:text-2xl text-lg font-semibold">Services</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>By The Hour</li>
            <li>One Way</li>
            <li>Airport</li>
            <li>Business</li>
            <li>Events</li>
          </ul>
        </div>
        <div>
          <h3 className="md:text-2xl text-lg font-semibold">Our Company</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>Home</li>

            <li>Airport Transfers</li>
            <li>Business</li>
            <li>Events</li>
          </ul>
        </div>

        {/* Subscription */}
        <div className="w-full">
          <div className="w-full my-4">
            <ul className="mt-2 space-y-1 text-gray-300 w-screen">
              <li className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="material-icons">location_on</span>
                </div>
                <div className=" font-Abhaya">
                  2038 2nd Avenue, Las Vegas, United States
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex items-center ">
                  <span className="material-icons text-xs">phone</span>
                </div>
                <div className=" font-Abhaya">02088776670, +447857181685</div>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="material-icons">email</span>
                </div>
                <div className=" font-Abhaya">
                  prestigetransport77@gmail.com
                </div>
              </li>
            </ul>
          </div>
          <h3 className="text-lg font-semibold">Join Us Now!</h3>
          <div className="mt-2 w-full flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full sm:w-96 bg-black text-white border border-gray-600 rounded-md sm:rounded-l-md sm:rounded-r-none"
            />
            <button className="bg-gradient-to-tl to-primary-default from-amber-950 shadow shadow-amber-900 text-white px-4 py-2 rounded-md sm:rounded-r-md sm:rounded-l-none mt-2 sm:mt-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-amber-600 mt-6 border-t border-black pt-4">
        Copyright © 2025 Prestige. All rights reserved.
      </div>
    </footer>
  );
}
