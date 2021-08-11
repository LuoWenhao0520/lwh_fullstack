const fs = require('fs');

fs.readFile('./index.html','utf-8', (err,file) => {
    console.log(file);
})

// 包装一层 promise

let p3 = (url) => new Promise((resolve,reject) => {
    fs.readFile(url,'utf-8',(err,file) => {
        if(err){
            reject();
        }else{
            resolve(file);
        }
    })
})

p3('./index.html')
.then((file) => {
    console.log(file);
})

