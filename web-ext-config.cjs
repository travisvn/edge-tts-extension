module.exports = {
  // Directory where your extension is built (Firefox version)
  sourceDir: './dist/firefox',

  // Ignore files not needed for your extension
  ignoreFiles: ['*.git*', 'node_modules', 'web-ext-artifacts', 'src'],

  // Firefox binary to run against (can be Firefox, Beta, Developer Edition, Nightly)
  // firefox: 'firefoxdeveloperedition',

  // Firefox preferences to set
  // firefoxProfile: {
  //   'browser.aboutConfig.showWarning': false,
  // },

  // Build options
  build: {
    overwriteDest: true,
  },
};
