import React from "react";

interface IinputProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

const CustomTextInput: React.FC<IinputProps> = (props: IinputProps) => {
  return (
    <>
      <input ref={props.inputRef} />
    </>
  );
};

class InputPassRefAsPropA extends React.Component {
  inputElement = React.createRef<HTMLInputElement>();
  onButtonClick = () => {
    if (!this.inputElement || !this.inputElement.current) {
      return;
    }
    this.inputElement.current.focus();
  };
  render() {
    return (
      <>
        <h3>Pass ref as a prop</h3>
        <p>Most useful for react 16.2 and less</p>
        <ul>
          <li>Most useful for react 16.2 and less</li>
          <li>Useful in that you can prop drill through many layers</li>
          <li>Great for when the child component has multiple inputs and forwardRef fails you</li>
        </ul>
        <CustomTextInput inputRef={this.inputElement} />
        <button onClick={this.onButtonClick}>Focus the input</button>
      </>
    );
  }
}

export default InputPassRefAsPropA