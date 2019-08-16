import React, { useRef } from "react";

const InputFunctionalA: React.FC = () => {
  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    if (!inputEl || !inputEl.current) {
      return;
    }
    inputEl.current.focus();
  };

  return (
    <>
      <h3>InputFunctionalA</h3>
      <ul>
        <li>Functional component</li>
        <li>useRef</li>
      </ul>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
};

export default InputFunctionalA;
