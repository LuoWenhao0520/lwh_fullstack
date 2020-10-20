
var Berverage = function(){

}

Berverage.prototype.boilWater = function() {
    console.log('把水煮沸');
}
// 冲泡 空的方法
Berverage.prototype.brew = function() {
    // console.log('用沸水冲泡')
}
// 倒进杯子
Berverage.prototype.pureInCup = function() {
    // console.log('把...倒进杯子')
}
// 添加东西
Berverage.prototype.addCondiments = function() {

}
Berverage.prototype.init = function() {
    this.boilWater();
    this.brew();
    this.pureInCup();
    this.addCondiments();
}
// 原型继承
var Coffee = function() {
    
}
// Coffee.prototype = new Berverage();
Coffee.prototype = Berverage.prototype;
Coffee.prototype.brew = function(){
    console.log('冲泡咖啡');
}
Coffee.prototype.pureInCup = function(){
    console.log('将咖啡倒进杯子里');
}
Coffee.prototype.addCondiments = function(){
    console.log('加糖加牛奶');
}
var coffee = new Coffee();
coffee.init();
console.log(coffee.__proto__);