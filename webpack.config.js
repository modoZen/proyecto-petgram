const HtmlWebpackPlugin         = require('html-webpack-plugin');
const WebpackPwaManifestPlugin  = require('webpack-pwa-manifest');
const WorkboxPlugin             = require('workbox-webpack-plugin')
const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  output:{
    filename: 'app.js',
    publicPath: '/',
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Your pet photos app',
      shortname: 'Petgram -🐱',
      description: 'Find pet photos and use it as wallpaper',
      background_color: '#fff',
      theme_color: '#5500ff',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'any maskable' // <-- Añade esta línea
        }
      ]
    }),
    new WorkboxPlugin.GenerateSW({
      maximumFileSizeToCacheInBytes: 5000000, // ...other Workbox build configuration options...
      runtimeCaching:[
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp(
            'https://petgram-server-max-seven.vercel.app'
          ),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  devServer: {
    historyApiFallback: true,
  },
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
  },
  devtool: "source-map",
}
