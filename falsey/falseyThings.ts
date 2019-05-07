// TODO
  // - never, void, null, undefined, unknown, never

// ====== TYPE OF UNKNOWN
const responseFromSomeServer: unknown = ():unknown => { return }
// need a type guard because of the unknown type
if(typeof responseFromSomeServer === "string") {
  console.log(responseFromSomeServer.length)
}
const otherResponseFromSomeServer: any = ():any => { return }
// do not need the typeguard because of the type any
console.log(otherResponseFromSomeServer.length)