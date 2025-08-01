/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FFDCDC',
          peach: '#FFF2EB',
          light: '#FFE8CD',
          apricot: '#FFD6BA',
        },
      },
    },
  },
  plugins: [],
};