
function a() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('ok')
      console.log('aaa');
    })
  })
}


function b() {
  console.log('bbb');
}


a().then(() => {b()})