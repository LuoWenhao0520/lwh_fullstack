// 售楼处 发布者 发布楼价多少
// addEventListener 如何
var saleOffices = {

}
// 买房的人 订阅者
saleOffices.clientList = [];

// document.body.addEventListener()

saleOffices.listen = function(fn) {
    this.clientList.push(fn)
}

saleOffices.trigger = function(price,squareMenter) {
    for(var i = 0;i < this.clientList.length;i++){
        console.log(this.clientList[i]);
        this.clientList[i](price,squareMenter);
    }
}

saleOffices.listen(function(price,squareMenter){
    if(price > 18000){
        console.log('我的菜');
    }
    else{
        console.log('太便宜了');
    }
    console.log('价格:' + price);
    console.log('面积:' + squareMenter);
})

saleOffices.listen(function(price,squareMenter){
    if(squareMenter > 100){
        console.log('我的菜');
    }
    else{
        console.log('太小了');
    }
    console.log('价格:' + price);
    console.log('面积:' + squareMenter);
})

// click
saleOffices.trigger(20000,88)