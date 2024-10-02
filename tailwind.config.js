/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        white: "#fff",
        black: "#1B1F23",
        accent: {
          primary: "#ff0000",
          secondary: "#000",
        },
      },
      colors: {
        white: "#fff",
        black: "#1B1F23",
        accent: {
          primary: "#ff0000",
          secondary: "#000",
        },
      },
    },
  },
  plugins: [],
};
