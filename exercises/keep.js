'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
const keepFirst = (a) => a.slice(0,1);
const keepLast = (a) => a.slice(-2, -1);
const keepFirstLast = (a) => a.slice(3,4);

//* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests */
