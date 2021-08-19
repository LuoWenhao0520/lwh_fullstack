
function unique(arr,isSorted,iteratee) {
  let res = []
  let seen = []
  for(let i = 0,len = arr.length;i < len;i++){
    let value = arr[i];
    let computed = iteratee ? iteratee(value,i,arr) : value

    if(isSorted){
      if(!i || seen !== computed)
        res.push(value)
      seen = computed
    }else if(iteratee){
      if(res.indexOf(computed) === -1){
        res.push(value)
      }
    }else{
      if(res.indexOf(value) === -1)
        res.push(value)
    }
  }
  return res;
}

let arr1 = [1,2,3,1,2,'1','1',3,'3']

arr1 = unique(arr1,false)

let arr2 = [1,'1',2,'2',3,'a',5,6,'a','b']

arr2 = unique(arr2,false)

