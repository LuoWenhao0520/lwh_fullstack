function getConstant() {
  return 1
}

async function getAsyncConstant() {
  return 1
}

async function getPromise() {
  return new Promise((resolve,reject) => {
    resolve(1)
  })
}

async function test() {
  console.log('a = 2');
  console.log('c = 1');
  await getConstant()
  console.log('d = 3');
  await getPromise()
  console.log('e = 4');
  await getAsyncConstant()
  return 2
}

console.log(test());