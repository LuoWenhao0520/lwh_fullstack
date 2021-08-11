// Promise.prototype.then = function() {}
// Promise.prototype.catch = function() {}

// class Promise {
//     constructor() {

//     }

//     all() {

//     }

//     race() {

//     }
// }


function xq() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('xq');
            resolve('成功')
            // reject('tai')
        },1000)
    })
    
}

function marry() {
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log('结婚大吉');
            resolve('洞房');
        },500);
    })

}

function baby() {
    
    console.log('little luo');
}

xq()
    .then((res) => {
        console.log(res);
        return marry()
    })
    .then((result) => {
        console.log(result);
        baby();
    })