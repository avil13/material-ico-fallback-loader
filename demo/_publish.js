const ghpages = require('gh-pages');

const login = 'avil13';
const name = 'material-ico-fallback-loader';

ghpages.publish('dist', {
    repo: `git@github.com:${login}/${name}.git`
}, function(err) {
    if (err) {
        console.log(err);
    }

    console.log(` https://${login}.github.io/${name}/ \n\n`);
});