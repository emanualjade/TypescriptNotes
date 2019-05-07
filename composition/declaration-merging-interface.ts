// 1.)
// Assume this Cart interface lives in a file somewhere else
// and you cannot get to it and modify it directy
interface Cart {
  calculateTotal(): number;
}

// 2.)
// In a separate file - Extend the Cart by adding more properties to it
interface Cart {
  x: number;
}

// 3.) Can even do it multiple times
// this time lets overload a method
interface Cart {
  calculateTotal(options: {discountCode: number}): number;
}

let myCart: Cart = {
  x: 1,
  calculateTotal(options?: {discountCode: number}) {
    if(options && options.discountCode) {
      // apply discount
    }
    return 1;
  }
}