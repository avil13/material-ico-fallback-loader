const RenameMaterialIcon = require('../src/index.js'); // this plugin
const config = require('./config');

module.exports = {
    mode: 'development',
    entry: {
        app: config.mainJs
    },
    resolve: {
        extensions: [ '.js', '.html' ]
    },
    output: {
        path: config.assetsRoot,
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /.html$/,
                loader: 'material-ico-fallback-loader'
            }
        ]
    },
    resolveLoader: {
        alias: {
            'material-ico-fallback-loader': path.join(__dirname, '../src/index.js')
        }
    }
};
