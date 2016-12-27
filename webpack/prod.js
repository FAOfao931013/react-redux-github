const webpack = require('webpack');
const WebpackConfig = require('webpack-config');
const path = require('path');

module.exports = new WebpackConfig.Config().extend('./webpack/config-maker.js').merge({
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
        publicPath:'/react-redux-github/dist'
    }
});