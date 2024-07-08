'use strict';

const polyfill = require('..');
const assert = require('assert').strict;

assert.strictEqual(polyfill(), 'Hello from polyfill');
console.info('polyfill tests passed');
