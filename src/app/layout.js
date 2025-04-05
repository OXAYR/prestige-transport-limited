/** @format */

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavHeader from "./_components/NavHeader";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Prestige",
  description: `At Prestige Transport Limited, We Specialize in Providing High-end, Luxury
Airport Transfer Services to and From All Major Airports in London, Including Heathrow,
Gatwick, London City, Luton, and Stansted. Whether You Are a Business Executive, a
Celebrity, or a Discerning Traveler, We Ensure a Seamless, Comfortable,
and Exclusive Travel Experience`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <title>Prestige</title>
      </head>
      <body>
        <div className="overflow-x-hidden w-full">
          <div className=" fixed top-0 w-full z-50">
            <NavHeader />
          </div>
          <main className="">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
