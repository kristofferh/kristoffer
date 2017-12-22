// // var extractTextWebpackPlugin = require("extract-text-webpack-plugin");
// const path = require("path");

// // exports.modifyWebpackConfig = ({ config, stage }) => {
// //   // config.merge({
// //   //   postcss() {
// //   //     return [
// //   //       require("postcss-cssnext")({ browsers: ["last 2 versions", "> 1%"] })
// //   //     ];
// //   //   }
// //   // });

// //   if (stage === "build-css") {
// //     config.loader("sass", {
// //       include: (__dirname, "./webpack.loader.global")
// //     });
// //     // config.removeLoader("sass");
// //     // config.loader("sass", {
// //     //   test: /\.(sass|scss)/,
// //     //   exclude: /\.module\.(sass|scss)$/,
// //     //   loader: extractTextWebpackPlugin.extract([
// //     //     "css?minimize",
// //     //     "postcss",
// //     //     "sass",
// //     //     path.resolve(__dirname, "./webpack.loader.global")
// //     //   ])
// //     // });
// //   }

// //   if (stage === "develop") {
// //     config.loader("sass", {
// //       include: (__dirname, "./webpack.loader.global")
// //     });
// //     // config.removeLoader("sass");
// //     // config.loader("sass", {
// //     //   test: /\.(sass|scss)/,
// //     //   exclude: /\.module\.(sass|scss)$/,
// //     //   loaders: [
// //     //     "style",
// //     //     "css",
// //     //     "postcss",
// //     //     "sass",
// //     //     path.resolve(__dirname, "./webpack.loader.global")
// //     //   ]
// //     // });
// //   }

// //   return config;
// // };

// const ExtractTextPlugin = require(`extract-text-webpack-plugin`);
// const { cssModulesConfig } = require(`gatsby-1-config-css-modules`);

// exports.modifyWebpackConfig = ({ config, stage }, options) => {
//   const sassFiles = /\.s[ac]ss$/;
//   const sassModulesFiles = /\.module\.s[ac]ss$/;
//   const sassLoader = `sass?${JSON.stringify(options)}`;

//   switch (stage) {
//     case `develop`: {
//       config.loader(`sass`, {
//         test: sassFiles,
//         exclude: sassModulesFiles,
//         loaders: [
//           `style`,
//           `css`,
//           sassLoader,
//           path.resolve(__dirname, "./webpack.loader.global")
//         ]
//       });

//       config.loader(`sassModules`, {
//         test: sassModulesFiles,
//         loaders: [
//           `style`,
//           cssModulesConfig(stage),
//           sassLoader,
//           path.resolve(__dirname, "./webpack.loader.global")
//         ]
//       });
//       return config;
//     }
//     case `build-css`: {
//       config.loader(`sass`, {
//         test: sassFiles,
//         exclude: sassModulesFiles,
//         loader: ExtractTextPlugin.extract([
//           `css?minimize`,
//           sassLoader,
//           path.resolve(__dirname, "./webpack.loader.global")
//         ])
//       });

//       config.loader(`sassModules`, {
//         test: sassModulesFiles,
//         loader: ExtractTextPlugin.extract(`style`, [
//           cssModulesConfig(stage),
//           sassLoader,
//           path.resolve(__dirname, "./webpack.loader.global")
//         ])
//       });
//       return config;
//     }
//     case `develop-html`:
//     case `build-html`:
//     case `build-javascript`: {
//       config.loader(`sass`, {
//         test: sassFiles,
//         exclude: sassModulesFiles,
//         loader: `null`
//       });

//       config.loader(`sassModules`, {
//         test: sassModulesFiles,
//         loader: ExtractTextPlugin.extract(`style`, [
//           cssModulesConfig(stage),
//           sassLoader,
//           path.resolve(__dirname, "./webpack.loader.global")
//         ])
//       });
//       return config;
//     }
//     default: {
//       return config;
//     }
//   }
// };
