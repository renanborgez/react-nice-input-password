// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src',
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-nice-input-password.js',
    library: 'shared-components',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [
      './src',
      './src/components',
      'node_modules',
    ],
  },
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'react-nice-input-password.css',
    }),
  ],
};
