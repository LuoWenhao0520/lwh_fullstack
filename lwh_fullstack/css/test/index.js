function findMax(){
    var res = 0;
    for(var i = 0;i < arguments.length;i++){
        if(arguments[i] > res)
            res = arguments[i];
    }
    return res;
}

var x = findMax(2,3,5,10,7,1);

console.log(x);