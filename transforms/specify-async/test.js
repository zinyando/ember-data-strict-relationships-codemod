'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({ 
  name: 'specify-async',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});