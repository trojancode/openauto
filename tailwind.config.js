/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#121722",
        dark2: "#161b25",//
        dark3: "#0d1116",
        secondary: "#CFD1D4",
        gray: {
          "300": "#cfd1d4"
        },
        bordergray: "#3b454f"
      }
    },
  },
  plugins: [],
}
