// talk in js
// es5 类 大写的函数
// 1.把水煮开
// 2.用沸水冲泡咖啡
// 3.把咖啡倒进杯子
// 4.加糖和牛奶 
// constructor
// 类 是抽象，
// 实例化的对象
// 封装类的

var Coffee = function(type) {
    // {}
    this.type = type;
}

// 原型 
Coffee.prototype.boilWater = function() {
    console.log('把水煮开');    
}
Coffee.prototype.brewCoffeeGriends = function() {
    console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pureInCup = function() {
    console.log('把咖啡倒进杯子');
}
Coffee.prototype.addSugerAndMilk = function() {
    console.log('加糖和牛奶');
}
Coffee.prototype.init = function() {
    this.boilWater();
    this.brewCoffeeGriends();
    this.pureInCup();
    this.addSugerAndMilk();
}

var coffee = new Coffee("LuckinCoffee");
console.log(coffee.type);
console.log(coffee.__proto__ == Coffee.prototype);
coffee.init();
// js 类是怎么样构建起来的 = 火车头[函数(首字母大写)] + 车身[prototype,变量和函数]
// 构造函数和普通函数的区别是 是否被new
// 函数是一等对象
// console.log(coffee);
// js并没有类
// 只有对象 new {}
// 任何函数都有一个prototype属性
// 原型链
// 
console.log(Coffee.prototype.constructor == Coffee);

console.log(Coffee.prototype.__proto__)
