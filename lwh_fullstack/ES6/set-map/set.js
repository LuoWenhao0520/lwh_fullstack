let arr = [2,3,3,1,1,2,4,5]

let newArr = [...new Set(arr)]

console.log(newArr);

const fruitColor = new Map()

fruitColor.set(1,'luowenh')
.set('red',['apple','strawberry'])
.set('yellow',['banana','pear'])

function test(color) {
    return fruitColor.get(color);
}

console.log(test('red'));