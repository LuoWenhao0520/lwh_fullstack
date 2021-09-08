Function.prototype.myBind = function(thisArg,...args){
  if(typeof this !== 'function'){
    throw new Error('error')
  }

  const _self = this

  function nop() {

  }

  nop.prototype = this.prototype

  const bound = function(...bargs) {
    args.concat(bargs)
    return _self.apply(
      this instanceof _self ? this : thisArg,
      args
    )
  }

  bound.prototype = new nop()

  return bound
}