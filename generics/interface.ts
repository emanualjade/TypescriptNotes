// ======================================
// ==== Generic with intervace example
// ======================================
interface GenericInterface<T> {
  (a: T): T;
  someProp: T
}

// ======================================
// ==== Generic with intervace example
// where a method inside has it's own generics as well
// ======================================
interface AnotherGenericInterface<T> {
  // call signature has it's own generics with U
  <U>(a: U): U;
  someProp: T
}

// ======================================
// ==== Generic with intervafe practical example
// ======================================
interface ShoppingCart<ItemId, Item> {
  items: Array<Item>,
  // this:this: ShoppingCart<ItemId, Item> things were working without it
  // just added because the tutorial did. typescript seems like it may have
  // been upgraded to infer what `this` is
  addItem(this: ShoppingCart<ItemId, Item>,item: Item): void;
  getItemById(this: ShoppingCart<ItemId, Item>, id: ItemId): Item | undefined;
}

interface Product {
  id: number;
  price: number;
}

const cart: ShoppingCart<number, Product> = {
  items: [],
  addItem(item) {
    this.items.push(item)
  },
  getItemById(id) {
    return this.items.find(item => item.id === id)
  }
}
