// webpack.config.js
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const cspProd = "script-src 'self'; object-src 'self';";

module.exports = {
  mode: "production",
  // mode: 'development',
  entry: {
    popup: "./src/popup/index.tsx",
    background: "./src/background/index.ts",
    contentScript: "./src/contentScript.ts",
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
        {
          from: "manifest.json",
          to: ".",
          transform(content) {
            return content.toString().replace(
              "__CSP_POLICY__",
              cspProd
            );
          },
        },
        { from: "src/popup/index.html", to: "popup/index.html" },
        { from: "icons", to: "icons" },
      ],
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
