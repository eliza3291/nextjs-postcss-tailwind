module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}'],
  plugins: {
    'postcss-each': {
      plugins: {
        beforeEach: ['tailwindcss']
      }
    },
    'postcss-preset-env': {},
    autoprefixer: {},
  },
}
