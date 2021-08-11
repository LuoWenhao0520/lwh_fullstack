var num = 123

Number.prototype.toString = function() {
    return 'he123'
}

console.log(num.toString());


Person.prototype.toString = function() {
    return 'hehe';
}

function Person() {

}

var person = new Person()

console.log(person.toString());