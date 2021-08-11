
function Person(name) {
    this.name = name
}

Person.prototype.say = function () {
    console.log('hhh');
}

var person = new Person('www');

var person1 = new Person();


console.log(Person.prototype);
person.say();

console.log(person);
console.log(person1.name);
