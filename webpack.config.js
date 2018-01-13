const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'react-nice-input-password.css',
});

module.exports = {
  entry: './src',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-nice-input-password.js',
    libraryTarget: 'umd',
    library: 'ReactComponentNpm',
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
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    extractSass,
  ],
};
