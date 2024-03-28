/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { 
        steels:'#2C80B5',
        columbia:'#C6D7F1',
        white:'#F6F7F2',
        black:'#11100F'
      }
    },

  },
  plugins: [],
};
