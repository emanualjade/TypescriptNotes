// https://www.youtube.com/watch?v=oM3K33LWoNk

// PICK
// Pick allows you to select one or more properties from an object
interface IPerson {
  firstName: string
  lastName: string
  age: number
}

type FirstNameLastName =  Pick<IPerson, 'firstName' | 'lastName'>

// EXCLUDE
type AtoC = 'a' | 'b' | 'c'
type AtoB = Exclude<AtoC, 'c'>

// OMIT CAN BE DEFINED using Exclude and Pick
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type AgeFirstNameType = Omit<IPerson, 'lastName'>

// TYPE EXTRACT
type OnlyNumbers = Extract<"a" | "b" | 1 | 2, number>
type OnlyStrings = Extract<"a" | "b" | 1 | 2, string>


type blah = 'a' | 'b' | 'c' | 1 | 3
type xxx = Exclude<blah, string>