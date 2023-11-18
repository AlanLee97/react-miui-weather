const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const devConfig = {
  module: {
    rules: [
      {
        test: /.(png|jpg|jpeg|webp|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'imgs/[name][ext]'
        }
      },
      {
        test: /.(css|scss)$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 3000,
    open: true,
    hot: true
  }
};

module.exports = merge(devConfig, baseConfig);
