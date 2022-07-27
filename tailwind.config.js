/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      colors: {
        primary: {
          yellow: "#f5c32c",
          orange: "#fca61f",
          black: "#242d49",
          gray: "#242d49a6",
          cardColor: "#ffffffa3",
          buttonBg: "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
          inputColor: "#28343e12",
        },
      },
      backgroundImage: {
        button_gradient: "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
      },
    },
  },
  plugins: [],
};
