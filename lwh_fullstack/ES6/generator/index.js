let fetch = require('node-fetch')

function* gen() {
  let url = 'https://api.github.com/users/github'
  let res = yield fetch(url)
  console.log(res.bio);
}

let g = gen()

let result = g.next()
console.log(result);

result.value.then(function(data) {
  return data.json()
}).then(function(data) {
  console.log(data);
  g.next(data)
})