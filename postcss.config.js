module.exports = {
  plugins: [
    // require("postcss-cssnext")(),
    require('postcss-preset-env')(),
    require('css-declaration-sorter')({
      order: 'concentric-css'
    }),
    require('css-mqpacker')()
  ]
}
