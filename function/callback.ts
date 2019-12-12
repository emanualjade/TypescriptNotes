// v1
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}
addAndHandle(1, 2, (result) => {
  console.log(result + 999)
})

// v2
interface IAddAndHandleAlt {
  (n1: number, n2: number, cb: (num: number) => void) : void
}
const addAndHandleAlt: IAddAndHandleAlt = (n1, n2, cb) => {
  const result = n1 + n2
  cb(result)
}
addAndHandleAlt(1, 2, (result) => {
  console.log(result + 999)
})

// v3
const addAndHandleAltB: IAddAndHandleAlt = function(n1, n2, cb) {
  const result = n1 + n2
  cb(result)
}
addAndHandleAltB(1, 2, (result) => {
  console.log(result + 999)
})