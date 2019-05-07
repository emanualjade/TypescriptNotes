// https://www.youtube.com/watch?v=oM3K33LWoNk

// PICK
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
type FirstNameLastNameType = Omit<IPerson, 'lastName'>
