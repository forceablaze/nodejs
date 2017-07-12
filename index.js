'use strict'

import Cat from './cat.js'

const VAL = 10
const hello = require('./hello/hello.js')

var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

console.log(other)

let cat = new Cat("kina")
console.log(cat.toString())

console.log("cat's prototype " + cat.prototype)
console.log("cat's __proto__ " + cat.__proto__)
console.log("Cat's prototype " + Cat.prototype)
console.log("Cat's __proto__ " + Cat.__proto__)
console.log("hello() protytype " + hello.prototype)
hello.log()

let p1 = new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve("Success")
        }, 3000)
    }
)

p1.then((successMessage) => {
    console.log("Good ! " + successMessage)
});
