import React from "react";

class InputUi extends React.Component {
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
        <input ref={this.inputEl} />
      </>
    );
  }
}

class InputClassB extends React.Component {
  textInput = React.createRef<InputUi>();

  handleButtonClick = () => {
    if (!this.textInput || !this.textInput.current) {
      return;
    }
    // access the instance and call methods directly
    this.textInput.current.focusInput();
    // access the childs own refs via the instance
    console.log(this.textInput.current.inputEl.current)
  };

  render() {
    return (
      <>
        <h3>InputClassB</h3>
        <p>Getting the instance of a component as ref</p>
        <ul>
          <li>Class component</li>
          <li>React.createRef</li>
          <li>Nested component</li>
          <li>Get child instance as ref value</li>
        </ul>
        <InputUi ref={this.textInput} />
        <button onClick={this.handleButtonClick}>Focus the input</button>
      </>
    );
  }
}

export default InputClassB;
