Array.prototype.f = 'f'

let arr = ['a','b','c','d','e']

// for(let i = 0;i < arr.length;i++){
//     console.log(arr[i]);
// }

let obj = {
    naem: 'lwh',
    age: 18,
    sex: 'boy'
}

for(let k in obj) {
    console.log(k);
}

for(let key in arr){
    console.log(key);
}

function Foo() {
    this[100] = 'test-100'
    this[1] = 'test-1'
    this['b'] = 'test-b'
    this[10] = 'test-10'
    this['A'] = 'test-A'
    this[5] = 'test-5'
}

let foo = new Foo();

for(let key in foo){
    console.log(key);
}

// 