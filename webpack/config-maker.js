var WebpackConfig = require('webpack-config');
var path = require('path');
var autoprefixer = require('autoprefixer');

var paths = {
    src: path.join(__dirname, '../src'),
    components: path.join(__dirname, '../src/components'),
    store: path.join(__dirname, '../src/store'),
    reducers: path.join(__dirname, '../src/reducers'),
    routes: path.join(__dirname, '../src/routes'),
    common: path.join(__dirname, '../src/common'),
    localStore: path.join(__dirname, '../node_modules/store/store.js'),
    middleware: path.join(__dirname, '../src/middleware'),
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
                loader: 'style-loader!css-loader!less-loader!postcss-loader'
            },
            //css
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            }

        ]
    },

    postcss: [ autoprefixer({ browsers: ['last 7 versions'] }) ],

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
    plugins: []
};

module.exports = new WebpackConfig.Config().merge(config);
