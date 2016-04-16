var ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.modifyWebpackConfig = function(config, env) {
  var isDev = env === 'develop';
  var isProd = env === 'production';

  // if (isDev) {
  //   config.removeLoader('sass');
  //   config.loader('sass', {
  //     test: /\.(sass|scss)/,
  //     loaders: ['style', 'css', 'postcss', 'sass']
  //   });
  // } else if (isProd) {
  //   config.plugin('extract-css', ExtractTextPlugin, ['app.css']);
  //   config.removeLoader('sass');
  //   config.loader('sass', {
  //     test: /\.(sass|scss)/,
  //     loader: ExtractTextPlugin.extract(['css', 'postcss', 'sass'])
  //   });
  // }

  return config;
};
