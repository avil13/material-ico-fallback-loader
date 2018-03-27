import webpack from '@webpack-contrib/test-utils';

const loader = require('./../src/index.js');

const html_src = `
<div>
<i class="material-icons">3d_rotation</i>
<i class="material-icons right">cached</i>
<i class="left material-icons">check_circle</i>
</div>
`;

describe('Loader replace functions', () => {
    let html = '';
    const context_default = {
        callback(err, source) {}
    }
    let context;

    beforeEach(() => {
        html = html_src;
        context = Object.assign({}, context_default);
    });
    
    it('change simbols: 3d_rotation cached check_circle', () => {
        context['callback'] = function(err, source) {
                // 3d_rotation
                expect(source).toContain('&#xE84D');
                // cached
                expect(source).toContain('&#xE86A');
                // check_circle
                expect(source).toContain('&#xE86C');
        };
        
        loader.call(context, html);
    });
});





    // const config = {
    //     module: {
    //         rules: [
    //             {
    //                 test: /\.html$/,
    //                 loader: loader
    //             }
    //         ]
    //     }
    // };
