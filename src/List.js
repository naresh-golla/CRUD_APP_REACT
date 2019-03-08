import React, { Component } from "react";
import { connect } from "react-redux";
class List extends Component {
  render() {
    const arr = this.props.posts.data;
    const iterating = arr.map(k => {
      return (
        <div
          key={k.id}
          style={{
            padding: "10px",
            width: "50%",
            boxShadow: "0px 2px 1px 1px rgba(170, 170, 170, 0.64)"
          }}
        >
          <p>{k.title}</p>
          <p>{k.text}</p>
          <button
            onClick={() => {
              this.props.dispatch({
                type: "DELETE_POST",
                id: k.id
              });
            }}
          >
            delete
          </button>
          <button
            onClick={() => {
              console.log(this.props);
              this.props.dispatch({
                type: "EDIT_POST",
                id: k.id
              });
            }}
          >
            edit
          </button>
        </div>
      );
    });
    return (
      <div>
        <h3>All posts</h3>
        {iterating}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state
  };
};
export default connect(mapStateToProps)(List);
