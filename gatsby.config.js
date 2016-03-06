var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(config, env) {
  var isStatic = env === 'static';
  var isDev = env === 'develop';
  var isProd = env === 'production';

  config.merge({
    postcss: [require('autoprefixer')]
  });

  config.plugin('static', CopyWebpackPlugin, [[{ from: '../static'}]]);

  config.loader('fonts', function(cfg) {
    cfg.test = /\.(((woff|woff2|eot|ttf)(\?[0-9]{8}))|(woff|woff2|eot|ttf))$/;
    cfg.loader = 'file-loader';
    return cfg;
  });

  return config;
};
