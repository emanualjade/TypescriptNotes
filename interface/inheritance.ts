// ======= INTERFACE INHERITANCE
// Interfaces describe values that extend from the 
// javascript Object type
  // A) Objects
  // B) Arrays
  // C) Functions

// A) DESCRIBE AN OBJECT
interface IDescribingObject {
  name: string
  age: number
}

const thePerson: IDescribingObject = {
  name: 'Johnny Rocket',
  age: 27
}

// B) DESCRIBE AN ARRAY with an interface
// while this works it ends up missing all the 
// array values. Try uncommenting the animalList.map
// to see that .map does not show up on the autocomplete 
// and is showing an error
interface IAnimalList {
  [index: number]: string
}
const animalList: IAnimalList = ['Dog', 'Cat', 'Rabbit']
// animalList.map((x) => {console.log(x)})

// C) DESCRIBE AN OBJECT WITH NESTED FUNCTION
// + interface extends interface
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
