var name = 'world'

;(function() {
  if(typeof name === 'undefined'){
    var name = 'Jack'
    console.log('Goodbye ' + name);
  }else {
    console.log('Hello '+name);
  }
})()

// Goodbye Jack