const RenameMaterialIcon = require('../src/index.js'); // this plugin
const config = require('./config');


module.exports = {
  mode: 'development',
  entry: {
    app: config.mainJs
  },
  output: {
    path: config.assetsRoot,
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new RenameMaterialIcon({
        path: '**/*.html'
      })
  ]
}
