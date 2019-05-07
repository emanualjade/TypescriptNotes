// Overloads
function calcArea(width: number, height: number): number;
function calcArea(length: number): number;
function calcArea(...args: number[]): number {
  // this part handles the first case
    // function calcArea(width: number, height: number): number;
  if(args.length === 2) {
    return args[0] * args[1]
  }
  return Math.pow(args[0], 2)
}
