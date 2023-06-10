const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const devConfig = {
  devServer: {
    port: 3000,
    open: true,
    hot: true
  }
};

module.exports = merge(baseConfig, devConfig);
