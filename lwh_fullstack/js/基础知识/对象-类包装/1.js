var person = {
    name: 'lwh',
    age: 20,
    sex: 'boy',
    health: 100,
    drink: function() {
        console.log('I am drinking');
        this.health++;
    },

    somke: function() {
        console.log('I don\'t somke');
        this.health--;
    }
}

// person.health++;

// person.somke();

// console.log(person.health);

// 增

person.gf = 'cy'

// console.log(person);

// console.log(person.sex);

// 删

delete person.gf

// console.log(person);

// 改

person.age = 21

// console.log(person);

// 查

// console.log(person.gf);


// 创建对象

// 1. var obj = {}
// 2. 构造函数
    // 1. 系统自带的构造函数 Object()
    // 2. 自定义

function Car(color) {
    this.name = 'BMW'
    this.height = '1400'
    this.length = '4900'
    this.weight = 1000

    this.health = 100
    this.run = function () {
        this.health--;
    }

    this.color = color;
}

var car = new Car('black')
var car1 = new Car('white')

car.run()

console.log(car1);

