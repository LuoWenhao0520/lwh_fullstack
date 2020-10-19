
var Tea = function(type){
    this.type = type;
}

Tea.prototype.boilWater = function() {
    console.log('把水煮开');
}
Tea.prototype.soakingTea = function() {
    console.log('浸泡茶叶');
}
Tea.prototype.pureToCup = function() {
    console.log('把茶水倒进杯子');
}
Tea.prototype.addLemo = function() {
    console.log('加柠檬');
}

Tea.prototype.init = function() {
    this.boilWater();
    this.soakingTea();
    this.pureToCup();
    this.addLemo();
}

var tea = new Tea('大红袍');
console.log(tea.type);
tea.init();
console.log(Tea.__proto__);

console.log(tea.__proto__);