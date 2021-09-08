var arr = [0,1,2]

arr[10] = 10

console.log(arr);

console.log(arr.filter(function(x) {
  return x === undefined
}));

