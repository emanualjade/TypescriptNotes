// NonNullable<T> 
// Constructs a type by excluding null and undefined from T.

type TX = NonNullable<string | number | undefined>;  // string | number
type TY = NonNullable<string[] | null | undefined>;  // string[]

