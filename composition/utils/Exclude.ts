// Exclude<T,U>
// Constructs a type by excluding from T all properties that are assignable to U
type T0x = Exclude<"a" | "b" | "c", "a">;  // "b" | "c"
type T1x = Exclude<"a" | "b" | "c", "a" | "b">;  // "c"
type T2x = Exclude<string | number | (() => void), Function>;  // string | number
