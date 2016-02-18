const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('../config')

const rootPath = path.join(__dirname, '..')

const webpackConfig = {
  devtool: 'cheap-module-eval-source-map',
  context: path.join(rootPath, './client'),
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    path.join(rootPath, 'client/index.js')
  ],
  output: {
    path: path.join(rootPath, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(rootPath, 'client/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      '__DEV_MODE__': JSON.stringify(config.DEV_MODE),
      '__API_SERVER__': JSON.stringify(config.API_SERVER)
    })
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(rootPath, 'client')
    }, {
      test: /\.css$/,
      loaders: [
        'style-loader',
        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      ]
    }, {
      test: /\.less$/,
      loaders: [
        'style-loader',
        'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        'less-loader'
      ]
    }, {
      test: /\.png$/,
      loader: "url-loader?limit=100000"
    }, {
      test: /\.jpg$/,
      loader: "file-loader"
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

module.exports = webpackConfig
