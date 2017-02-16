const webpack = require('webpack');
const WebpackConfig = require('webpack-config');
const path = require('path');

module.exports = new WebpackConfig.Config().extend('./webpack/base.config.js').merge({
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ],
    entry: {
        entry: [
            'babel-polyfill',
            path.join(__dirname, '../src/entry.js')
        ],
    },
    output:{
        publicPath:'https://faofao931013.github.io/react-redux-github/dist/'
    }
});