const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: "./script.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    host: "127.0.0.1",
    // host: "0.0.0.0", --- for docker 
    port: 3000,
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use:  ["style-loader", "css-loader"],
      },
    ],
  },
};
