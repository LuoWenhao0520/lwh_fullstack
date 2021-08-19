
let array = [1,2,1,3,2,1,'1',3,5,'1','2']

function uniqueOn2(arr) {
  let res = []
  for(let i = 0;i < arr.length;i++) {
    
    for(var j = 0;j < res.length;j++){
      if(arr[i] === res[j]){
        break;
      }
    }
    if(j === res.length)
      res.push(arr[i])
  }
  return res;
}

// console.log(uniqueOn2(array));

function uniqueIndexOf(arr) {
  let res = []
  for(let i = 0;i < arr.length;i++){
    let isFind = res.indexOf(arr[i])
    if(isFind === -1)
      res.push(arr[i])
  }
  return res;
}

function uniqueSort(arr) {
  let res = []
  let sortedArr = arr.concat().sort()
  console.log(sortedArr);
  let seen = 0;
  for(let i = 0;i < sortedArr.length;i++){
    if(seen === 0 || res[seen - 1] !== sortedArr[i]){
      res.push(sortedArr[i]);
      seen++;
    }
  }
  return res;
}

console.log(uniqueSort(array));