const config = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
}

module.exports = {
  title: 'Insite Component Library',
  webpackConfig: {
    ...config,
  },
}
