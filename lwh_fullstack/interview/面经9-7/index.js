class C {
  a() {
    console.log(this);
  }
  b = () => {
    console.log(this);
  };
}
c = new C();
c.a();
f = c.a;
f();
c.b();