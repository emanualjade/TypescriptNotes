// CONSTRAINTS EXAMPLE A
// Constraings using this format <T extends { id: string }>
// To reveal the motivation behind it
// Try removing this `extends { id: string }`
// So you are only left with this `function arrayToDict<T>`
function arrayToDict<T extends { id: string }>(array: T[]): { [k: string]: T } {
  const out: { [k: string]: T } = {};
  array.forEach(val => {
    out[val.id] = val;
  });
  return out;
}

// CONTRAINTS EXAMPLE B

class Car {
  print() {
    console.log('I am a car')
  }
}
class House {
  print() {
    console.log('I am a house')
  }
}
interface Printable {
  print(): void;
}
function printThings<T extends Printable>(arr: T[]): void {
  for(let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}
printThings([new Car(), new House()])
printThings([1, 2, 3]) // whatever we try to print must have printable method
