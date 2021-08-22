// ----------------demo1

// let proxy = new Proxy({},{
//   get: function(obj,prop){
//     console.log('get操作');
//     return obj[prop]
//   },
//   set: function(obj,prop,value) {
//     console.log('set操作');
//     obj[prop] = value
//   }
// })
// proxy.time = 35


// console.log(proxy.time);




// ---------------demo2

// let handler = {
//   has (target,key) {
//     if(key[0] === '_'){
//       return false
//     }
//     return key in target
//   }
// }

// let target = {_prop: 'lwh',prop: 'name'}

// let ptarget = new Proxy(target,handler)


// console.log('prop' in ptarget);


// ---------demo3

// let target = function() {
//   return 'I am the target'
// }

// let handler = {
//   apply: function() {
//     return 'I am the Proxy'
//   }
// }

// let p = new Proxy(target,handler)

// console.log(p());


// ------------demo4

let target = {
  _bar: 'foo',
  _prop: 'bar',
  prop: 'baz'
}

let handler = {
  ownKeys(target) {
    return Reflect.ownKeys(target).filter(key => key[0] !== '_')
  }
}

let proxy = new Proxy(target,handler)

console.log(proxy);

for(let key of Object.keys(proxy)) {
  console.log(key);
}

for(let key in proxy) {
  console.log(key);
}
