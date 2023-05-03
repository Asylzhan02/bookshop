/** @type {import('tailwindcss').Config} */
/* global module */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  theme: {
    extend: {
      colors: {
        beige: "#f7f7f7",
      },
    },
  },
  env: {
    node: true,
  },
  plugins: [],
};
