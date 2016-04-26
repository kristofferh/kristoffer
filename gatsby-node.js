exports.modifyWebpackConfig = function(config) {

  config.removeLoader('svg');
  config.loader('svg', {
    test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'svg-inline'
  });

  return config;
};
