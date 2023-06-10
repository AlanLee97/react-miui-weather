const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const reslovePath = (dir) => {
  path.resolve(__dirname, dir);
};

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[fullhash:8].js',
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
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', 'jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  mode: 'development'
};
