Person.prototype.say = function(){
  console.log(this.name,this.age);
}

function Person(name,age) {
  this.name = name
  this.age = age

  return {
    name: name,
    age: age,
    say() {
      console.log('this is say',this.name,this.age);
    }
  }
}

function myNew(Constr,...args){
  if(typeof Constr !== 'function'){
    throw 'Constr is not a function';
  }
  let obj = Object.create(Constr.prototype)
  let res = Constr.apply(obj,args)

  let isObj = typeof res === 'object'
  let isFunc = typeof res === 'function'

  return isObj || isFunc ? res : obj
}

function test(){
  let lwh = myNew(Person,'lwh',18)
  let cyj = new Person('cyj',18)

  lwh.say()
  cyj.say()
}

test()