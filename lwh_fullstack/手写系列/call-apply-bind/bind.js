let b = {
    name: 'lwh'
}

function a(e,r) {
    this.name = e + r;
    console.log(this.name);
    console.log(e + r);
}

Function.prototype.mybind = function(thisArg) {
    if(typeof this !== 'function') {
        throw new TypeError('error')
    }

    const fn = Symbol('fn');

    thisArg = thisArg || window
    const args = [...arguments].slice(1)
    const self = this;

    const nop = function() {

    }

    const bound = function() {
        return self.apply(
            this instanceof nop ? this : thisArg
            ,args
        )
    }

    if(this.prototype) {
        nop.prototype = this.prototype
    }

    bound.prototype = new nop();

    return bound;

}

let res = a.mybind(b,4,5);

let newA = new res();

console.log(newA);