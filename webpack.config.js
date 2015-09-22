const path = require('path');

const webpack = require('webpack');

const config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.join(__dirname, '_js/app.js')
    ],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/assets/js'),
        filename: 'app.js',
        publicPath: 'http://localhost:4000/assets/js'
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.scss$/, loader: 'style!css!sass' }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.css', '.scss']
    }

};

module.exports = config;
