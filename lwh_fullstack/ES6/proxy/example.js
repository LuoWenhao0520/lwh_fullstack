function Archiver() {
  let value = null
  let values = []
  Object.defineProperty(this,'num',{
    get: function() {
      console.log('执行get');
      return value
    },

    set: function(newVal) {
      console.log('执行set');
      value = newVal
      values.push({value: value})
    }
  })

  this.getArchive = function() {
    return values
  }
}

let obj = new Archiver()

obj.num = 2
obj.num = 33
console.log(obj.num);

console.log(obj.getArchive());
