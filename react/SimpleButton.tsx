import React from "react";

interface ISimpleButtonProps {
  color?: "red" | "green";
}
const Button = (
  {color, ...rest}: ISimpleButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return <button style={{color}} {...rest} />;
};

export default Button;

// Used like
// <SimpleButton color="green" type="button" />