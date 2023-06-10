const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const reslovePath = (dir) => {
  return path.resolve(__dirname, dir);
};

const devConfig = {
  output: {
    filename: 'js/[name].js',
    path: reslovePath('dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /.(png|jpg|jpeg|webp|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'imgs/[name][ext]'
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true
  }
};

module.exports = merge(baseConfig, devConfig);
