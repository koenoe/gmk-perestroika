const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

const resolveRelative = file => path.resolve(__dirname, file);

const babelPlugins = [
  'emotion',
  '@babel/plugin-transform-async-to-generator',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-transform-template-literals',
];

const babelOptions = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        debug: false,
        loose: true,
        corejs: 3,
        targets: {
          browsers: [
            'last 6 Chrome versions',
            'last 6 Firefox versions',
            'Firefox ESR',
            'last 3 Safari versions',
            'last 3 Opera versions',
            'last 3 Edge versions',
          ],
        },
      },
    ],
    '@babel/preset-flow',
    '@babel/preset-react',
  ],
  plugins: babelPlugins,
};

module.exports = options => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign(
    {
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/',
    },
    options.output,
  ),
  optimization: options.optimization,
  module: {
    rules: options.rules.concat([
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions,
        },
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
              noquotes: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // Inline files smaller than 10 kB
              limit: 10 * 1024,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                enabled: true,
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ]),
  },
  plugins: options.plugins.concat([
    new CopyPlugin([resolveRelative('../img/*.{png,svg,jpg,gif,webp}')]),
  ]),
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js', '.jsx', '.react.js'],
    mainFields: ['browser', 'jsnext:main', 'main'],
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
});
