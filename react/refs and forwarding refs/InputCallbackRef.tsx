import React from 'react'

class InputCallbackRef extends React.Component {
  textInput: HTMLInputElement | null = null;
  
  setTextInputRef = (element: HTMLInputElement | null) => {
    this.textInput = element;
  };

  focusTextInput = () => {
    // Focus the text input using the raw DOM API
    if (this.textInput) this.textInput.focus();
  };

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <h3>Set ref using a callback</h3>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export default InputCallbackRef