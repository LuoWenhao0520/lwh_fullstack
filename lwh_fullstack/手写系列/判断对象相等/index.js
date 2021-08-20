// +0 === -0 | false
// function eq(a,b) {
//   if(a === b) return a !== 0 || 1 / a === 1 / b


// }


// NaN === NaN | true
// function eq(a,b) {
//   if(a !== a) return b !== b
// }

function eq(a,b) {
  if(a == null || b == null) return false
  if(a === b) return a !== 0 || 1 / a === 1 / b
  if(a !== b) return b !== b
  if(+a !== +a) return +b !== +b

  let type = typeof(a)
  if(type !== 'function' && type !== 'object' && typeof(b) !== 'object') return false

  return deepEq(a,b)
}

function deepEq(a,b){
  let toString = Object.prototype.toString;
  
}

console.log();