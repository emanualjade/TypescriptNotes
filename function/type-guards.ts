// Restorative type guards
class DoDad {}
if(typeof "sdf" === "string"){}
if(typeof 23 === "number"){}
if(typeof true === "boolean"){}
if(typeof Symbol('some symbol') === 'symbol') {}
if([] instanceof Array) {}
if({} instanceof Object) {}
if(new Date() instanceof Date) {}
if(new DoDad() instanceof DoDad) {}

// ====== CUSTOM TYPE GUARD
class Foo {
  foo: number = 0;
  commonProp: string = "";
}
class Bar {
  bar: number = 0;
  commonProp: string = "";
}

function fooBarFunction(obj: Foo | Bar) {
  if (obj instanceof Foo) {
    obj.foo
  } else {
    obj.bar
  }
}

// ====== CUSTOM TYPE GUARD v1
interface Admin {
  id: string;
  role: string;
}
interface User {
  email: string;
}
function redirectA(usr: Admin | User) {
  if (isAdmin(usr)) {
    console.log(usr.role)
  } else {
    console.log(usr.email)
  }
}

function isAdmin(usr: Admin | User): usr is Admin {
  return(usr as Admin).role !== undefined
  // return(<Admin>Admin).role !== undefined
}

// ====== TYPE GUARD v2
interface Admin {
  id: string;
  role: string;
}
interface User {
  email: string;
}
function redirectB(usr: Admin | User) {
  if ("role" in usr) {
    console.log(usr.role)
  } else {
    console.log(usr.email)
  }
}

// ======== TYPE GUARD v3
let myUnknown: unknown = "hello, unknown"
interface HasEmail {
  name: string
  email: string
}
function isHasEmail(x: any): x is HasEmail {
  return typeof x.name === 'string' && typeof x.email === 'string'
}
if(isHasEmail(myUnknown)) {
  console.log(myUnknown.name, myUnknown.email)  
}


// ======== TYPE GUARD v4
function isDefined<T>(arg: T | undefined): arg is T {
  return typeof arg  !== "undefined"
}
const list = ['a', 'b', 'c', undefined, 'e']
const filtered = list.filter(isDefined)

