// let key1 = Symbol(1)
// let key2 = Symbol(1)

// // console.log(key1 === key2);

// // console.log(typeof(null));


// function test(person) {
//     person.age = 26
//     person = {
//         name: 'yyy',
//         age: 30
//     }
//     return person;
// }

// const p1 = {
//     name: 'xxx',
//     age: 25
// }


// const p2 = test(p1);


// // console.log(p1);
// // name:xxx,age:26
// // console.log(p2);
// // name:yyy,age:30

// console.log('hello' instanceof Object);

// class PrimitiveString {
//     static [Symbol.hasInstance] (x) { // 让我们自定义instanceof行为
//         return typeof x === 'string'
//     }
// }

// console.log('hello' instanceof PrimitiveString);

let a = '1'
let b = Number(a)

console.log(b);

console.log(String(undefined));