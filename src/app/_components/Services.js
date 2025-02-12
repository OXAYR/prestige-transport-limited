/** @format */
"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/airport-service.svg",
      title: "Airport Pick-Up & Drop-Off",
      path: "/airportService",
      description:
        "Whether you're arriving or departing from any of London's major airports, we ensure a smooth and comfortable journey. We'll meet you at the designated pick-up point and take you directly to your destination or to your flight with no stress or delays.",
    },
    {
      image: "/business-service.svg",
      title: "Corporate and Executive Transfers",
      path: "/business",
      description:
        "Tailored for business professionals who need to travel in style and comfort. Our luxury vehicles provide a quiet and productive environment for work on the go, complete with Wi-Fi, charging ports, and more.",
    },
    {
      image: "/get-qoute.svg",
      path: "/business",
      title: "VIP & Celebrity Transfers",
      description:
        "Our service is discreet and private, ensuring you receive the highest level of comfort, security, and luxury. Whether you're arriving for an important event or need to make a swift departure, we ensure a seamless experience from start to finish.",
    },
    {
      image: "/about-us-banner.svg",
      title: "Long-Distance Transfers",
      path: "/business",
      description:
        "In addition to airport transfers, we offer long-distance journeys to other parts of the UK or Europe. Our luxury cars are equipped to ensure a relaxed and pleasant experience, with options for refreshments and entertainment.",
    },
    {
      image: "/event-service.svg",
      title: "Special Occasions",
      path: "/events",
      description:
        "Make your special event unforgettable with a luxury ride. From weddings to anniversaries or business celebrations, we provide elegant transport that enhances the occasion.",
    },
  ];

  const router = useRouter();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const navigateToRoute = (route) => {
    router.push(route);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // Auto slide every 10 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[600px] lg:h-[500px] overflow-hidden">
      <div
        className="relative w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full flex-shrink-0 relative">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 bg-amber-950 bg-opacity-50 flex justify-center items-center px-2 w-full">
                <button
                  className="lg:w-1/6 w-full flex justify-center"
                  onClick={prevSlide}
                >
                  <img
                    src="/left-arrow.svg"
                    alt="Left Arrow"
                    className="w-8 md:w-auto"
                  />
                </button>
                <div className="flex flex-col justify-center gap-4 items-center text-center text-white">
                  <h2 className="text-3xl lg:text-4xl font-bold">
                    {slide.title}
                  </h2>
                  <p className="mt-4 w-full lg:w-2/4 text-lg lg:text-xl">
                    {slide.description}
                  </p>
                  <div className="w-full lg:w-1/5">
                    <Button
                      buttonColor="bg-gradient-to-tl   to-primary-default from-amber-950"
                      buttonWidth="w-full"
                      textColor="text-white"
                      shadowColor="shadow-amber-800"
                      shadowSpread="shadow-md"
                      buttonText="Book Now"
                      onButtonClick={() => navigateToRoute(slide.path)}
                    />
                  </div>
                </div>
                <button
                  className="lg:w-1/6 w-full flex justify-center"
                  onClick={nextSlide}
                >
                  <img
                    src="/right-arrow.svg"
                    alt="Right Arrow"
                    className="w-8 md:w-auto"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
