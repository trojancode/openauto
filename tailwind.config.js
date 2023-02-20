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
        gray: {
          "300": "#cfd1d4"
        }
      }
    },
  },
  plugins: [],
}
