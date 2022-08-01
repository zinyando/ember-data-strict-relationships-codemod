'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({ 
  name: 'add-related-types',
  path: require.resolve('./index.js'),
  fixtureDir: `${__dirname}/__testfixtures__/`,
});