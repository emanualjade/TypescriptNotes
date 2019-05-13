import React, { Component, ReactNode } from "react";
import withTheme, { WithThemeProps } from "./withTheme";

interface Props extends WithThemeProps {
  children: ReactNode;
}

class MyButton extends Component<Props> {
  public render() {
    // Render an the element using the theme and other props.
    return (
      <button style={{ 
        color: "#fff",
        size: "16px",
        background: this.props.primaryColor,
      }}>
        {this.props.children}
      </button>
    );
  }

  private someInternalMethod() {
    // The theme values are also available as props here.
  }
}

export default withTheme(MyButton);
