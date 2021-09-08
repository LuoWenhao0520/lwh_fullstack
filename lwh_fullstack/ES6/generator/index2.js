let fetch = require('node-fetch')

function* gen() {
  let r1 = yield fetch('https://api.github.com/users/github')
  let r2 = yield fetch('https://api.github.com/users/github/followers')
  let r3 = yield fetch('https://api.github.com/users/github/repos')

  console.log([r1.bio,r2[0],r3[0].full_name].join('\n'))
}

let g = gen()

let result1 = g.next()

result1.value.then(data => {
  // console.log(data);
  return data.json()
}).then(data => {
  g.next(data).value
})