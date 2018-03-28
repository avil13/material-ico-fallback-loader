import webpack from '@webpack-contrib/test-utils';

const loader = require('./../src/index.js');

const html_src = `
<div>
<i class="material-icons">3d_rotation</i>
<i class="material-icons right">cached</i>
<i class="left material-icons">check_circle</i>
<i class="material-icons">{{ star ? 'star' : 'star_border' }}</i>
</div>
`;

describe('Loader replace functions', () => {
    const context_default = {
        callback(err, source) {}
    }
    let html = '';
    let context;

    beforeEach(() => {
        html = html_src;
        context = Object.assign({}, context_default);
    });
    
    it('change simbols: 3d_rotation cached check_circle', () => {
        context['callback'] = function(err, source) {
                console.log(source);
                // 3d_rotation
                expect(source).toContain('&#xE84D');
                // cached
                expect(source).toContain('&#xE86A');
                // check_circle
                expect(source).toContain('&#xE86C');
                // star
                expect(source).toContain('&#xE83A');
        };
        
        loader.call(context, html);
    });
});
