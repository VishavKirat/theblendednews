const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/client/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  watch: true,
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 8080,
    contentBase: 'src/client/public',
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6'],
  },
};
