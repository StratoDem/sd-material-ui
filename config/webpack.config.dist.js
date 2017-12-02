const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

const sourcePath = path.join(__dirname, '../src');
const bundlesPath = path.resolve('./sd_material_ui');
const nodeModulesPath = path.join(__dirname, '../node_modules/');


module.exports = {
  context: sourcePath,
  entry: {
    // relative to sourcePath
    bundle: './index',
  },
  output: {
    library: 'sd_material_ui',
    libraryTarget: 'this',
    path: bundlesPath,
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.js/i,
      mangle: false,
      comments: false, // remove comments
      compress: {
        unused: true,
        dead_code: true, // big one--strip code that will never execute
        warnings: false,
        drop_console: false, // strips console statements
      },
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /node_modules/,
        use: ['ify-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(gif|svg|png)$/i,
        use: ['url-loader'],
      },
      {
        test: /.(png|woff(2)?|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      nodeModulesPath,
      sourcePath,
    ],
  },
  watchOptions: {
    poll: 500,
    ignored: /node_modules/,
  },
};
