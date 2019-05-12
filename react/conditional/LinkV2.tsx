import React, { ElementType } from "react";
import { Link, LinkProps } from "react-router-dom";

type TypeOfXLink = ElementType<any>
type TagNames = TypeOfXLink | "a";

interface IXBaseLinkProps {
  children?: React.ReactNode
  color?: "red" | "blue";
  as?: TagNames;
}

interface ILinkAsAnchorProps extends IXBaseLinkProps {
  as?: "a";
}
interface ILinkRouterProps extends IXBaseLinkProps {
  as: typeof Link;
}

type anchorAttributes = React.AnchorHTMLAttributes<HTMLAnchorElement>;

function StyledLink(props: LinkProps & ILinkRouterProps): JSX.Element;
function StyledLink(props: anchorAttributes & ILinkAsAnchorProps): JSX.Element;

function StyledLink({
  as: Element = "a",
  children,
  ...rest
}: IXBaseLinkProps) {
  
  return <Element {...rest}>{children}</Element>;
};

export default StyledLink

// Use like
  // <StyledLink href="/" color="red">Standard Link With Anchor Tag</StyledLink>
  // <StyledLink as={Link} to="/" color="red">Router Link</StyledLink>
