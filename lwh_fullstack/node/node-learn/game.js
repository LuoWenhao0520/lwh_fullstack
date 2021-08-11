// console.log(process.argv);

var player = process.argv[process.argv.length - 1];
var computer = Math.random() * 3;
if(computer < 1){
    var computerAction = 'rock';
}else if(computer < 2){
    var computerAction = 'scissor';
}else{
    var computerAction = 'paper';
}

if(computerAction === player) {
    console.log('平局');
}else if(computerAction === 'rock' && player === 'paper' || 
            computerAction === 'paper' && player === 'scissor' ||
            computerAction === 'scissor' && player === 'rock')
        console.log('你赢了',computerAction,player);
else
    console.log('你输了');