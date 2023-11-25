const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const reslovePath = (dir) => {
  return path.resolve(__dirname, dir);
};

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'js/[name].js',
    path: reslovePath('dist'),
    clean: true, // 清除dist文件夹，无需使用CleanWebpackPlugin插件
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/i,
        use: [
          'babel-loader'
        ]
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
    })
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    echarts: 'echarts'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'development'
};
