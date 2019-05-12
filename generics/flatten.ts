const myNumbers = [1, 2, 3]
const myMixedValArray = [1, 2, 3, "a"]

const someObject = {
  id: 21,
  name: "John"
}

const someBoolean = true;

type Flatten<T> = T extends any[] ? T[number] :
  T extends object ? T[keyof T] :
  T;

type NumbersArrayFlattened = Flatten<typeof myNumbers>
type MixedValuesArrayFlattened = Flatten<typeof myMixedValArray>
type SomeObjectFlattened = Flatten<typeof someObject>
type SomeBooleanFlattened = Flatten<typeof someBoolean>
