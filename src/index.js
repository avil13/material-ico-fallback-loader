const grid_icon = require('./grid');
const icons = {};

for (let i=0; i < grid_icon.icons.length; i++) {
    const v = grid_icon.icons[i];
    icons[v.ligature] = '&#x' + v.codepoint;
}

module.exports = function(content, map, meta) {
    this.callback(null, replaceIco(content), map, meta);
    return; // always return undefined when calling callback()
};


function replaceIco(content) {
    if (/class="material-icons"/.test(content)) {
        content = content.replace(/(material-icons[^>]*>)([^<]+)/g, ($0, $1, $2) => {
            if (icons[$2]) {
                return $1 + icons[$2];
            }
            return $0;
        })
    }
    return content;
}
