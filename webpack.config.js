const path = require('path')

module.exports = {
  entry: {
    pageLanding: './src/scripts/PageLanding.js',
    result: './src/scripts/Result.js'
  },

  output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   }, 

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}