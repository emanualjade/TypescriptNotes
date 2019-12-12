import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

type AnchorButton = {
  Element: "a";
};
type ButtonButton = {
  Element?: "button";
};

type AnchorButtonWithDom = AnchorButton &
  ButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonButtonWithDom = ButtonButton &
  ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

type FactoryProps<T> = T extends AnchorButton
  ? AnchorButtonWithDom
  : T extends ButtonButton
  ? ButtonButtonWithDom
  : ButtonButtonWithDom;

function isAnchor(
  props: AnchorButton | ButtonButton
): props is AnchorButtonWithDom {
  return (props as AnchorButtonWithDom).Element === "a";
}
function isButton(
  props: AnchorButton | ButtonButton
): props is ButtonButtonWithDom {
  return (
    (props as ButtonButtonWithDom).Element === "button" ||
    !(props as ButtonButtonWithDom).Element
  );
}

const Button = <T extends AnchorButton | ButtonButton>(
  props: FactoryProps<T>
) => {
  
  if (isAnchor(props)) {
    const { Element, children, ...rest } = props as AnchorButtonWithDom
    return (
      <Element {...rest} type="">
        {children}
      </Element>
    );
  } else if (isButton(props)) {
    const { Element = "button", children, ...rest } = props as ButtonButtonWithDom
    return (
      <Element {...rest} type="submit">
        {children}
      </Element>
    );
  } else {
    const { Element = "button", children, ...rest } = props as ButtonButtonWithDom
    return (
      <Element {...rest} type="submit">
        {children}
      </Element>
    )
  }
};


const App = () => {
  return (
    <div>
      <Button type="submit">Woot</Button>
    </div>
  );
};
