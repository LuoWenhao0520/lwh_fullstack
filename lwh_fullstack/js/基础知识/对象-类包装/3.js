// 类包装
// 原始值是不能有属性和方法，属性和方法是对象独有的

// var num = 123

// num.aaa = 'aaa'

// var num = Number(123)
// num.abc = 'aaa'

// console.log(num*2);
// console.log(num.abc);

var str = 'abcd'
console.log(str.length);

var num = 4
num.len = 3

// new Number(4).len = 3
// delete num.len

console.log(num.len); //new Number(4).len

// 以上为包装类

var arr = [1,2,3,4,5]
arr.length = 2
console.log(arr);

var str = 'abcd'
str.length = 2

console.log(str);

console.log(str.length);


// 面试题

var str = 'abc'

str += 1

var test = typeof(str)

console.log(typeof(test));

if(test.length == 6){
    test.sign = 'typeOf的返回结果可能是String'
}

console.log(test.sign);