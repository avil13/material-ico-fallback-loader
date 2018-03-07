const glob = require('glob');

const _otions = {
    path: '**/*.html'
};

const RenameMaterialIcon = function(options){
    this.options = Object.assert({}, options, _options);
};

RenameMaterialIcon.prototype.apply = function (compiler) {
    
};