// Extract<T,U> 
// Constructs a type by extracting from T all properties that are assignable to U.

type TA = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
type TB = Extract<string | number | (() => void), Function>;  // () => void
