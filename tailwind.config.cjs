/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    colors: {
      'primary-400': 'hsl(193, 38%, 86%)',
      'primary-700': 'hsl(150, 100%, 66%)',
      'neutral-100': 'hsl(217, 19%, 38%)',
      'neutral-400': 'hsl(217, 19%, 24%)',
      'neutral-700': 'hsl(218, 23%, 16%)',
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    fontWeight: {
      regular: '800',
    },
    fontSize: {
      base: '0.75rem',
      quote: '1.75rem'
    },
    letterSpacing: {
      widest: '.25em',
    },
    extend: {
      boxShadow: {
        'glow': '0px 0px 10px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
