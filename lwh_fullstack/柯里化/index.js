function ajax(type, url, data) {
  let xhr = new XMLHttpRequest()

  xhr.open(type,url,true)
  xhr.send(data)
}

ajax('POST','www.test.com','name="lwh"')
ajax('POST','www.test2.com','name="lwh"')
ajax('POST','www.test3.com','name="lwh"')

// 利用柯里化
let ajaxCurry = curry(ajax)

// 以post请求
let post = ajaxCurry('POST')

// post('www.test.com','name="lwh"')

let postFromTest = post('www.test.com')
postFromTest('lwh')

function curry(fn) {
  let args = [].slice.call(arguments,1)
  return function() {
    return fn.apply(this,args)
  }
}