/** @format */

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavHeader from "./_components/NavHeader";
import Footer from "./_components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Prestige Transport Limited",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Prestige Transport",
  "image": "https://www.prestigetransport.co.uk/logo.svg",
  "url": "https://www.prestigetransport.co.uk",
  "telephone": "+44 2088776670",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "207 Lower Richmond Road",
    "addressLocality": "London",
    "postalCode": "SW15 1HJ",
    "addressCountry": "UK"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "priceRange": "$$$",
  "email": "mailto:prestigetransport77@gmail.com",
  "sameAs": [
    "https://wa.me/447745167584",
    "https://wa.me/447759053194"
  ]
}
    `,
          }}
        />

        <link rel="icon" href="/logo.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta
          property="og:title"
          content="Prestige Transport - Luxury Chauffeur Services"
        />
        <meta
          property="og:description"
          content="Travel in style with executive car services across the UK."
        />
        <meta
          property="og:image"
          content="https://www.prestigetransport.co.uk/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://www.prestigetransport.co.uk/"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <div className="overflow-x-hidden w-full">
          <div className=" fixed top-0 w-full z-50">
            <NavHeader />
          </div>
          <main className="">
            {children} <Analytics />
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
