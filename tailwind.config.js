/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        twitterBlue: {
          light: "#e8f5fd",
          DEFAULT: "#1d9bf0",
        },
      },
    },
  },
  plugins: [],
};
