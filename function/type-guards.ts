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
