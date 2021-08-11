Car.prototype.name = 'BMW';
Car.prototype.length = 4900;
Car.prototype.height = 1400;

function Car(color,owner) {
    this.color = color;
    this.owner = owner;
}

var car = new Car('blk','lwh');

console.log(car);

console.log(car.name);