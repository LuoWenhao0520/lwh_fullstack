Function.prototype.mycall = function(thisArg,...args){
  if(typeof this !== 'function'){
    throw new TypeError('error')
  }

  const fn = Symbol('fn');
  thisArg = thisArg || window
  args = args || []

  thisArg[fn] = this
  var res = thisArg[fn](...args)
  delete thisArg[fn]
  return res
}

var obj = {
  name: 'lwh',
  age: 18
}


function foo(a,b){
  console.log(this.name,this.age);
  return this.age + a + b;
}
console.log(foo.call(obj,1,2));
