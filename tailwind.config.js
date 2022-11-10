/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': '#484848',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
