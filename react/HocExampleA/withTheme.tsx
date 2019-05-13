// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/ADVANCED.md
import React from "react";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type Optionalize<T extends K, K> = Omit<T, keyof K>;

export interface WithThemeProps {
  primaryColor: string;
}

export default function withTheme<T extends WithThemeProps = WithThemeProps>(
  WrappedComponent: React.ComponentType<T>
) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  return class ComponentWithTheme extends React.Component<
    Optionalize<T, WithThemeProps>
  > {
    public static displayName = `withPages(${displayName})`;

    public render() {
      // Fetch the props you want inject. This could be done with context instead.
      const themeProps = { primaryColor: "blue" };

      // this.props comes afterwards so the can override the default ones.
      return <WrappedComponent {...themeProps} {...this.props as T} />;
    }
  };
}
