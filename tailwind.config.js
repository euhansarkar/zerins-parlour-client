/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        defaultTheme: {
          primary: "#4a7887",

          secondary: "#FEF9f6",

          accent: "#F2E9E3",

          neutral: "#000000",

          "base-100": "#FFFFFF",

          "base-200": "FA7887",
        },
      },
      {
        dark: {
          secondary: "#1F2937",

          "base-100": "#1F2937",
          "base-200": "#1F2937",

          accent: "#F2E9E3",

          neutral: "#ffffff",

          "base-100": "#FFFFFF",

          "base-200": "FA7887",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
