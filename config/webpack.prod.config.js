const webpack = require('webpack');
const { resolve } = require('path');
const config = require('../webpack.config');

config.output = {
  filename: '[name].bundle.[chunkhash].js',
  path: resolve(__dirname, '..', 'dist'),
};

config.devtool = 'eval';

config.plugins = config.plugins.concat([
  new webpack.optimize.UglifyJsPlugin(),
  // // Reduces bundles total size
  // new webpack.optimize.UglifyJsPlugin({
  //   mangle: {
  //
  //     // You can specify all variables that should not be mangled.
  //     // For example if your vendor dependency doesn't use modules
  //     // and relies on global variables. Most of angular modules relies on
  //     // angular global variable, so we should keep it unchanged
  //     except: ['$super', '$', 'exports', 'require', 'angular']
  //   }
  // })
]);

module.exports = config;
