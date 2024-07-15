const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PostcssPresetEnv = require('postcss-preset-env');

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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  // Loaders.
  module: {
    rules: [
      // The HTML loader.
      {
      test: /\.html$/i,
      loader: 'html-loader',
      },
      // The SCSS/CSS loaders.
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [PostcssPresetEnv]
              }
            }
          },
          'sass-loader',
        ],
      }
    ]
  },
  optimization: {
    minimize: false
  }
}
