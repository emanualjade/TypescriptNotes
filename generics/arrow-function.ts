// ======================================
// ==== EXAMPLE ARROW FUNCTION
// ======================================
const echoArrowFunction = <T>(x: T): T => x
console.log(echoArrowFunction(23))
console.log(echoArrowFunction<number>(23))
console.log(echoArrowFunction("hello"))
console.log(echoArrowFunction({name: "max"}))
