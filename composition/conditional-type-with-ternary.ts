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
  id: T,
  container: T extends string ? StringContainer : NumberContainer;
}
let item: Item<string> = {
  id: "a123",
  container: {value: "", format: () => "asdf", split: () => ["asdf"]}
}