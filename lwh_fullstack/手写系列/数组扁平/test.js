let arr = [1, [2, 3], [4, [5, 6]]]

function foo(arr){
  let res = []
  for(let i = 0,len = arr.length;i < len;i++){
    if(arr[i] instanceof Array){
      res.push(...foo(arr[i]))
    }else{
      res.push(arr[i])
    }
  }
  return res
}

function faltten(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }

  return arr
}


let newArr = faltten(arr)

console.log(newArr);