# material-ico-fallback-loader for webpack

Replace Material icons `version 1` key words to ligature

### Example:

```html
<i class="material-icons">android</i>
```
will be replaced with
```html
<i class="material-icons">&#xE859</i>
```

## [Demo](https://avil13.github.io/material-ico-fallback-loader/)


### How use

```bash
npm i -D material-ico-fallback-loader
```

```js
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /.html$/,
        loader: 'material-ico-fallback-loader'
      }
    ]
  }
};

```



Now is old
[https://material.io/icons/](https://material.io/icons/)

but you can download them from here

[demo/src/assets/iconfont](demo/src/assets/iconfont)

