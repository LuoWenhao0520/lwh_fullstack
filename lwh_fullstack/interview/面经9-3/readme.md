# 字节

## ES6新特性

let const

## let const var区别

let 和 const有块级作用域
var 作用域为整个函数体

var 有声明提升，let 和 const 没有

## 水平垂直居中

flex:

```css
.container{
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hotpink;
}
.center{
  width: 50px;
  height: 50px;
  background-color: red;
}
```

position:

```css
.container{
  width: 300px;
  height: 300px;
  background-color: hotpink;
  position: relative;
}
.center{
  width: 50px;
  height: 50px;
  background-color: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

}
```

## flex布局

flex

传统的布局方式是基于盒子模型，需要用display + postion + float来布局
对于一些类似垂直居中就不是很好处理

flex布局很好的解决了这些问题

父容器属性：

- flex-direction 主轴方向

  1. row 默认， 主轴为横轴
  2. cloum 主轴为竖轴
  3. row-reserve
  4. cloum-reverse

- flex-wrap 是否换行
  
  1. nowrap 默认 不换行
  2. wrap 换行
  3. wrap-reverse 换行，第一行在最下面

- justify-content 主轴对齐方式

  1. flex-start 左对齐
  2. flex-end 右对齐
  3. center 中间对齐
  4. space-between 两端对齐，每个项目之间的间隔相等
  5. space-around 每个项目两侧的间隔相等

- aligin-item 交叉轴对齐方式

  1. flex-start 交叉轴的起点对齐
  2. flex-end 交叉轴的终点对齐
  3. baseline 项目的第一行文字的基线对齐
  4. center 中间对齐

## box-sizing

- content-box (默认)

width = border + padding + content

- border-box

width = width

- inherf

继承父容器

## BFC

块级格式化上下文，区域内的样式不会影响到区域外

## 闭包

函数作用域中的变量，在函数执行后没有被立即销毁，而是保存在了闭包变量里

## 手写flatten

```js
let arr = [1, [2, 3], [4, [5, 6]]]

function flatten(arr){
  let res = []

  for(let i = 0,len = arr.length;i < len;i++){
    if(arr[i] instanceof Array){
      res.push(...flatten(arr[i]))
    }else{
      res.push(arr[i])
    }
  }
  return res;
}

let newArr = flatten(arr)

console.log(newArr);
```

## ES5 ES6区别

ES6新增了class, let, const
call, apply, bind

## 手写call,apply,bind

```js
Function.prototype.myCall = function(thisArg,...args){
  if(typeof this !== 'function'){
    throw new Error('error')
  }

  let fn = Symbol('fn')

  thisArg[fn] = this
  let res = thisArg[fn](...args)
  delete thisArg[fn]
  return res
}

function foo(a,b){
  this.a = a;
  this.b = b;
  console.log(a,b);
}

let lwh = {
  a: '1',
  b: 2
}

foo.myCall(lwh,3,4)

console.log(lwh);
```

```js
Function.prototype.myApply = function(thisArg,args){
  if(typeof this !== 'function'){
    throw new Error('error')
  }

  let fn = Symbol('fn')

  thisArg[fn] = this
  let res = thisArg[fn](...args)
  delete thisArg[fn]
  return res
}

function foo(a,b){
  this.a = a;
  this.b = b;
  console.log(a,b);
}

let lwh = {
  a: '1',
  b: 2
}

foo.myApply(lwh,[3,4])

console.log(lwh);
```


