// JS是单线程语言

function a() {
    setTimeout(() => {
        console.log('lwh');
    },100)
}

function b() {
    console.log('wenhao');
}

function c() {
    console.log('genshin');
}

a()
b()
c()