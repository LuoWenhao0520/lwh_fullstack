class OS {
  controllerHardWare() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写')
    // throw new Error('抽象工厂方法不允许直接调用')
  }
}

class AndroidOS extends OS {
  controllerHardWare() {
    console.log('安卓');
  }
}

class AppleOS extends OS {
  controllerHardWare() {
    console.log('苹果');
  }
}

// ------------

class HardWare{
  operateByOrder() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写')
  }
}

class QualcommHardWare {
  operateByOrder() {
    console.log('我会以高通方式去运转');
  }
}

class AppleHardWare{
  operateByOrder() {
    console.log('我会以苹果的方式去运转');
  }
}

class MobilePhoneFactory {
  // 提供操作系统
  createOS() {
    // throw new Error('抽象工厂方法不允许直接调用，你需要将我重写')
    return new AndroidOS()
  }
  // 提供硬件
  createHardWare() {
    // throw new Error('抽象工厂方法不允许直接调用，你需要将我重写')
    return new QualcommHardWare()
  }
}

class FakeStar extends MobilePhoneFactory {
  // 提供操作系统
  createOS() {
    // throw new Error('抽象工厂方法不允许直接调用，你需要将我重写')
    return new AndroidOS()
  }
  // 提供硬件
  createHardWare() {
    // throw new Error('抽象工厂方法不允许直接调用，你需要将我重写')
    return new QualcommHardWare()
  }
}

const myPhone = new FakeStar()

const myOS = myPhone.createOS()
const myHardWare = myPhone.createHardWare()

myOS.controllerHardWare()
myHardWare.operateByOrder()

class newFakeStar extends MobilePhoneFactory {
  createHardWare(){

  }

  createOS(){
    
  }
}