// Imagine you need the return type of some function
// But it is in another library and the author did not export the type
// No problem... you can grab it on your own.
// inside some library - return type { baz: number } is inferred but not exported
function foo(bar: string) {
  console.log(bar)
  return { baz: 1 };
}

//  inside your app, if you need { baz: number }
type FooReturn = ReturnType<typeof foo>; // { baz: number }