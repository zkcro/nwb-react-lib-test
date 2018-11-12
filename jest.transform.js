// Normally with jest we'd use a `.babelrc` file, but wen can't when using `nwb` (as it needs to
// create a temp one at build time). To get around this, we can use the following jest transform,
// in conjunction with the additional jest configs in `package.json`.
//
// Technique borrowed from  [NWB with jest](https://github.com/how-to-react/nwb-jest).
module.exports = require('babel-jest').createTransformer({
  presets: ['env', 'react'],
})
