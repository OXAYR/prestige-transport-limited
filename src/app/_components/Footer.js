/** @format */

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-br from-black to-amber-950 text-white py-5 px-6 md:px-20 font-abhaya">
      <div className="flex justify-between items-center  mt-7 mb-10">
        <div className="md:px-12 px-0 w-full">
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <img src="/logo.svg" alt="Logo" className="" />
            <h2 className="text-5xl font-bold text-primary-default text-center md:text-left">
              Prestige
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center md:text-left  grid grid-cols-1 md:grid-cols-4 gap-8">
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
            {/* <li>Tours</li>
            <li>Weddings</li> */}
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="md:text-2xl text-lg font-semibold">Our Company</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>Home</li>

            <li>Airport Transfers</li>
            <li>Business</li>
            <li>Events</li>
          </ul>
        </div>
        <div className=" flex flex-col w-full  ">
          <div className="md:w-1/2">
            <h3 className="text-lg font-semibold">Join Us Now!</h3>
            <div className="mt-2 w-full flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-full sm:w-96 bg-black text-white border border-gray-600 rounded-l-md"
              />
              <button className="bg-gradient-to-tl   to-primary-default from-amber-950 shadow shadow-amber-900 text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-amber-600 mt-6 border-t border-black pt-4">
        Copyright © 2025 Prestige. All rights reserved.
      </div>
    </footer>
  );
}
