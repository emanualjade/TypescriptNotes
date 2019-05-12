function startTuple<T>(a: T){
  return function finishTuple<U>(b: U) {
    return [a, b] as [T, U]
  }
}
const myTuple = startTuple(['first'])(42)
