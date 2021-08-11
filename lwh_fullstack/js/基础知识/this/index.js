function foo() {
    console.log(this);
}

var bar = {
    foo: foo
}

var bar2 = {
    test: bar.foo
}

bar2.test();