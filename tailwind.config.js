/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
        fira: ["Fira Sans, sans-serif"],
      },
      bottom: {
        c: "162px",
      },
      screens: {
        md: { max: "890px" },

        sm: { max: "600px" },
        tab: { max: "768px" },
      },
    },
  },
  plugins: [],
};
