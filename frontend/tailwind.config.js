module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'uni-blue': '#094183'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
