module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "zc30-green": "#57bc90",
      "zc30-blue": "#77C9D4",
      "zc30-grey": "#A5A5AF",
      "zc30-light-green": "#D2EDE3",
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
    },
    extend: {
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin"),
    require("@tailwindcss/line-clamp"),
    require('tailwind-scrollbar-hide'),
  ],
};
