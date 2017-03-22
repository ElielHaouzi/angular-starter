/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const { resolve } = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: ['./app/app.js'],
    // polyfills: ['babel-polyfill'],
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate-loader!babel-loader', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'html-loader' }, // options: { minimize: true }
      { test: /\.(pug|jade)$/, loader: 'pug-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader', options: { modules: true } },
      { test: /\.(scss|sass)$/, loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'], options: { modules: true } },
      { test: /\.(png|jpeg|jpg)$/, loader: 'url-loader?limit=20000&name=images/[hash].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff&name=fonts/[hash].[ext]' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader?name=fonts/[hash].[ext]' },
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

    // Automatically move all modules defined outside of application directory
    // to vendor bundle. If you are using more complicated project structure,
    // consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource),
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.scss$/i,
      options: {
        postcss: {
          plugins: [autoprefixer],
        },
      },
    }),
    new BundleAnalyzerPlugin({
      // openAnalyzer: false,
      // generateStatsFile: false,
    }),
  ],
};
