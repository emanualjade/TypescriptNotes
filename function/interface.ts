// ======================================
// ==== INTERFACE FOR FUNCTION EXAMPLES
// ======================================
interface DoubleValueFunc {
  (number1: number, number2: number): number
}

// function expression
let myDoubleFunc: DoubleValueFunc
myDoubleFunc = function(value1: number, value2: number): number {
  return (value1 + value2) * 2
}

// arrow function
let myDoubleFuncArrow: DoubleValueFunc
myDoubleFuncArrow = (value1: number, value2: number): number => {
  return (value1 + value2) * 2
}
