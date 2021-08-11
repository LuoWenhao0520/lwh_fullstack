Function.prototype.mycall = function(thisArg) {
    if(typeof this !== 'function'){
        throw new TypeError('Error');
    }

    // 让this代表的函数 去到 thisArg里面生效

    const fn = Symbol('fn') //防止fn这个单词被占用

    // 把this代表的函数所拥有的所有参数先取到

    const args = [...arguments].splice(1)

    thisArg = thisArg || window

    // 将调用call函数的方法添加到thisArg的属性中

    thisArg[fn] = this
    const result = thisArg[fn](...args)
    delete thisArg[fn]
    return result;
}

let b = {
    name: 'lwh',
    age: '18'
}

function foo(a,b) {
    console.log(this.name);
    console.log(this.age);
    console.log(a + b);
}

foo.call(b,1,2)