const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  output:{
    filename: 'app.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
  ],
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options:{
            presets:[
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins:[
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      }
    ]
  }
}
