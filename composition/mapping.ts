// MAP TO MAKE ALL PROPERTIES READONLY and OPTIONAL and with UNION
interface IPet {
  name: string;
  age: number;
}
type ReadOnlyPet = {
  readonly [K in keyof IPet]?: IPet[K] | string
}

// MAP TO REMOVE optional types using -?
interface IPeta {
  name?: string;
  age: number;
}
type ReadOnlyPeta = {
  readonly [K in keyof IPeta]-?: IPeta[K] | string
}

// Map and ignore certain properties
interface IFoo {
  name: string
  age: number
  cash: number
}
interface IBar {
  id: number
  color: string
  description: string
}
// example A
type CombinedFooBar = {
  [key in keyof (IBar & IFoo)]: string
}
// example B
type IgnoredProperties = 'id' | 'age'
type CombinedItems = IFoo & IBar
type CombinedAndIgnoredFooBar = {
  [key in Exclude<keyof CombinedItems, IgnoredProperties>]: CombinedItems[key] | null
}
// example c
type XXX = Omit<CombinedItems, IgnoredProperties>

// MAP AND MAKE VALUES NON NULLABLE
type PersonWithNullandUndefined = {
  name: string | null
  age: number | undefined
}

type ForSurePerson = {
  [key in keyof PersonWithNullandUndefined]: NonNullable<PersonWithNullandUndefined[key]>
}

const person: ForSurePerson = {name: 'johnny', age: 23}

// Mapped Types with Conditional Types

type NonNullablePropertyKeys<T> = {
  [P in keyof T]: null extends T[P] ? never : P
}[keyof T];

type NonNullableProperties<T> = Pick<T, NonNullablePropertyKeys<T>>;

type User = {
  name: string;
  age: number
  email: string | null;
};


type NonNullableUserPropertyKeys = NonNullablePropertyKeys<User>;

type NonNullableUserProperties = NonNullableProperties<User>;

export {}
