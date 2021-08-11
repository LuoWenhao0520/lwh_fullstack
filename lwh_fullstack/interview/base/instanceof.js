// 手写instanceof

let arr = [1,2,3]

function instance_of(L,R) {
    L = L.__proto__
    let O = R.prototype

    while(L !== O && L !== null)
        L = L.__proto__
    
    return L === O;
}



console.log(instance_of(arr,Object));