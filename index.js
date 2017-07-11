'use strict'

const VAL = 10
const hello = require('./hello/hello.js')

var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

test()
console.log(other)

hello.log()
