// console.log('start require');
// console.log(require('./lib.js'));
// console.log('end require');

let lib = require('./lib.js')

console.log(lib);

lib.name = 'lwh'

// exports导出的应用和index.js里面的lib是一个引用