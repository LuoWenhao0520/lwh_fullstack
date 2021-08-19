
let deepCopy = function (obj) {
  if(typeof obj !== 'object' || obj === null) return

  let newObj = obj instanceof Array ? [] : {}

  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      if(typeof obj[key] !== 'object' || obj[key] === null){
        newObj[key] = obj[key]
      }else{
        newObj[key] = deepCopy(obj[key])
      }
    }
  }
  return newObj
}

let arr = [{lwh: {name: 'lwh',age: 10},cyj: {name: 'cyj',age: 18}},20,32,null,undefined]

let newArr = deepCopy(arr)

arr[0].lwh.name = 'wen'

console.log(newArr);