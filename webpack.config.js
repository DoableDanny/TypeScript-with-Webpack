const path = require('path');

// Here, we export an object using the node module system. Webpack will ultimately be read by NodeJS.
module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: './src/index.ts', // Webpack will look here
  module: {
    rules: [
      {
        test: /\.ts$/, // If file ends in ts
        use: 'ts-loader', // Run the ts-loader on them to compile them into js
        include: [path.resolve(__dirname, 'src')], // Specifies where the ts files should be. We only use this rule for ts files in this folder
      },
    ],
  },
  output: {
    publicPath: 'public',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    publicPath: '/',
    contentBase: './public',
    hot: true,
  },
};
