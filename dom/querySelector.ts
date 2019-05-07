// ======================================
// ==== DOM EXAMPLES
// ======================================

// QuerySelector
// because of the `.hello` we can't infer it's an input
// so we pass the type into the generic as <HTMLInputElement>
// Then we can access the '.value'
const email = document.querySelector<HTMLInputElement>('input.hello')
if(email) {
  console.log(email.value)
}

// DOM EVENT
// e.currentTarget is an EventTarget type
// which does not have a '.value' available on it
// so we specify that it's an HTMLInputElement
const someEmail = document.getElementById('someEmail')
if(someEmail) {
  someEmail.addEventListener('change', (e) => {
    const input = e.currentTarget as HTMLInputElement
    console.log(input.value)
  })
}