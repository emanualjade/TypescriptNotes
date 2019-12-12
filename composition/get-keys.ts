// GET KEYS FROM INTERFACE
interface animalType {
  legs: number
  food: string
}
interface godType {
  power: string
}
type godDog = animalType & godType

type animalKeys = keyof animalType
type godKeys = keyof godType
type godDogKeys = keyof godDog

// KEY KEYS FROM OBJECT
class PersonList {
  persons = {
    john: { surname: 'Doe' },
    bob: { surname: 'The Builder' }
  }
  
  getPerson(name: keyof PersonList['persons']) {
    return this.persons[name];
  }
}

// Get keys with Mapped Types and Conditional Types

type NonNullablePropertyKeys<T> = {
  [P in keyof T]: null extends T[P] ? never : P
}[keyof T];

type User = {
  name: string;
  age: number
  email: string | null;
};

// non nullable keys
type NonNullableUserPropertyKeys = NonNullablePropertyKeys<User>;

export {}