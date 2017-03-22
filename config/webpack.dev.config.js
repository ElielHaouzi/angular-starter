/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const config = require('../webpack.config');

config.output = {
  filename: '[name].bundle.js',
};

config.devtool = 'source-map';

config.devServer = {
  contentBase: '../src',
  hot: true,
  stats: { colors: true },
  inline: true,
  historyApiFallback: true,
  open: true,
};

config.plugins = config.plugins.concat([

  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.
  new webpack.HotModuleReplacementPlugin(),
]);

module.exports = config;
