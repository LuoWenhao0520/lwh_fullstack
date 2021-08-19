function isBigEnough(element) {
  return element >= 15
}
console.log([12,1,5,8,123,44].findIndex(isBigEnough));

function findIndex(arr,fn) {
  for(let i = 0;i < arr.length;i++){
    if(fn(arr[i]))
      return i;
  }

  return -1;
}

console.log(findIndex([1,2,3,3,4],(item) => item === 3));
