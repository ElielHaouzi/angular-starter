const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./app/app.js'],
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate-loader!babel-loader', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'html-loader', options: { minimize: true} },
    ],
  },
  // resolve: {
  // },
  performance: {
    hints: 'warning', // emit errors for perf hints
    maxAssetSize: 200000,
    maxEntrypointSize: 400000,
  },

  context: resolve(__dirname, 'src'),

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      chunks: ['vendor', 'app'],
      // minify: {},
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: module => /node_modules/.test(module.resource)
    }),
  ],
};
