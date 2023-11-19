const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = ({ analyze }) => {
  const prodConfig = {
    output: {
      filename: 'js/[name].[contenthash:8].js',
      chunkFilename: '[name].bundle.[contenthash:8].js'
    },
    module: {
      rules: [
        {
          test: /.(png|jpg|jpeg|webp|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'imgs/[name].[contenthash:8][ext]'
          }
        },
        {
          test: /.(css|scss)$/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: false
              }
            },
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      analyze ? new BundleAnalyzerPlugin() : () => {},
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css'
      }),
      new CompressionPlugin()
    ],
    mode: 'production'
  };

  return merge(baseConfig, prodConfig);
};
