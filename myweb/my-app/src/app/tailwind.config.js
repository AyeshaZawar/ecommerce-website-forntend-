/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      utilities: {
        'text-balance': {
          textWrap: 'balance',
        },
      },
      // base: {
      //   ':root': {
      //     '--background': '0 0% 100%',
      //   },
      // },
    },
  },
  plugins: [],
};
