import React, { ElementType } from 'react'

interface ElementProps {
  element?: ElementType<any>
}

interface ButtonConfigProps {
  xxx?: string
  buttonRef?: React.Ref<HTMLAnchorElement> | React.Ref<HTMLButtonElement>
}

type ButtonComponent = ButtonConfigProps & ElementProps
interface AnchorComponent extends React.AnchorHTMLAttributes<HTMLAnchorElement>, ButtonConfigProps {
  children?: React.ReactNode
  href?: string
  as?: string
}

export const Button: React.FC<ButtonComponent> = (props) => {
  const {element: Component = 'button', xxx, buttonRef, children, ...rest} = props
  console.log('xxx', xxx)
  return (
    <Component ref={buttonRef} {...rest}>{children}</Component>
  )
}


const AnchorButton = React.forwardRef(({ children, ...rest}: AnchorComponent, ref: React.Ref<HTMLAnchorElement>) => (
  <Button buttonRef={ref} element="a" {...rest}>{children}</Button>
))


const DoItAnchor = () => <AnchorButton xxx="blue" as="" href="">Login</AnchorButton>
const DoItButton = () => <Button>Login</Button>




