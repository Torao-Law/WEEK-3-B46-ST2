import React, { Component } from "react";

export default class Welcome extends Component {
  componentDidMount() {
    console.log("Welcome Component Did Mount");
  }

  componentWillUnmount() {
    console.log("Welcome Component  Will Unmount");
  }

  render() {
    return (
      <div className="vh-100 bg-warning d-flex justify-content-center align-items-center h1 mb-0">
        Welcome
      </div>
    );
  }
}