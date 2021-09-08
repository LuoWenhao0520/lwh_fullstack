function getJson() {
  return 'JSON'
}


async function testAsync() {
  try{
    await getJson()
  }catch(err) {
    console.log(err);
  }
}

let result = testAsync()

console.log(result);

// 1. async函数在申明形式上和普通的函数没有区别

// 2. 任何一个await语句后面的Promise对象变成reject状态，那么整个async函数会中断

// 3. async函数返回Promise对象，必须要等到内部所有的await命令后面的Promise对象执行完才会发生状态改变，除非遇到return语句或者抛出错误

