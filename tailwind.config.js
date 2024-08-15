/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-light-primary": "rgb(231 229 228)",
        "bg-light-secondary": "rgb(231 229 228)",

        "bg-dark-primary": "rgb(23 23 23)",
        "bg-dark-secondary": "rgb(23 23 23)",

        "bg-bg-light-primary": "bg-light-primary",
        "bg-bg-dark": "bg-dark",
      },
    },
  },
  plugins: [],
};
