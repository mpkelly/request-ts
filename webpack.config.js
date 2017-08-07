var path = require('path');

module.exports = {
  entry: './src/Index',

  output: {
    path: __dirname,
    filename: 'index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true     
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
};
