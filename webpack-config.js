module.exports = {
  devtool: "source-map",
  entry: "./app.jsx",
  mode: "development",
  output: {
    filename: "./app-bundle.js"
  },
  resolve: {
    extensions: [".Webpack.js", ".web.js", ".ts", ".js", ".jsx", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(tsx|js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: "babel-loader"
      }]
      }
    ]
  }
};
