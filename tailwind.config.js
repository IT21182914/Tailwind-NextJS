/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vuejs: {
          dark: "#1b4a26",
          DEFAULT: "#42b883",
          light: "#42b883",
          100: "#42b883",
          200: "#00ff3c",
        },
      },
    },
  },
  plugins: [],
};
