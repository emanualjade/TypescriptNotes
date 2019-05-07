import React, { useState } from 'react'

/// REACT SELECT COMPONENT USING GENERIC TYPES
type OptionValue = string | number;

type Option<T extends OptionValue> = {
  value: T;
  label: string;
};

type Props<T extends OptionValue> = {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
};

function Select<T extends OptionValue>(props: Props<T>) {
  function handleOnChange(e: React.FormEvent<HTMLSelectElement>) {
    const { selectedIndex } = e.currentTarget;
    const selectedOption = props.options[selectedIndex];
    props.onChange(selectedOption.value);
  }
  return (
    <select value={props.value} onChange={handleOnChange}>
      {props.options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

function Form() {
  const targets = [
    { value: "es3", label: "ECMAScript 3" },
    { value: "es5", label: "ECMAScript 5" },
    { value: "es2015", label: "ECMAScript 2015" },
    { value: "es2016", label: "ECMAScript 2016" },
    { value: "es2017", label: "ECMAScript 2017" },
    { value: "es2018", label: "ECMAScript 2018" },
    { value: "es2019", label: "ECMAScript 2019" }
  ];

  const [target, setTarget] = useState("es2019");

  return (
    <Select
      options={targets}
      value={target}
      onChange={setTarget}
    />
  );
}
