
console.log([] === []);

// 1. 两者类型是否相同， 相同就比大小
// 2. 类型不同，那么就进行类型转换
// 3. 会判断是否是null和undefined，是的话返回true
// 4. 会判断是否是string 和 Number, 是的话就将string转为number
// 5. 判断是否是布尔类型，是的话就把布尔类转化成number
// 6. 判断其中一方是否为object，且另一方为string,number,Symbol，是的话就把object转为原始类型进行判断

// for(var i = 1;i <=5 ;i++){
    
//     setTimeout(function timer(j) {
//         console.log(j);
//     },i*1000,i);
// };


let a = {
    age: 1,
    info: {
        name:'lwh'
    }
}

let b = Object.assign({},a)

a.info.name = '123'

console.log(b.info.name);