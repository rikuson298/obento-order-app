module.exports = {
  outputDir: 'public/dist',
  devServer: {
    proxy: 'http://localhost:3000'
  },
  configureWebpack: {
    entry: './frontend/src/main.js',
  },
}
