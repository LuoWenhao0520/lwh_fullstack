// let arr = [1,[2,[3,4]]]

// function faltten(arr) {
//   let newArr = []

//   for(let i = 0,len = arr.length;i < len;i++) {
//     if(arr[i] instanceof Array) {
//       // newArr.push(...faltten(arr[i]))
//       newArr = newArr.concat(faltten(arr[i]))
//     }else{
//       newArr.push(arr[i])
//     }
//   }

//   return newArr
// }

// let newArr = faltten(arr)

// console.log(newArr);

// reduce
// function faltten(arr) {
//   return arr.reduce(function(prev,next) {
//     return prev.concat(Array.isArray(next) ? faltten(next) : next)
//   },[])
// }


function faltten(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }

  return arr
}

