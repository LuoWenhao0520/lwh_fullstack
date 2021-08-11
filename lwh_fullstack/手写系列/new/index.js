
Person.prototype.say = function() {
    console.log('luowenhao');
}
function Person(name,age){
    this.name = name
    this.age = age
    return null
}

let person = new Person('lwh','18')
// console.log(person);
console.log(person);

function myNew() {
    let obj = {}

    let Constructor = Array.prototype.shift.call(arguments)

    obj.__proto__ = Constructor.prototype;

    let res = Constructor.apply(obj,arguments)

    return typeof res === 'object' && res !== null ? res : obj;
}

let obj = myNew(Person,'lwh','18')
obj.say();

console.log(obj);