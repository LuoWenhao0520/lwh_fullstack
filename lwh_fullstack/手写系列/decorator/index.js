class MyClass {
  @a
  method() {

  }
}


function annotation(target) {
    target.annotated = true
}

function a(target,name,desc) {
  desc.writeable = true
  return desc
}