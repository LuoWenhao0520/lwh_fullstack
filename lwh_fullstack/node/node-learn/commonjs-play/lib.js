// console.log(process.argv);

module.exports = function(player) {
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
        return 0;
    }else if(computerAction === 'rock' && player === 'paper' || 
                computerAction === 'paper' && player === 'scissor' ||
                computerAction === 'scissor' && player === 'rock'){
            console.log('你赢了',computerAction,player);
        return 1;
    }
    else{
        console.log('你输了');
        return -1;
    }
}

