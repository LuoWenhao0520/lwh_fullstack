// 在规定的时间内只触发一次

function throttle(fn,delay){
    let prev = null//上一次点击
    // 这一次点击

    return function() {
        let now = Date.now()
        let $this = this;
        let arg = arguments
        if(!prev || now - prev >= delay){
            fn.apply($this,arg)
            prev = now;
        }
    }
    
}