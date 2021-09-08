// const lwh = {
//   name: 'lwh',
//   age: 20,
//   carrer: 'coder'
// }

// const wen = {
//   name: 'wen',
//   age: 21,
//   carrer: 'coder'
// }

function User(name,age,carrer,work) {
  this.name = name
  this.age = age
  this.carrer = carrer
  this.work = work
}

// const user = new User(name,age,carrer)

function Coder(name,age) {
  this.name = name
  this.age = age
  this.carrer = 'coder'
  this.work = ['写代码','写系分','修bug']
}

function ProductManager(name,age) {
  this.name = name
  this.age = age
  this.carrer = 'product-manager'
  this.work = ['订会议室','写PRD','催更']
}

function Factory(name, age, career) {
  let work;
  switch(career) {
    case 'coder':
      work = ['coding']
      break
    case 'product-manager':
      work = ['订会议室','写PRD','催更']
      break
    case 'boss':
      work = ['drink']
      break
  }

  return new User(name,age,career,work)
}

