const WebpackConfig = require('webpack-config');
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const paths = {
    src: path.join(__dirname, '../src'),
    components: path.join(__dirname, '../src/components'),
    store: path.join(__dirname, '../src/store'),
    reducers: path.join(__dirname, '../src/reducers'),
    routes: path.join(__dirname, '../src/routes'),
    common: path.join(__dirname, '../src/common'),
    localStore: path.join(__dirname, '../node_modules/store/store.js'),
    middleware: path.join(__dirname, '../src/middleware'),
};

const config = {

    devtool: 'inline-source-map',

    entry: {
        vendor: ['react', 'redux', 'react-dom', 'react-redux', 'react-router'],
    },

    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        publicPath:'/static/',
        chunkFilename: '[name].[chunkhash:5].chunk.js',
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    ],

    module: {
        loaders: [
            // jsx
            {
                test: /\.jsx$/,
                loader: 'babel',
                exclude: /(node_modules)/
            },
            //js
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules)/
            },
            // less
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader!postcss-loader'
            },
            //css
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.(jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            }

        ]
    },

    postcss: [autoprefixer({
        browsers: ['last 7 versions']
    })],

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            'src': paths.src,
            'components': paths.components,
            'store': paths.store,
            'reducers': paths.reducers,
            'routes': paths.routes,
            'common': paths.common,
            'localStore': paths.localStore,
            'middleware': paths.middleware,
        }
    },
};

module.exports = new WebpackConfig.Config().merge(config);