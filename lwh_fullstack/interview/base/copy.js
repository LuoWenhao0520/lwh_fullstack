let a = {
    age: 1,
    info: {
        name:'lwh'
    }
}

let b = Object.assign({},a)

a.info.name = '123'


let c = {
    age: 1,
    sex: undefined,
    info: {
        name: 'lwh'
    }
}

let d = {...c}
let e = JSON.parse(JSON.stringify(c))
c.age = 2;

c.info.name = '123'

// console.log(e.info.name);
// console.log(e);

let obj = {
    a: 1,
    b: {
        c:2,
        d:3
    }
}

obj.c = obj.b

obj.e = obj.a
obj.b.c = obj.c
obj.b.d = obj.b
obj