type Props1 = { foo: string };
type Props2 = { bar: string };

function MyComponent(props: Props1): JSX.Element;
function MyComponent(props: Props2): JSX.Element;
function MyComponent(props: Props1 | Props2) {
  if ('foo' in props) {
    // props.bar // error
    return <div>{props.foo}</div>;
  } else {
    // props.foo // error
    return <div>{props.bar}</div>;
  }
}
const UsageComponent: React.FC = () => (
  <div>
    <MyComponent foo="foo" />
    <MyComponent bar="bar" />
    {/* <MyComponent foo="foo" bar="bar"/> // invalid */}
  </div>
);
