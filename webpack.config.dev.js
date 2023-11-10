const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 3000,
    open: true,
    hot: true
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    echarts: 'echarts'
  }
};

module.exports = merge(baseConfig, devConfig);
