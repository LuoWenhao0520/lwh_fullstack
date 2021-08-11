// class Foo{

//     constructor() {

//     }

//     static bar() {
//         this.baz();
//     }

//     baz() {
//         console.log('hello');
//     }

//     // static baz() {
//     //     console.log('hello world');
//     // }
// }

// var foo = new Foo()

// foo.baz();
// // console.log(foo);


class Shape{
    constructor(width,height) {
        this._width = width
        this._height = height
    }

    get area() {
        return this._height * this._width
    }
}

const square = new Shape(10,10)

console.log(square._width);

console.log(square.area);