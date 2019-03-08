import React, { Component } from "react";
import { connect } from "react-redux";
class Form extends Component {
  constructor(props) {
    super(props);
    this.textRef = React.createRef();
    this.areaRef = React.createRef();
  }
  handleSubmit = e => {
    e.preventDefault();

    const obj = {
      title: this.textRef.current.value,
      text: this.areaRef.current.value,
      id: new Date(),
      isEditable: false
    };
    // const getData = (val1, val2) => {
    //   this.obj.title = val1;
    //   this.obj.text = val2;
    // };
    this.props.dispatch({
      type: "POST_DATA",
      data: obj
      // getData: getData
    });
    this.textRef.current.value = "";
    this.areaRef.current.value = "";
  };

  render() {
    return (
      <div>
        <h3>create a post</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.textRef} required />
          <br /> <br />{" "}
          <textarea
            cols="20"
            rows="5"
            style={{ resize: "none" }}
            ref={this.areaRef}
            required
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default connect()(Form);
