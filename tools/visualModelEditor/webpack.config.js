const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  stats: { errorDetails: true },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      util: false,
      assert: false,
      fs: false,
    },
  },
  output: {
    clean: true,
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "visualModelEditor",
      type: "umd",
    },
  },
  // plugins: [
  //     new webpack.ProvidePlugin({
  //         process: "process/browser"
  //     })
  // ],
  mode: "development",
};
