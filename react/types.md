# Function compontents
```js
  interface Props {...}
  const Paragraph: React.FunctionComponent<Props> = ({children}) => <p>{children}</p>
```

# Class Components
```js
  interface Props {...}
  interface State {...}
  class SomeComponent extends React.Component<Props, State> {}
  // OR
  class SomeComponent extends React.PureComponent<Props, State> {}
```

# Any React Component
```js
  interface Props {}
  let anyComponent: React.ComponentType<Props> = ...
```

# DOM Events
```js
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {...}
  const Button = () => <button onClick={clickHandler}>Click me</button>
```

```js
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {...}
  const Form = () => <form onSubmit={submitHandler}>...</form>
```

If React doesn't have an event type for some event at the moment (e.g. the event is still in experimental mode), we can use the React.SyntheticEvent type to describe it like this:

```js
  const inputHandler = (e: React.SyntheticEvent) => {
    e.target
  }
  const Form = () => (
    <form onSubmit={inputHandler}>
      <input type="text" onInput={inputHandler} />
    </form>
  )
```

Other common event interfaces

* ChangeEvent
* FocusEvent
* FormEvent
* FocusEvent
* KeyboardEvent
* MouseEvent
* TouchEvent
* DragEvent
* PointerEvent
* AnimationEvent
* TransitionEvent
* ClipboardEvent
* SyntheticEvent
