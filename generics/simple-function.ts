// ======================================
// ==== EXAMPLE ECHO FUNCTION
// ======================================
// This is flexible but has no type data
function echo(data: any) {
  return data;
}
console.log(echo(23))
console.log(echo("hello"))
console.log(echo({name: "max"}))

// Better solution
function betterEcho<T>(data: T): T {
  return data;
}

console.log(betterEcho(23))
console.log(betterEcho<number>(23))
console.log(betterEcho("hello"))
console.log(betterEcho({name: "max"}))

// Generic types - saying const echo2 must be of that generic shape
// This happens to match the betterEcho shape so we're good
const echo2: <T>(data: T) => T = betterEcho

// ======================================
// ==== EXAMPLE printAll FUNCTION
// ======================================
const testResults: Array<number> = [99, 100, 97]

function printAll<T>(args: T[]) {
  args.forEach((element) => console.log(element))
}
printAll(["apple", "banana"])
printAll<string>(["apple", "banana"])