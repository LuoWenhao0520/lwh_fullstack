Person.prototype.lastName = 'Luo'

function Person(name) {
    this.name = name;

    this.fullName = function() {
        return this.lastName + ' ' + this.name;
    }
}

var person = new Person('Wenhao')

console.log(person.lastName + ' ' + person.name);

Person.prototype.lastName = 'L'

// console.log(person.lastName + ' ' + person.name);
console.log(person.fullName());


console.log(person.lastName);

// function Bus() {

// }

// Car.prototype = {
//     constructor: Bus
// }

function Car() {

}

var car = new Car();

console.log(Car.prototype);
