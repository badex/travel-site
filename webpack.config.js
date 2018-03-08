var path = require('path');
// webpack requires an absolute path so we need to use 'path' which is native to node

module.exports = {
entry: {
  App: "./app/assets/scripts/App.js",
  Vendor: "./app/assets/scripts/Vendor.js"
},
  output: {
    path: path.resolve(__dirname, "./app/temp/scripts"),
    // [name] keeps the final name dynamic, i.e. App.js and Vendor.js
    filename: "[name].js"
  },
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
