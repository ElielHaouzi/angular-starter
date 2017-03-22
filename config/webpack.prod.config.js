/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const { resolve } = require('path');
const config = require('../webpack.config');
const CompressionPlugin = require("compression-webpack-plugin");

config.output = {
  filename: '[name].bundle.[chunkhash].js',
  path: resolve(__dirname, '..', 'dist'),
};

// config.devtool = 'eval';

config.plugins = config.plugins.concat([
  // new webpack.optimize.UglifyJsPlugin(),
  // Reduces bundles total size
  new webpack.optimize.UglifyJsPlugin({
    mangle: {

      // You can specify all variables that should not be mangled.
      // For example if your vendor dependency doesn't use modules
      // and relies on global variables. Most of angular modules relies on
      // angular global variable, so we should keep it unchanged
      except: ['$super', '$', 'exports', 'require', 'angular']
    },
    comments: false,
    minimize: true,
    compress: {
      warnings: false // https://github.com/webpack/webpack/issues/1496
    },
  }),

  new CompressionPlugin({
    // asset: '[path]'
  }),
]);

module.exports = config;
