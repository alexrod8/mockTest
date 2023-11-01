let foo = 24;

function baz(foo) {
  quax = 3;
  let qux = { foo: foo + quax };
  return qux;
}

foo = baz(foo, 25);