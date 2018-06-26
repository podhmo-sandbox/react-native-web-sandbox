const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/like_button.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'like_button.js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
