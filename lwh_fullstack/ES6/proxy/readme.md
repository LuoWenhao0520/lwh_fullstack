# proxy

## proxy和defineProperty

defineProperty 只能定义读(get)写(set)， Proxy可以定义更多的行为，比如:in ,delete

let proxy = new Proxy(target,handler)

target: 要拦截的目标对象
handler: 一个对象，用来定制拦截行为
