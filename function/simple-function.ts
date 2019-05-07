// ======================================
// ==== SIMPLE FUNCTION EXAMPLE
// ======================================

// Simple arrow function
const add = (a: number, b: number): number => a + b

// Simple named function
function addAlt(a: number, b: number): number {
  return a + b
}

// Using reduce example
function sumEverything(arg1: string, arg2: boolean, ...numbers: number[]): number {
  console.log(arg1)
  console.log(arg2)
  return numbers.reduce((result, num) => result + num, 0)
}
