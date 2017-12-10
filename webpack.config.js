const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/serverless.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs',
    path: __dirname + '.webpack',
    filename: 'dist.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  }
};
