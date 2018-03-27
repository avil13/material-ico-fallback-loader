const path = require('path');

const config = {
    assetsRoot: path.join(__dirname, '../dist'),
    mainJs: path.join(__dirname, 'html/script.js'),
    mainHtml: path.join(__dirname, 'html/index.html')
};

module.exports = config;