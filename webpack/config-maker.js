var WebpackConfig = require('webpack-config');
var path = require('path');

var paths = {
    src: path.join(__dirname, '../src'),
    components: path.join(__dirname, '../src/components'),
    store: path.join(__dirname, '../src/store'),
    reducers: path.join(__dirname, '../src/reducers'),
    routes: path.join(__dirname, '../src/routes'),
    common: path.join(__dirname, '../src/common'),
    localStore: path.join(__dirname, '../node_modules/store/store.js')
};

var config = {

    devtool: '#source-map',

    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        clearBeforeBuild: true,
        publicPath: '/static/'
    },

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
                loader: "style!css!less"
            },
            //css
            {
                test: /\.css$/,
                loaders: [
                    'style',
                    'css?root=.'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'url-loader'
            }

        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            'src': paths.src,
            'components': paths.components,
            'store': paths.store,
            'reducers': paths.reducers,
            'routes': paths.routes,
            'common': paths.common,
            'localStore': paths.localStore
        }
    },
    plugins: []
};

module.exports = new WebpackConfig.Config().merge(config);
