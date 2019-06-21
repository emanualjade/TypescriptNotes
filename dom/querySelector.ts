// ======================================
// ==== DOM EXAMPLES
// ======================================

// The answer lies in the lib.dom.d.ts file which is a part of 
// TypeScript library and, basically, describes everything 
// (objects, functions, events) that occur in a browser. 

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

// WHEN YOU KNOW THE VALUE EXISTS
// sometimes you just know from the external means 
// that the value will be set. In such exceptional 
// cases you can use “post-fix expression operator”:
const textEl = document.querySelector('input');
console.log(textEl!.value); 
// 👍 with "!" we assure TypeScript
// that 'textEl' is not null/undefined