/** @format */

import React from "react";

function WhyChooseUs() {
  const features = [
    {
      icon: "group",
      title: "Professional & Experienced Chauffeurs",
      text: "Our chauffeurs are highly trained, professional, and discrete. With extensive knowledge of London’s roads and traffic patterns, they ensure the most efficient routes for timely arrivals and departures. Their courteous and respectful service guarantees a VIP experience.",
    },
    {
      icon: "watch_later",
      title: "24/7 Availability",
      text: "We operate 24 hours a day, 7 days a week, to accommodate your travel schedule, no matter the time of day or night. Our team is always ready to assist, ensuring a hassle-free experience, whether it’s a late-night arrival or an early morning departure.",
    },
    {
      icon: "person_pin_circle",
      title: "Personalized Service",
      text: (
        <>
          We understand that each traveler has unique needs. Our services are
          fully customizable, including <strong>meet-and-greet</strong> at the
          airport with name signage and assistance with luggage.
        </>
      ),
    },
    {
      icon: "alarm_on",
      title: "Timely & Reliable",
      text: "We pride ourselves on our punctuality. Our sophisticated tracking systems allow us to monitor flight times and adjust pickup schedules accordingly, ensuring that we are always on time to meet you, even in the case of flight delays.",
    },
    {
      icon: "safety_check",
      title: "Safety & Comfort",
      text: "We prioritize the safety of our passengers. All our drivers are background-checked and insured, and our vehicles are regularly serviced to meet the highest standards. You can relax knowing you're in safe hands.",
    },
    {
      icon: "beenhere",
      title: "Instant Confirmation",
      text: "Booking your luxury car transfer with Prestige Transport Limited is easy and hassle-free. Simply visit our website, fill out the booking form, and receive instant confirmation along with your chauffeur details and vehicle information",
    },
  ];

  return (
    <div className=" to-black from-amber-950 bg-gradient-to-bl px-8 md:px-16 lg:px-32 py-16 md:py-20 lg:py-28 font-abhaya">
      {/* Heading Section */}
      <div className="flex flex-col justify-center items-center pb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Why Choose Us Over Others?
        </h1>
        <hr className="w-32 border-2 mt-2 border-primary-default" />
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 my-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="border-2 border-white hover:bg-white hover:text-amber-950 text-white rounded-xl flex flex-col items-center gap-5 text-center transition-all duration-300 ease-in-out px-8 md:px-10 py-10 md:py-12"
          >
            <div className="material-icons text-6xl md:text-7xl lg:text-8xl">
              {item.icon}
            </div>
            <h2 className="text-xl md:text-2xl font-bold mt-2">{item.title}</h2>
            <p className="text-base md:text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
