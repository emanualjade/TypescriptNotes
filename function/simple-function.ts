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

// ======================================
// ==== INTERFACE EXAMPLE
// ======================================
interface IContactMessengerA {
  (contact: string, email: string): boolean
}
const ContactMessengerA: IContactMessengerA = function(contact: string, email: string): boolean {
  console.log(contact, email)
  return true
}

// ======================================
// ==== TYPE EXAMPLE
// ======================================
type IContactMessengerB = (contact: string, email: string) => boolean
const ContactMessengerB: IContactMessengerB = function(contact: string, email: string): boolean {
  console.log(contact, email)
  return true
}


type CustomFunctionType = (value: string) => string
const aSimpleFunction = (value: string) => value
let myFunction: CustomFunctionType
myFunction = aSimpleFunction