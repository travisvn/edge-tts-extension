// webpack.config.js
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    popup: "./src/popup/index.tsx",
    background: "./src/background/index.ts",
    contentScript: "./src/contentScript.ts",
    offScreen: "./src/offScreen/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/bundle.js", // Outputs files like dist/popup/bundle.js
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
        {from: "manifest.json",to: ".",},
        { from: "src/popup/index.html", to: "popup/index.html" },
        { from: "icons", to: "icons" },
        { from: "src/offScreen/off-screen.html", to: "offScreen/off-screen.html" },
      ],
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
