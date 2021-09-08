class EventEmitter{
  constructor() {
    this.events = {}
  }

  on(type,fn){
    if(!this.events[type])
      this.events[type] = []
    this.events[type].push(fn)
    return this;
  }

  emit(type,...args){

    let fns = this.events[type]
    if(!fns)
      return false;
    let _self = this

    fns.forEach((fn) => {
      fn.apply(_self,args)
    })
    return _self;
  }
}