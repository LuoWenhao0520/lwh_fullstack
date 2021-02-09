

var speed = document.querySelector('.speed');
var bar = document.querySelector('.speed-bar');
var video = document.querySelector('.flex');

console.log(video);
speed.addEventListener('mousemove',function(e){
    // console.log(123);
    console.log(speed.offsetHeight);
    var y = e.pageY - speed.offsetTop;
    var percent = y / speed.offsetHeight;
    var min = 0.4
    var max = 4
    var height = Math.round(percent * 100) + '%';

    var playbackRate = percent * (max - min) + min;
    bar.style.height = height
    video.playbackRate = playbackRate
    bar.textContent = playbackRate.toFixed(2) + 'x'
})