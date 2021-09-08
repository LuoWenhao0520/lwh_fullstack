class SingleDog{
  show() {
    console.log('我是一个单例对象');
  }

  static createInstance() {
    let instance = null
    return function() {
      if(!instance) {
        instance = new SingleDog()
      }

      return instance
    }
  }

  static getInstance = SingleDog.createInstance()
}

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

console.log(s1 === s2);