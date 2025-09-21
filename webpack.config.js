// webpack.config.js
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const fs = require('fs');

// Determine the target browser from command line arguments
// Default to 'chrome' if not specified
const targetBrowser = process.env.BROWSER || 'chrome';

// Get the correct manifest based on the target browser
const getManifestPath = () => {
  return `./manifests/manifest.${targetBrowser}.json`;
};

const isProduction = process.env.NODE_ENV === 'production';
const shouldAnalyze = process.env.ANALYZE === 'true';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    popup: './src/popup/index.tsx',
    background: './src/background/index.ts',
    contentScript: './src/contentScript.ts',
  },
  output: {
    path: path.resolve(__dirname, `dist/${targetBrowser}`),
    filename: '[name]/bundle.js', // Outputs files like dist/popup/bundle.js
    clean: true, // Clean the output directory before emit
  },
  devtool: isProduction ? false : 'source-map', // Disable source maps in production
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Handle .ts and .tsx files
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: getManifestPath(), to: 'manifest.json' },
        { from: 'src/popup/index.html', to: 'popup/index.html' },
        { from: 'icons', to: 'icons' },
      ],
    }),
    ...(shouldAnalyze ? [new BundleAnalyzerPlugin()] : []),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  optimization: {
    minimize: isProduction,
    // Don't split chunks for browser extensions - each script must be self-contained
    splitChunks: {
      chunks: () => false,
    },
  },
};
