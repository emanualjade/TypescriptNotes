import React from "react";

type TagNames = "div" | "span" | "a";

interface IIconProps {
  color?: "red" | "blue";
  as?: TagNames;
}

interface IIconAsAnchorProps extends IIconProps {
  as: "a";
}
interface IIconAsDivProps extends IIconProps {
  as?: "div" | "span";
}

type anchorAttributes = React.AnchorHTMLAttributes<HTMLAnchorElement>;
function Icon(props: IIconAsDivProps): JSX.Element;
function Icon(props: anchorAttributes & IIconAsAnchorProps): JSX.Element;

function Icon({ as: Element = "div", color = "red", ...rest }: IIconProps) {
  return <Element style={{ color }} {...rest} />;
}

// <Icon color="blue" /> -> good
// <Icon as="a" color="blue" /> -> good
// <Icon as="a" href="" color="blue" /> -> good
// <Icon href="" color="blue" /> -> bad

export default Icon

