function add() {
    var count = 0;
    function b () {
        count++;
        console.log(count);
    }
    return b;
}


var b = add();

b();
b();
b();
