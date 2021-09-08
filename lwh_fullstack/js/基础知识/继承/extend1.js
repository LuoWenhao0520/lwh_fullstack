function Parent() {
  this.names = ['lwh','cyj']
}

Parent.prototype.getName = function() {
  console.log(this.name);
}

function Child() {
  
}

Child.prototype = new Parent()

let child = new Child()

child.getName()