// var playerAction = process.argv[process.argv.length - 1];



// const res = game(playerAction)

// console.log(res);

let count = 0;

process.stdin.on('data', e => {
    const playerAction = e.toString().trim()
    const game = require('./lib.js');
    const res = game(playerAction)
    console.log(res);

    if(res == 1)
        count ++;
    else
        count = 0;
    if(count === 3){
        console.log('呜呜呜，我不玩了');
        process.exit()
    }
})

