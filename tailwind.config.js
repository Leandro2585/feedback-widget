module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#8257E6'
        }
      }
    },
  },
  plugins: [],
  css: { postcss: './postcssapp.config.js' },
}
