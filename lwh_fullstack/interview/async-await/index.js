function getJson() {
  
  return new Promise((resolve,reject) => {
    setTimeout(function(){
      console.log(2);
      resolve(999)
    },2000) 
  })
}

async function testAsync() {
  let data = await getJson()
  console.log(3);
  console.log(data);
}

// function testAsync() {
//   return Promise.resolve().then(() => {
//     return getJson()
//   }).then(() => {
//     console.log(3);
//   })
// }

testAsync()