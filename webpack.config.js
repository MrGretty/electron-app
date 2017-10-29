const path = require('path');

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js',
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-runtime'],
          },
        },
      },
    ],
  },
};
