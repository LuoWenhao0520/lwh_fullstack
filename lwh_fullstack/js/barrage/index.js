let data = [
    {
        value: '前方弹幕来袭',
        time: 5,
        color: 'red',
        speed: 1,
        fontSize: 22
    },
    {
        value: '罗文浩',
        time: 10,
        color: '#00a1f5',
        speed: 2,
        fontSize: 30
    },
    {
        value: '文浩罗',
        time: 14,
        color: '#00a1f5'
    },
    {
        value: 'lwh',
        time: 20
    }
]

let canvas = document.getElementById('canvas');
let video = document.getElementById('video');
let $text = document.getElementById('text');
let $btn = document.getElementById('btn');
let $color = document.getElementById('color');
let $range = document.getElementById('range');


// 让每一条弹幕里的属性都能生效
class Barrage {
    constructor(obj,ctx) {
        this.value = obj.value;
        this.time = obj.time;
        this.obj = obj;
        this.context = ctx;
        
    }

    // 初始化弹幕

    init() {
        this.color = this.obj.color || this.context.color;
        this.speed = this.obj.speed || this.context.speed;
        this.opacity = this.obj.opacity || this.context.opacity;
        this.fontSize = this.obj.fontSize || this.context.fontSize;

        let p = document.createElement('p');
        p.style.fontSize = this.fontSize + 'px';
        p.innerHTML = this.value;
        document.body.appendChild(p);
        this.width = p.clientWidth;

        document.body.removeChild(p);

        this.x = this.context.canvas.width;
        this.y = this.context.canvas.height * Math.random();

        // 超出范围

        if(this.y < this.fontSize) {
            this.y = this.fontSize;
        }else if(this.y > this.context.canvas.height - this.fontSize) {
            this.y = this.context.canvas.height - this.fontSize;
        }
    }

    renderOnce() {
        this.context.ctx.font = `${this.fontSize}px Arial`;
        this.context.ctx.fillStyle = this.color;
        // 绘制文字
        this.context.ctx.fillText(this.value,this.x,this.y);
    }
}

class CanvasBarrage {
    constructor(canvas,video,opts = {}) {
        if(!canvas || !video)
            return;

        // 将传来的参数挂载到this上
        this.video = video,
        this.canvas = canvas;

        // 设置canvas宽高和video一致
        this.canvas.width = video.width
        this.canvas.height = video.height

        // 获取画布，操作画布
        this.ctx = this.canvas.getContext('2d');

        // 设置默认参数, 如果用户没传，我们就给她戴上

        let defOpts = {
            color: '#e91653',
            speed: 1.5,
            opacity: 0.5,
            fontSize: 20,
            data: []
        }

        Object.assign(this,defOpts,opts);

        // 添加属性，用来判断播放暂停，默认true是暂停

        this.isPaused = true;

        // 得到所有的弹幕消息

        this.barrages = this.data.map((item) => new Barrage(item,this));

        // 渲染弹幕
        this.render();
    }

    // 渲染canvas绘制的弹幕
    render() {
        // console.log('render');
        // 清除原来的画布
        this.clear();
        // 渲染
        this.renderBarrage();

        if(this.isPaused === false) {
            requestAnimationFrame(this.render.bind(this));
        }
    }

    clear() {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    }

    renderBarrage() {
        // 拿到当前视频播放的时间
        let time = this.video.currentTime;
        this.barrages.forEach(barrage => {
            // console.log(barrage.time);
            if(time >= barrage.time && !barrage.flag) {
                // console.log(time);
                // 如果弹幕没有初始化完成，就先初始化
                if(!barrage.isInit){
                    barrage.init();
                    barrage.isInit = true;
                }

                // 弹幕从右往左
                barrage.x -= barrage.speed;
                barrage.renderOnce(); //渲染每一条弹幕

                if(barrage.x < -barrage.width){
                    barrage.flag = true;
                }
            }
        });
    }

    add(obj) {
        this.barrages.push(new Barrage(obj,this));
    }

}

let canvasBarrage = new CanvasBarrage(canvas,video,{data});

video.addEventListener('play', () => {
    canvasBarrage.isPaused = false;
    canvasBarrage.render();
})

// 发弹幕
$btn.addEventListener('click',send);

function send() {
    let value = $text.value
    let time = video.currentTime
    let color = $color.value
    let fontSize = $range.value
    let obj = {value,time,color,fontSize};
    canvasBarrage.add(obj);
    $text.value = ''
}