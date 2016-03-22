var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  inject: 'body'
});

module.exports = {
  entry: "./src/index.js",
  cache: true,
  debug: true,
  devtool: "source-map",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ["babel"]
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}
