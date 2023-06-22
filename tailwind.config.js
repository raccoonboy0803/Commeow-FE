/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        mainlogo: "url('./assets/commeow.png')",
      },
    },
  },
  plugins: [],
};
