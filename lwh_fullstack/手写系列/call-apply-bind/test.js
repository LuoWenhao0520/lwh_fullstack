Function.prototype.myApply = function(thisArg,...args){
  if(typeof this !== 'function'){
    throw new Error('error')
  }

  const fn = Symbol('fn')

  thisArg[fn] = this
  const result = thisArg[fn](...args)
  delete thisArg[fn]
  return result
}

function Person(name,age){
  this.name = name,
  this.age = age
}

let lwh = {}

Person.myApply(lwh,['lwh',12])

console.log(lwh);