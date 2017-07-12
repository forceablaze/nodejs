'use strict'

class Cat {
    static type() {
        console.log("cat")
    }
    constructor(name) {
        this.name = name
        console.log("Cat name: " + this.name)
    }

    toString() {
        return this.name
    }
}

export default Cat
