// webpack.config.js
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    popup: "./src/popup/index.tsx",
    background: "./src/background/index.ts",
    contentScript: "./src/contentScript.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/bundle.js", // Outputs files like dist/popup/bundle.js,
    clean:true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Handle .ts and .tsx files
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "manifest.json", to: "." },
        { from: "src/popup/index.html", to: "popup/index.html" },
        { from: "icons", to: "icons" },
      ],
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 3000, 
  },
  watch: true, 
};
