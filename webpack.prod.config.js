const path = require('path');

const webpack = require('webpack');

const config = {
    entry: [
        path.join(__dirname, '_js/app.js')
    ],
    output: {
        path: path.join(__dirname, '/assets/js'),
        filename: 'app.js',
        publicPath: '/assets/js'
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
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.css', '.scss']
    }

};

module.exports = config;
