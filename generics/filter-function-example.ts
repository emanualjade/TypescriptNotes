// T = any ----- this means if no type param is provided
// then fall back to being type any - it sets the default
// of the type paramater
interface FilterFunction<T = any> {
  (val: T): boolean
}

const stringFilter: FilterFunction<string> = (val) => {
  return typeof val === "string"
}
stringFilter('hello')

const greaterThanFiveFilter: FilterFunction<number> = (val) => {
  return val > 5
}
greaterThanFiveFilter(34)

