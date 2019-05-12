////// CONDITIONAL TYPES WITH TERNARY
interface StringContainer {
  value: string;
  format(): string;
  split(): string[];
}
interface NumberContainer {
  value: number;
  nearestPrime: number;
  round(): number;
}
type Item<T> = {
  id: T;
  container: T extends string ? StringContainer : NumberContainer;
};
let item: Item<string> = {
  id: "a123",
  container: { value: "", format: () => "asdf", split: () => ["asdf"] }
};

// ANOTHER CONDIITIONAL TYPE
type ArrayFilter<T> = T extends any[] ? T : never;
type StringsOrNumbers = ArrayFilter<string | number | string[] | number[]>;
/*
  1. distribute - > never | never | string[] | number[]
  2. "never" is ignored -> string[] | number[]
*/

/// CONDITIONAL FUNCTION TYPE
interface Book {
  id: string;
  tableOfContents: string[];
}

interface Tv {
  id: number;
  diagonal: number;
}
interface IItemService {
  getItem<T extends string | number>(id: T): T extends string ? Book : Tv
}
// const book = itemServices.getItem(20)
// const book = itemServices.getItem("20")

