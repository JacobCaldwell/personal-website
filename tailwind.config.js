module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'roboto-mono': ['Roboto Mono', 'monospace']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
