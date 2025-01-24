/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: { default: "#FDC65C" },
        silver: {
          default: "#52575C",
        },
      },
      fontFamily: {
        abhaya: ["'Abhaya Libre'", "serif"],
      },
    },
  },
  plugins: [],
};
