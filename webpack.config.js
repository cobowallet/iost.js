const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: 'iost.main.js',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
};