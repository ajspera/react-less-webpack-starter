/*
    ./webpack.config.js
*/
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/app/index.html',
  filename: path.resolve('public/index.html'),
  inject: 'body'
})

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve('public'),
    filename: 'index_bundle.js'
  },
  devtool: "eval-source-map",
  devServer: {
    proxy: {
      '/**': {  // path regex
        target: '/index.html',
        secure: true,
        bypass: function(req, res, opt){
          // exclusions for assets, api proxies, etc
          // console.log('bypass check', {req: req, res:res, opt: opt});
          if(req.path.indexOf('/images/') !== -1 || req.path.indexOf('/public/') !== -1){
            return req.path;
          }

          if (req.headers.accept.indexOf('html') !== -1) {
            return '/index.html';
          }
        }
      }
    }
  },
  plugins: [
    HtmlWebpackPluginConfig
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "less-loader", options: { sourceMap: true } }
        ]
      }
    ]
  }
}
