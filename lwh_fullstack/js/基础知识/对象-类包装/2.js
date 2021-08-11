function myPerson(name,age) {
    var that = {};

    that.name = name,
    that.age = age
    return that;
}

var person1 = myPerson('lwh',20);

console.log(person1);

function Car(color) {
    this.name = 'BMW';
    this.color = color;
    return {}
}

var num = Car('red');
var car = new Car('red')

console.log(num);
console.log(car);