const config = require('@lobehub/lint').eslint;

config.extends.push('plugin:@next/next/recommended');

config.rules['unicorn/numeric-separators-style'] = 0;

module.exports = config;
