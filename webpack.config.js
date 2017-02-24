const path = require('path')
const webpack = require('webpack')


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  
  resolve: {
    extensions: ['.js', '.jsx']
  },
  
  module: {
    rules: [
      {
        test: /\.js?$/,
        loaders: [ 'babel-loader' ],
        exclude: [ /node_modules/ ]
      }
    ],
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 8080,
    contentBase: path.join(__dirname, 'public')
  },
  
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
}