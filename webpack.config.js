var path = require('path')
var webpack = require('webpack')
var WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  entry: [
    './browser/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'bundle.js',
    publicPath: '/public/js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new WebpackNotifierPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [ 'es2015', 'react' ]
        },
        include: path.join(__dirname, 'browser')
      }
    ]
  }
}