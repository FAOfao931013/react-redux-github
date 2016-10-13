const webpack = require('webpack');
var WebpackConfig = require('webpack-config');
var path = require('path');


module.exports = new WebpackConfig.Config().extend('./webpack/config-maker.js').merge({
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ minimize: true }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    entry: {
        entry: [
            path.join(__dirname, '../src/entry.js')
        ]
    },
});
