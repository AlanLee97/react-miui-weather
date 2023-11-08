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
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 3000,
    open: true,
    hot: true
  }
  // externals: {
  //   react: {
  //     commonjs: 'react',
  //     amd: 'react',
  //     root: 'React' // 指向全局变量
  //   }
  // }
};

module.exports = merge(baseConfig, devConfig);
