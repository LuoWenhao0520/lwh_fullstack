var bird = {
    flyTime: null, // 小鸟飞翔的定时器
    wingTimer: null, //翅膀摆动定时器

    div: document.createElement('div'),
    showBird: function(parentObj){
        this.div.style.width = '40px'
        this.div.style.height = '28px'
        this.div.style.backgroundImage = 'url(\'img/bird0.png\')'
        this.div.style.backgroundRepeat = 'no-repeat'
        this.div.style.position = 'absolute'
        this.div.style.left = '50px'
        this.div.style.top = '200px'
        this.div.style.zIndex = '1'
        parentObj.appendChild(this.div)
    },
    fallSpeed: 0, // 小鸟下降速度

    flyBird: function() { //控制小鸟下落
        this.flyTime = setInterval(fly,60)
        function fly() {
            bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ + 'px'
            if(bird.div.offsetTop >= 395){//掉到地面,清除定时器
                clearInterval(bird.flyTime)
                clearInterval(bird.wingTimer)
                bird.fallSpeed = 0
            }
            // 不让小鸟飞出界
            if(bird.div.offsetTop < 0){
                bird.div.style.top = '0px'
                bird.fallSpeed = 2
            }
            if(bird.fallSpeed > 12){
                bird.fallSpeed = 12
            }
        }
    },

    wingWave: function() { //控制小鸟翅膀扇动
        var up = ['url(img/up_bird0.png)','url(img/up_bird1.png)']
        var down = ['url(img/down_bird0.png)','url(img/down_bird1.png)']
        var i = 0,j = 0;
        bird.wingTimer = setInterval(wing,120)

        function wing() {
            if(bird.fallSpeed > 0){
                bird.div.style.backgroundImage = down[j];
                j = 1 - j;
            }else if(bird.fallSpeed < 0){
                bird.div.style.backgroundImage = up[i];
                i = 1 - i;
            }
        }
    }
}