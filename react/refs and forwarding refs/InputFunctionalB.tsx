import React from "react";

const InputFunctionalB: React.FC = () => {
  const inputEl = React.createRef<HTMLInputElement>()

  const onButtonClick = () => {
    if (!inputEl || !inputEl.current) {
      return;
    }
    inputEl.current.focus();
  };

  return (
    <>
      <h3>InputFunctionalB</h3>
      <ul>
        <li>Functional component</li>
        <li>React.createRef</li>
      </ul>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
};

export default InputFunctionalB;