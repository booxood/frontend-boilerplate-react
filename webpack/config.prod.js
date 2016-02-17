const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('../config')

const rootPath = path.join(__dirname, '..')

const webpackConfig = {
  devtool: 'source-map',
  entry: [
    path.join(rootPath, 'client/index.js')
  ],
  output: {
    path: path.join(rootPath, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  progress: true,
  plugins: [
    new webpack.DefinePlugin({
      '__DEV_MODE__': JSON.stringify(config.DEV_MODE),
      '__API_SERVER__': JSON.stringify(config.API_SERVER)
    }),
    new HtmlWebpackPlugin({
      template: path.join(rootPath, 'client/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
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
      loader: 'style-loader!css-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

module.exports = webpackConfig
