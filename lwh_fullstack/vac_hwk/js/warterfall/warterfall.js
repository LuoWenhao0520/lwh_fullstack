// 页面加载完成
window.onload = function() {
    imgLocation('container','box')
}

// 获取当前有多少张图片要摆放
function imgLocation(parent,content){
    var cparent = document.getElementById(parent)
    var ccontent = getChildElement(cparent,content)
    // console.log(ccontent);
    var imgWidth = ccontent[0].offsetWidth
    var num = Math.floor(document.documentElement.clientWidth / imgWidth)
    cparent.style.width = `${imgWidth * num}px`
    
    // 拿到第二行的第一张图片放到第一行高度最小的图片下面
    var BoxHeightArr = []
    for(var i = 0;i < ccontent.length;i++){
        if(i < num){
            BoxHeightArr.push(ccontent[i].offsetHeight)
        }else{
            //将Math里面的min方法借给数组去用
            var minIndex = getMinHeightLocation(BoxHeightArr);
            var minHeight = BoxHeightArr[minIndex];
            ccontent[i].style.position = 'absolute';
            ccontent[i].style.top = minHeight + 'px';
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px';
            BoxHeightArr[minIndex] += ccontent[i].offsetHeight;
        }
    }
}

function getMinHeightLocation(arr){
    var minIndex = 0;
    for(var i = 0;i < arr.length;i++){
        if(arr[i] < arr[minIndex]){
            minIndex = i;
        }
    }
    return minIndex;
}

function getChildElement(parent,content) {
    var contentArr = []
    var allContent = parent.getElementsByTagName('*')
    // console.log(allContent);
    for(var i = 0;i < allContent.length;i++){
        if(allContent[i].className == content){
            contentArr.push(allContent[i]);
        }
    }
    return contentArr;
}

