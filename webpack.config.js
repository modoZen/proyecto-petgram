const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  output:{
    filename: 'app.js'
  },
  plugins:[
    new HtmlWebpackPlugin(),
  ]
}
