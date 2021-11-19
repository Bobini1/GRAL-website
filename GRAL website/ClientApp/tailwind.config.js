module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'movingGradient': 'movingGradient 15s ease infinite'
      },
      keyframes: {
        movingGradient: {
        '0%, 100%': { 'background-size':'400% 400%',
        'background-position': 'left top' },
        '50%': { 'background-size':'200% 200%',
        'background-position': 'right bottom' }
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
