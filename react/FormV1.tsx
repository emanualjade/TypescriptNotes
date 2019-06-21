import React from "react";

interface IState {
  myName: string;
  myApproval: boolean;
  myReason: string;
  myNotes: string;
  myPreference: string;
}

class Form extends React.Component<{}, IState> {
  state = {
    myName: "",
    myApproval: false,
    myReason: "",
    myNotes: "",
    myPreference: "Radio B"
  };

  // This Works and is in the cheatsheet docs
  // onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  //   this.setState({text: e.currentTarget.value})
  // }

  // This also works and is in the cheatsheet docs as alternative
  // typing on RIGHT hand side of =
  // onChange = (e: React.FormEvent<HTMLInputElement>): void => {
  //   this.setState({ text: e.currentTarget.value });
  // };

  // This also works and had come from the packtPub Book
  // onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //   this.setState({ text: e.currentTarget.value });
  // };
  
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const key = target.name;
    
    // OPTION A - ignore
    // for dynamic key value with setState
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26635
    // @ts-ignore
    this.setState({ [key]: value });
    
    // OPTION B - any
    // use this interface - place it above and get rid of the other IState
    // interface IState {
    //   [key: string]: any; // or the type of your input
    // }

    // OPTION  - cast
    // this.setState({
    //   [key]: value
    // } as Pick<IState, keyof IState>)

  };

  handleReasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ myReason: e.currentTarget.value });
  };

  handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ myNotes: e.currentTarget.value });
  };

  render() {
    return (
      <form>
        <input
          name="myName"
          type="text"
          onChange={this.handleInputChange}
          value={this.state.myName}
        />
        <input
          name="myApproval"
          type="checkbox"
          onChange={this.handleInputChange}
          checked={this.state.myApproval}
        />
        <select value={this.state.myReason} onChange={this.handleReasonChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>

        <textarea
          value={this.state.myNotes}
          onChange={this.handleNotesChange}
        />
        <div>
          <label>
            Radio A
            <input
              name="myPreference"
              type="radio"
              checked={this.state.myPreference === "Radio A"}
              value="Radio A"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Radio B
            <input
              name="myPreference"
              type="radio"
              checked={this.state.myPreference === "Radio B"}
              value="Radio B"
              onChange={this.handleInputChange}
            />
          </label>
        </div>
      </form>
    );
  }
}

export default Form;
