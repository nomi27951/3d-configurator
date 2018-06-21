var path = require('path');
var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    lib: './src/minimal-gltf-loader.js'
  },
  resolve: {
      alias: {
        // Lib: path.resolve(__dirname, 'demo/lib/'),
        // Shaders: path.resolve(__dirname, 'demo/lib/src/shaders')
      }
  },
  output: {
    filename: 'minimal-gltf-loader.js',
    path: path.resolve(__dirname, 'build'),
    library: 'MinimalGLTFLoader',
    libraryTarget: 'umd'
  },
  externals: {
    'gl-matrix': {
      commonjs: 'gl-matrix',
      commonjs2: 'gl-matrix',
      amd: 'gl-matrix'
    }
  },
  module: {
    // rules: [

    // ]
    // loaders: [
    //   {
    //     test: /\.glsl$/,
    //     loader: "webpack-glsl"
    //   },
    // ]
  },
  plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //     warnings: false,
        //     drop_console: false,
        //     }
        // })
        // new UglifyJSPlugin()

        // new HtmlWebpackPlugin({
        //   title: "glAvatar demo"
        // })
    ],
  devServer: {
    contentBase: path.join(__dirname, "demo"),
    port: 7777
  }
};