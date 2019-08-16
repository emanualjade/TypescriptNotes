import React from "react";

class InputClassA extends React.Component {
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
        <h3>InputClassA</h3>
        <ul>
          <li>Class component</li>
          <li>React.createRef</li>
        </ul>
        <input ref={this.inputEl} />
        <button onClick={this.focusInput}>Focus the input</button>
      </>
    );
  }
}

export default InputClassA;
