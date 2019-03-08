import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Form />
        <List />
      </div>
    );
  }
}
export default App;
