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
  name: string;
  age: number;
}
type ReadOnlyPeta = {
  readonly [K in keyof IPeta]-?: IPeta[K] | string
}
