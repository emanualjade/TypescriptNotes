import React, { useImperativeHandle, useRef } from "react";

interface IXProps {
  color: string;
}
type InputAndProps = React.HTMLProps<HTMLInputElement> & IXProps;

export interface ForwardInput {
  focusTheInput(): void;
}

const ForwardInput = React.forwardRef(
  ({ color, ...rest }: InputAndProps, ref: React.Ref<ForwardInput>) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(ref, () => {
      return {
        focusTheInput() {
          if (inputRef && inputRef.current) {
            console.log('focusing the input')
            return inputRef.current.focus();
          }
        }
      };
    });

    return (
      <div>
        <input
          ref={inputRef}
          style={{ border: `1px solid ${color}` }}
          {...rest}
        />
      </div>
    );
  }
);

const InputForwardRefImperitiveHandle = () => {
  const childRef = React.useRef<ForwardInput>(null);
  const handleClick = () => {
    console.log(childRef)
    if (!childRef || !childRef.current) {
      return;
    }
    childRef.current.focusTheInput();
  };

  return (
    <>
      <h3>Input forward ref</h3>
      <ForwardInput ref={childRef} name="hello" color="blue" />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
};

export default InputForwardRefImperitiveHandle;
