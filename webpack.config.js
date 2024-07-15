const path = require("path");

// The build mode.
const mode = process.env.NODE_ENV || 'development';
// Determines type of mode.
const devMode = mode === 'development';

// Determines build for the list of browsers or general.
const target = devMode ? 'web' : 'browserslist';
// Determines using source-map in a build or not.
const devtool = devMode ? 'source-map' : undefined;


module.exports = {
  mode: mode,
  target: target,
  devtool: devtool,
  // The entry point.
  entry: path.resolve(__dirname, 'src', 'index.js'),
  // The results of a webpack job.
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'index.[contenthash].js',
  }
}
