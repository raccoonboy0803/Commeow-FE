/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        mainlogo: "url('./assets/commeow.png')",
        defaultList: "url('./assets/defaultListImg.png')",
        defaultList2: "url('./assets/defaultList2.png')",
        chur: "url('./assets/chur.png')",
        live: "url('./assets/live.png')",
        userImg: "url('./assets/user.png')",
      },
      colors: {
        mainBlack: 'rgb(24,24,27)',
        headerBlack: 'rgba(0,0,0,0.2)',
        modalOuter: 'rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
