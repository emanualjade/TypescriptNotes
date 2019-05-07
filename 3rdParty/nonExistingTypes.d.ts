// If a library does not have types
// and does not have a definately typed file like @types/react
// You can create your own declartion file like this one
// This example assumes react has no types available just for illustration

// Create the react.d.ts file in your /src directory
// Add the methods as appropriate
declare module 'reactOrSomeOtherLib' {
  export function someFn(): number;
}
