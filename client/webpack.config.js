// @flow

const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: NODE_ENV !== 'production' ? 'source-map' : false,
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, 'entry.jsx'),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  optimization: {
    moduleIds: NODE_ENV !== 'production' ? 'named' : 'deterministic',
    minimize: NODE_ENV === 'production',
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 1,
          name: 'vendor',
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: `'${NODE_ENV || 'development'}'`,
      Colors: JSON.stringify({
        MAIN: '#3B5FC4',
      }),
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'static/index.html'),
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    hot: true,
    contentBase: [
      path.resolve(__dirname, 'static'),
    ],
    publicPath: '/',
    compress: true,
    port: 7070,
    filename: 'bundle.js',
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  resolve: {
    mainFields: [
      'browser',
      'module',
      'main',
    ],
    extensions: [
      '.jsx',
      '.js',
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [
        'babel-loader',
      ],
      include: [
        __dirname,
      ],
    }, {
      test: /\.(eot|ttf|woff2?)$/i,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      }],
      include: /fonts/,
    }],
  },
};
