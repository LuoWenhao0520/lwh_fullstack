function gennerateCapitalStringWithHashTag(str){
    // 分割
    return str.length > 140 || str == '' ? false : 
    '#' + str.split(' ').map(capitalize).join(' ')
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const s =  gennerateCapitalStringWithHashTag('hello world')

console.log(s);