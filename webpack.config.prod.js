const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css'
      }),
      analyze ? new BundleAnalyzerPlugin() : () => {}
    ],
    mode: 'production'
  };

  return merge(baseConfig, prodConfig);
};
