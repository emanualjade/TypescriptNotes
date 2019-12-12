// Simple example
function helloX(x: string): void;
function helloX(x: number): void;
function helloX(x: number|string) {
    console.log(x)
}
helloX("abc")
helloX(123)


// ===============
// ARROW FUNCTION OVERLOADS
type IOverloadX = {
  (x: string): string;
  (x: number): number;
};
const overloadX: IOverloadX = (x: any) => {
  return x
};

let valx = overloadX(4);
let valx2 = overloadX("asdf");


// Overloads
function calcArea(width: number, height: number): number;
function calcArea(length: number): number;
function calcArea(...args: number[]): number {
  // this part handles the first case
  // function calcArea(width: number, height: number): number;
  if (args.length === 2) {
    return args[0] * args[1];
  }
  return Math.pow(args[0], 2);
}

// ===============
// ARROW FUNCTION OVERLOADS
type IOverload = {
  (param: number): number[];
  (param: object): object[];
};
const overloadedArrowFunc: IOverload = (param: any) => {
  return [param, param];
};

let val = overloadedArrowFunc(4);
let val2 = overloadedArrowFunc({ foo: "bar" });

// ======================
// Object literal overloads
let numberStringSwap: {
  (value: number, radix?: number): string;
  (value: string): number;
} = (value: any, radix: number = 10): any => {
  if (typeof value === "string") {
    return parseInt(value, radix);
  } else if (typeof value === "number") {
    return String(value);
  }
};
numberStringSwap("2")
numberStringSwap(3, 2)

// DO'S AND DON'TS =============
//// DONT 
// Don’t put more general overloads before more specific overloads:
// Why: TypeScript chooses the first matching overload when resolving function calls. 
// When an earlier overload is “more general” than a later one, the later one is 
// effectively hidden and cannot be called.

/* WRONG */
declare function fn(x: any): any;
declare function fn(x: HTMLElement): number;
declare function fn(x: HTMLDivElement): string;

var myElem: HTMLDivElement;
var x = fn(myElem); // x: any, wat?

/* OK */
declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: any): any;

var myElem: HTMLDivElement;
var x = fn(myElem); // x: string, :)
