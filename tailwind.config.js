/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#1C1E53",
        greyy: "#BBBBCB",
        yell: "#FCD980",
      },
    },
  },
  plugins: [],
};
