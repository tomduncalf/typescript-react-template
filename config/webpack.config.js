var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  devtool: 'eval',
  // This will be our app's entry point (webpack will look for it in the 'src' directory due to the modulesDirectory setting below). Feel free to change as desired.
  entry: [
    'index.tsx'
  ],
  // Output the bundled JS to dist/app.js
  output: {
    filename: 'app.js',
    path: path.resolve('dist')
  },
  resolve: {
    // Look for modules in .ts(x) files first, then .js(x)
    extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
    // Add 'src' to our modulesDirectories as all our app code will live in there
    modulesDirectories: ['src', 'node_modules'],
  },
  module: {
    loaders: [
      // .ts(x) files should first pass through the Typescript loader, and then through babel
      { test: /\.tsx?$/, loaders: ['babel', 'ts-loader'] }
    ]
  },
  plugins: [
    // Set up the notifier plugin - you can remove this (or set alwaysNotify false) if desired
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ]
};
