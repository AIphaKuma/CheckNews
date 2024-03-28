/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        steelBlue: "var(--steel-blue-color)",
        night: "var(--night-color)",
        columbia: "var(--columbia-color)",
        ivory: "var(--ivory-color)",
      },
      textColor: {
        steelBlue: "var(--steel-blue-color)",
        night: "var(--night-color)",
        columbia: "var(--columbia-color)",
        ivory: "var(--ivory-color)",
      },
      colors: {
        steelBlue: "var(--steel-blue-color)",
        night: "var(--night-color)",
        columbia: "var(--columbia-color)",
        ivory: "var(--ivory-color)",
      },
      borderColor: {
        steelBlue: "var(--steel-blue-color)",
        night: "var(--night-color)",
        columbia: "var(--columbia-color)",
        ivory: "var(--ivory-color)",
      },
    },
  },
  plugins: [],
};
