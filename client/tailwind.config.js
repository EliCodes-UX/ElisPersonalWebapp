/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {},
    fontFamily: {
      'permanent-marker': ['Permanent Marker', 'cursive'],
      'kode-mono': ['Kode Mono', 'monospace'],
    },
    fontSize: {
      'xs': '0.75rem',
      'sm': '0.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
  },
  plugins: [require('tailwindcss-animated')],
};
