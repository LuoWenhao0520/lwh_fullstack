var _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

let Math = (_class = class Math {
  add(a, b) {
    return a + b;
  }

}, (_applyDecoratedDescriptor(_class.prototype, "add", [log], Object.getOwnPropertyDescriptor(_class.prototype, "add"), _class.prototype)), _class);

function log(target, name, descriptor) {
  let oldValue = descriptor.value;

  descriptor.value = function (...args) {
    console.log(`Calling ${name} with`, args);
    return oldValue.apply(this, args);
  };

  return descriptor;
}

let math = new Math();
let res = math.add(1, 2);
console.log(res);
