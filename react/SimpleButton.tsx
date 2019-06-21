import React, {ReactChild} from "react";

interface ISimpleButtonProps {
  color?: "red" | "green";
  children: ReactChild;
  onClick?: (ev: React.MouseEvent) => void
}
const Button = (
  {children, color, ...rest}: ISimpleButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return <button style={{color}} {...rest}>
    {children}
  </button>;
};

export const ButtonB: React.FC<{color: "string"}> = ({children, color}) =>{
  return <button style={{color}}>{children}</button>
}

export default Button;

// Used like
// <SimpleButton color="green" type="button" />