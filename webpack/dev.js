const webpack = require('webpack');
var WebpackConfig = require('webpack-config');
var path = require('path');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = new WebpackConfig.Config().extend('./webpack/config-maker.js').merge({
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    entry: {
        entry: [
            'babel-polyfill',
            hotMiddlewareScript,
            path.join(__dirname, '../src/entry.js'),
        ],
    },
});