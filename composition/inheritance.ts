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