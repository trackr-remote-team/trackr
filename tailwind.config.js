/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./client/**/*.{js,jsx,ts,tsx}'],
    theme: {
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
      extend: {
        fontFamily: {
          mono: ['Roboto Mono', 'monospace'],
        },
      },
      colors: {},
    },
    plugins: [],
  };