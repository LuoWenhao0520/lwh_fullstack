// 能独立监听某个数据的变化
// 提供可执行函数的场所

class watcher {
  constructor(opts) {
    this.$data = this.getBaseType(opts.data) === 'Object' ? opts.data : {}
    this.$watch = this.getBaseType(opts.watch) === 'Object' ? opts.watch : {}
    for(let key in opts.data) {
      this.setData(key)
    }
  }

  getBaseType(target) {
    const typeStr = Object.prototype.toString.call(target)
    return typeStr.slice(8,-1)
  }

  setData(_key) {
    Object.defineProperty(this,_key, {
      get: function() {
        return this.$data[_key]
      },
      set: function(newVal) {
        const oldVal = this.$data[_key]
        if(newVal === oldVal) return newVal
        this.$watch[_key] && this.getBaseType(this.$watch[_key]) === 'Function' && (
          this.$watch[_key].call(this,newVal,oldVal)
        )
        this.$data[_key] = newVal
      }
    })
  }
}

let vm = new watcher({
  data: {
    a: 0,
    b: 'hello'
  },

  watch: {
    a (newVal,oldVal) {
      console.log(newVal,oldVal);
    }
  }
})

vm.a = 2