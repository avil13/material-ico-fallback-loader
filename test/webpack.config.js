var path = require('path');
var RenameMaterialIcon = require('../src/index.js'); // this plugin


module.exports = {
  plugins: [
    new RenameMaterialIcon({
        path: '**/*.html'
      })
  ]
}
