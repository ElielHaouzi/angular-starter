/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const { resolve } = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: ['./app/app.js'],
    vendor: ['angular', 'angular-ui-router'],
    sitevendor: ['angular', 'angular-ui-router', 'angular-ui-bootstrap'],
    // home: ['restangular', 'angular-ui-router'],
    // polyfills: ['babel-polyfill'],
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate-loader!babel-loader', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'html-loader' }, // options: { minimize: true }
      { test: /\.(pug|jade)$/, loader: 'pug-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(scss|sass)$/, loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] },
      // { test: /\.(png|jpeg|jpg)$/, loader: 'url-loader?limit=20000&name=images/[hash].[ext]' },
      // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff&name=fonts/[hash].[ext]' },
      // { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=fonts/[hash].[ext]' },
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
      chunks: ['app', 'sitevendor', 'manifest'],
      // minify: {},
    }),

    // Automatically move all modules defined outside of application directory
    // to vendor bundle. If you are using more complicated project structure,
    // consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['app', 'vendor', 'sitevendor'],
      // minChunks: module => {
      //     return /node_modules/.test(module.resource);
      // },
      // minChunks: Infinity,
      // children: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'sitevendor',
      chunks: ['app'],
      minChunks: module => {
          return /node_modules/.test(module.resource);
      },
      // minChunks: Infinity,
      // children: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: Infinity
    }),
    // new webpack.LoaderOptionsPlugin({
    //   test: /\.scss$/i,
    //   options: {
    //     postcss: {
    //       plugins: [autoprefixer],
    //     },
    //   },
    // }),
    new BundleAnalyzerPlugin({
      // openAnalyzer: false,
      // generateStatsFile: false,
    }),
  ],
};
