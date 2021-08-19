let array = [[],-1,-3,{},null,'3']

// eval

let max = eval("Math.max(" + array + ")")

// apply
Math.max.apply(null,array)