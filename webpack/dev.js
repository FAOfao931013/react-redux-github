const webpack = require('webpack');
const WebpackConfig = require('webpack-config');
const path = require('path');
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

module.exports = new WebpackConfig.Config().extend('./webpack/config-maker.js').merge({
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ],
    entry: {
        entry: [
            'babel-polyfill',
            hotMiddlewareScript,
            path.join(__dirname, '../src/entry.js'),
        ],
    },
    output:{
        publicPath:'/static/',
    }
});