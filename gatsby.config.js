var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(config, env) {
  var isStatic = env === 'static';
  var isDev = env === 'develop';
  var isProd = env === 'production';

  config.merge({
    postcss: [require('autoprefixer')]
  });

  if (isDev) {
    config.removeLoader('sass');
    config.loader('sass', {
      test: /\.(sass|scss)/,
      loaders: ['style', 'css', 'postcss', 'sass']
    });
  } else if (isProd) {
    config.plugin('extract-css', ExtractTextPlugin, ['app.css']);
    config.removeLoader('sass');
    config.loader('sass', {
      test: /\.(sass|scss)/,
      loader: ExtractTextPlugin.extract(['css', 'postcss', 'sass'])
    });
  }

  config.plugin('static', CopyWebpackPlugin, [[{ from: '../static'}]]);

  return config;
};
