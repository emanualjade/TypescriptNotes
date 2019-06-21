import React, { ElementType } from 'react'
import { Link, LinkProps } from "react-router-dom";

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

interface IButtonProps {
  as?: ElementType<any> | 'a'
}

export const Button: React.FC<IButtonProps> = (props) => {
  const {as: Component = 'button', children, ...rest} = props
  return (
    <Component className="button" {...rest}>{children}</Component>
  )
}

export const AnchorButton: React.FunctionComponent<AnchorProps> = (props) => (
  <Button as="a" {...props} />
)

export const LinkButton: React.FunctionComponent<LinkProps> = (props) => (
  <Button as={Link} {...props} />
)

{/* <>
  <hr />
  <Button>Hello</Button>
  <LinkButton to="/details">Link from composition patterm</LinkButton>
  <AnchorButton href="/login">Login</AnchorButton>
</> */}