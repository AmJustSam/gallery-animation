//const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const CompressionPlugin = require("compression-webpack-plugin");
//const WebpackAnalyze = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


module.exports = {
  devtool: false,
  entry: "./src/index.js",
  module: {
    rules: [
       {test: /\.js$/, exclude: /node_modules/, use: {loader: "babel-loader"}},
       {test: /\.css$/i, use: ["style-loader","css-loader"]},
       {test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader"]}
    ]
  },

  output: {
   path:  path.resolve(__dirname, 'dist'),
   filename: "[name].[contenthash].js"
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    })
  ],

    optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,                       // will match exactly this --> "/node_modules/"
      
          // Normally, you would just define a name for the output file as a string.
          // But I’m defining name as a function (which will be called for every parsed file)
          // As a result, we’ll get one file for each package, e.g. npm.react-dom.899sadfhj4.js

          name(module) {

            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName

            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
  
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `module.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
}