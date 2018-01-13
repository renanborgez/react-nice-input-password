const path = require('path');

module.exports = {
  entry: './src',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-nice-input-password.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [
      './src',
      './src/components',
      'node_modules',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
};
