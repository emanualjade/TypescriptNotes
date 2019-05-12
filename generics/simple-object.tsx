import React from 'react'

interface WrappedValue<X> {
  value: X
}

// pass in primitives
let valA: WrappedValue<string[]> = { value: [] }
let valB: WrappedValue<string> = { value: "Hello" }
let valC: WrappedValue<number> = { value: 123 }

// pass in Type
type Rocket = 'blaster' | 'fusion'
let valD: WrappedValue<Rocket> = { value: 'blaster' }

// pass in Interface
interface IColor {
  color: string
  favorite: boolean
}
let valE: WrappedValue<IColor> = {
  value: {
    color: 'red',
    favorite: true
  }
}

// pass in anchor element
let valF: WrappedValue<HTMLAnchorElement> = {
  value: document.createElement('a')
}

// pass in anchor attributes
let valG: WrappedValue<React.AnchorHTMLAttributes<HTMLAnchorElement>> = {
  value: {
    href: '/blah',
    target: "_blank"
  }
}

// pass in button attributes
let valH: WrappedValue<React.ButtonHTMLAttributes<HTMLButtonElement>> = {
  value: {
    onClick: () => { console.log('clicked') },
    id: "someId"
  }
}
