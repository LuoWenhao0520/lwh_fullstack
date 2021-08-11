function a() {
    function b() {
        var b = 234
        console.log(aaa);
    }

    var aaa = 123
    return b;
}

var glob = 100;
var demo = a();
demo();