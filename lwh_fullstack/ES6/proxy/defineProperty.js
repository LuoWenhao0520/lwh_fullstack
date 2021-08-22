// Object.defineProperty(obj,prop,descriptor)

// obj: 要被监听的哪个对象
// prop: 要被定义或修饰的修改的属性名称
// descriptor: 将被定义或修改的属性的描述符

// 出现数据描述符或者存取描述符，不能同时出现

let obj = {}

Object.defineProperty(obj,'num',{
  value: 1,
  writable: false,
  enumerable: true,
  configurable: true,

  // getter
  get: undefined,
  // setter
  set: function(val) {

  }
})

obj.num = 2

console.log(obj)
