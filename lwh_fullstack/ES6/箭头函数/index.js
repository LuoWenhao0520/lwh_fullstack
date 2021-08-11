// let foo = {
//     value: 1,
//     getValue: () => console.log(this.value)
// }


// foo.getValue()

// var value = 1;

function Foo() {
    this.value = 1
}

Foo.prototype.getValue = () => {
    console.log(this);
}

let foo = new Foo()

foo.getValue();