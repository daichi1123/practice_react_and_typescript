const path = require('path')
<<<<<<< HEAD
 
module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
=======

module.exports = {
  entry: './src/index.js',
>>>>>>> main
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  }
}