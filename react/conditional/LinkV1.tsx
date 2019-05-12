import React from "react";
import { Link, LinkProps } from "react-router-dom";

type TypeOfLink = typeof Link
type TagNames = TypeOfLink | "a";

interface IBaseLinkProps {
  children?: React.ReactNode
  color?: "red" | "blue";
  as?: TagNames;
}

interface ILinkAsAnchorProps extends IBaseLinkProps {
  as?: "a";
}
interface ILinkRouterProps extends IBaseLinkProps {
  as: TypeOfLink;
  to: any
}

type anchorAttributes = React.AnchorHTMLAttributes<HTMLAnchorElement>;

function StyledLink(props: LinkProps & ILinkRouterProps): JSX.Element;
function StyledLink(props: anchorAttributes & ILinkAsAnchorProps): JSX.Element;

function StyledLink({
  as: Element = "a",
  children,
  ...rest
}: IBaseLinkProps) {
  
  if(Element === "a") {
    return <Element {...rest}>{children}</Element>;
  } else {
    return <Element to="" {...rest}>{children}</Element>
  }
};

export default StyledLink

// USED LIKE
// <StyledLink as={Link} to="/details-page">Detail</StyledLink>
// <StyledLink href="https://google">Detail</StyledLink>

