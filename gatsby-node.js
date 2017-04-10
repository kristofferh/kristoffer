var extractTextWebpackPlugin = require('extract-text-webpack-plugin');

exports.modifyWebpackConfig = function(config, env) {

  config.merge({
    postcss (wp) {
      return [
        require('postcss-cssnext')({ browsers: ['last 2 versions', '> 1%'] }),
      ]
    },
  })

  if (env === 'build-css') {
    config.removeLoader('sass');
    config.loader('sass', {
      test: /\.(sass|scss)/,
      exclude: /\.module\.(sass|scss)$/,
      loader: extractTextWebpackPlugin.extract(['css?minimize', 'postcss', 'sass']),
    })
  }

  if (env === 'develop') {
    config.removeLoader('sass');
    config.loader('sass', {
      test: /\.(sass|scss)/,
      exclude: /\.module\.(sass|scss)$/,
      loaders: ['style', 'css', 'postcss', 'sass'],
    })
  }

  config.removeLoader('svg');
  config.loader('svg', {
    test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'svg-inline'
  });

  return config;
};
