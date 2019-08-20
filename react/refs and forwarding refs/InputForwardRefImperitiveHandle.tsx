import React, { useImperativeHandle, useRef, useState } from "react";

interface IXProps {
  color: string;
}
type InputAndProps = React.HTMLProps<HTMLInputElement> & IXProps;

export interface ForwardInput {
  focusTheInput(): void;
  getValue(): void;
}

const ForwardInput = React.forwardRef(
  ({ color, ...rest }: InputAndProps, ref: React.Ref<ForwardInput>) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [value, setValue] = useState('')

    useImperativeHandle(ref, () => {
      return {
        focusTheInput() {
          if (inputRef && inputRef.current) {
            console.log('focusing the input')
            return inputRef.current.focus();
          }
        },
        getValue() {
          console.log(`the value is ${value}`)
        }
      };
    });

    return (
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          ref={inputRef}
          style={{ border: `1px solid ${color}` }}
          {...rest}
        />
      </div>
    );
  }
);

const InputForwardRefUseImperitiveHandle = () => {
  const childRef = React.useRef<ForwardInput>(null);
  const handleClick = () => {
    console.log(childRef)
    if (!childRef || !childRef.current) {
      return;
    }
    childRef.current.focusTheInput();
    childRef.current.getValue();
  };

  return (
    <>
      <h3>Input forward ref</h3>
      <ForwardInput ref={childRef} name="hello" color="blue" />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
};

export default InputForwardRefUseImperitiveHandle;
