Function.prototype.myapply = function(thisArg,args) {
    if(typeof this !== 'function'){
        throw new TypeError('Error')
    }

    const fn = Symbol('fn')

    thisArg = thisArg || window
    args = args || []
    thisArg[fn] = this;
    const result = thisArg[fn](...args)
    delete thisArg[fn]

    return result;
}

let b = {
    name: 'lwh',
    age: '19'
}

function foo(a,b) {
    console.log(this.name,this.age);
    console.log(a + b);
}

foo.apply(b,[1]);