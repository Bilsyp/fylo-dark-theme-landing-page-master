/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Railway: ["Raleway", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        Darkers: "#1c2230",
        green_gradient: "hsl(176, 68%, 64%)",
        blue_gradient: "hsl(198, 60%, 50%)",
        veryDark: "#181e2a",
        testimonial: "#21293c",
        arcticle: "#d1d7db",
        footer: "#0c1524",
        btn: "#8cdae4",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
