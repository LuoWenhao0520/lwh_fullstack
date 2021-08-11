function a() {

    return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log('aa');
            resolve('ok');
        },100);
    })
    
}

function b() {
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log('bb');
            resolve('ok');
            // reject('wrong')
        },150);
    })
}
function c() {
    return new Promise((resolve,reject) => {
        setTimeout( () => {
            console.log('cc');
            resolve('ok');
        },50);
    })
}
function d() {
    console.log('dd');
}




// Promise.all([a(),b(),c()]).then(d)

// Promise.race([a(),b(),c()]).then(d)

a().then(b).then(c).finally(d)
