import React from 'react'

type ButtonProps = JSX.IntrinsicElements['button'];
type AnchorProps = JSX.IntrinsicElements['a'];

// optionally use a custom type guard
function isPropsForAnchorElement(
  props: ButtonProps | AnchorProps
): props is AnchorProps {
  return 'href' in props;
}

function LinkOrButton(props: ButtonProps): JSX.Element;
function LinkOrButton(props: AnchorProps): JSX.Element;
function LinkOrButton(props: ButtonProps | AnchorProps) {
  if (isPropsForAnchorElement(props)) {
    return <a {...props} />;
  } else {
    return <button {...props} />;
  }
}

export default LinkOrButton
