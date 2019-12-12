// https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/ADVANCED.md

// Button props
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  element?: React.ElementType<any>
};

// Anchor props
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  element: "a"
};

// Input/output options
type Overload = {
  (props: ButtonProps): JSX.Element;
  (props: AnchorProps): JSX.Element;
};

// Component
const Button: Overload = ({element: Element = "button", ...rest}: ButtonProps | AnchorProps) => {
  return <Element {...rest} />
};

// Usage
function App() {
  return (
    <>
      {/* 😎 All good */}
      <Button element="a" target="_blank" href="https://www.google.com">
        Test
      </Button>
      {/* 😭 Error, `disabled` doesnt exist on anchor element */}
      <Button element="a" disabled href="x">
        Test
      </Button>
    </>
  );
}