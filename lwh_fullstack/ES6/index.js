
// let example = 'Tom'

// const foo = 'this is' + example

// const foo = `this is ${example}`

// ES6新增数组方法

// let arr = ['a','b','c']

// console.log(Object.keys(arr));

// let newArr = [...arr.keys()]
// console.log(newArr);

// let iter = arr.entries()

// for(let e of iter){
//     console.log(e);
// }

// console.log(iter);

// let eArr = arr.values();
// console.log(eArr);

// for(let e of eArr){
//     console.log(e);
// }



// function test(fruit) {
//     const redFruits = ['apple','strawberry','cherry']

//     if(redFruits.includes(fruit)){
//         console.log('red');
//     }
// }

// test('apple')


// let people = [
//     {name: 'lwh',age:20},
//     {name: 'wenhao',age:21},
//     {name: 'cyy',age:22},
//     {name: 'cyy',age:10}
// ]

// function findFriend(person) {
//     return person.name === 'cyy'
// }

// console.log(people.find(findFriend));


let test = ['a','b','c']

function index(i){
    return i == 'b';
}

console.log(test.findIndex(index));