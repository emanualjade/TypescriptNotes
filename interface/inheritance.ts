// ======= INTERFACE INHERITANCE

// interface extends interface
interface Animal {
  name: string
}
interface Dog extends Animal {
  bark(): void
}
const sparky: Dog = {
  name: "sparky",
  bark(){
    console.log('woof')
  }
}
console.log(sparky)
