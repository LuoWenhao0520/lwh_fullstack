# 字节抖音电商

## es6 let const var

let 和 const 有块级作用域
var 只有函数作用域

var 有声明提升
let 和 const没有声明提升

let 和 const 不能多次声明相同变量名的变量
var可以

const 声明的变量不允许修改值
let 和 var可以

## for in为什么效率慢

for in 会一直遍历对象的原型链，在原型上找key

## GET 和 POST的区别

缓存角度，GET会被浏览器缓存下来，留下记录，而POST默认不会
编码角度，GET只能进行URL编码，只能接收ASCII数据，而POST无限制
参数角度，GET的参数放在URL里，相对不安全，POST的参数放在请求体里，相对安全，适合传输一些敏感数据
