const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const reslovePath = (dir) => {
  return path.resolve(__dirname, dir);
};

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'js/[name].[fullhash:8].js',
    path: reslovePath('dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/i,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /.(css|scss)$/i,
        use: [
          'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /.(png|jpg|jpeg|webp|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'imgs/[name].[hash:8][ext]'
        }
        // webpack5中增加了rule.type: 'asset/resource'代替了file-loader,url-loader等，所以不用配置loader，不然会出现图片文件损坏
        // use: [
        //   {
        //     loader: 'url-loader',
        //     options: {
        //       limit: 8 * 1024,
        //       esModule: false
        //     }
        //   }
        // ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      '@components': reslovePath('src/component'),
      '@pages': reslovePath('src/pages'),
      '@imgs': reslovePath('src/assets/imgs'),
      '@src': reslovePath('src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    // new MiniCssExtractPlugin({
    //   filename: 'css/[name].[hash:8].css'
    // }),
    new CleanWebpackPlugin()
  ],
  mode: 'development'
};
