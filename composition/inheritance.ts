// === EXTENDS / IMPLEMENTS
  // class JiggyClass extends BaseClass {}
  // class JiggyClass implements IActionInterface {}
  // class JiggyClass implements ISomeInterface, SomeType {}
  // interface IDogInterface extends IAnimalInterface {}
  // interface ICatInterface extends IFelineInterface, PetType
  // interface ISomeInterface extends SomeType
  // type Cat = ISomeInterface & SomeType
  // type PetType = IDog | ICat
  // BAD - interface cannot be a union type
  // BAD - class cannot implement a union type
  // Two interfaces with the same name will have all types merged together
  // BAD - You cannot have duplicate "type" names

// extends
  // class extends class: YES
  // class extends interface: NO
  // class extends type: NO

  // interface extends interface: YES
  // interface extends type: YES
  // interface extends class: YES

  // type extends type: NO
  // type extends interface: NO
  // type extends class: NO

// implements
  // class implements interface: YES
  // class implements class: YES
  // class implements type: YES

  // interface implements interface: NO 
  // interface implements type: NO 
  // interface implements class: NO 

  // type implements type: NO
  // type implements interface: NO
  // type implements class: NO

// &
  // type = type & type: YES
  // type = type & interface: YES
  // type = interface & interface: YES
  // interface & type {}: NO
  // interface & interface: NO
  
// |
  // 
