var extractTextWebpackPlugin = require("extract-text-webpack-plugin");
var path = require("path");

exports.modifyWebpackConfig = ({ config, env }) => {
  config.merge({
    postcss() {
      return [
        require("postcss-cssnext")({ browsers: ["last 2 versions", "> 1%"] })
      ];
    }
  });

  if (env === "build-css") {
    config.removeLoader("sass");
    config.loader("sass", {
      test: /\.(sass|scss)/,
      exclude: /\.module\.(sass|scss)$/,
      loader: extractTextWebpackPlugin.extract([
        "css?minimize",
        "postcss",
        "sass",
        path.resolve(__dirname, "./webpack.loader.global")
      ])
    });
  }

  if (env === "develop") {
    config.removeLoader("sass");
    config.loader("sass", {
      test: /\.(sass|scss)/,
      exclude: /\.module\.(sass|scss)$/,
      loaders: [
        "style",
        "css",
        "postcss",
        "sass",
        path.resolve(__dirname, "./webpack.loader.global")
      ]
    });
  }

  return config;
};
