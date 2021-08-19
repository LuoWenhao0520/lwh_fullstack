// let arr = ['old',1,true,null,{name: 'lwh',age: 18}]

// let new_arr = arr.concat()

// arr[1] = 'lwh'
// arr[4].name = 'wen'

// console.log(new_arr);



// let arr = [{name: 'lwh'},1,true,null,32]

// let new_arr = arr.slice()

// arr[0].name = 'wen'

// console.log(new_arr);



// let arr = [{old: 'old'},1,true,null,undefined]

// let new_arr = JSON.parse(JSON.stringify(arr))

// arr[0].old = 'new'

// console.log(new_arr);


let arr = [function() {console.log('a');},{b: function(){console.log('b');}}]

let new_arr = JSON.parse(JSON.stringify(arr))

console.log();