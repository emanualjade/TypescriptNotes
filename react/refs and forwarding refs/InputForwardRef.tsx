import React from "react";

interface IXProps {
  color: string;
}
type InputAndProps = React.HTMLProps<HTMLInputElement> & IXProps;
const ForwardInput = React.forwardRef(
  ({ color, ...rest }: InputAndProps, ref: React.Ref<HTMLInputElement>) => (
    <div>
      <input ref={ref} style={{ border: `1px solid ${color}` }} {...rest} />
    </div>
  )
);

class InputForwardRef extends React.Component {
  inputEl = React.createRef<HTMLInputElement>();
  focusInput = () => {
    if (!this.inputEl || !this.inputEl.current) {
      return;
    }
    this.inputEl.current.focus();
  };
  render() {
    return (
      <>
        <h3>Input forward ref</h3>
        <ForwardInput name="hello" color="blue" ref={this.inputEl} />
        <button onClick={this.focusInput}>Focus the input</button>
      </>
    );
  }
}

export default InputForwardRef;
