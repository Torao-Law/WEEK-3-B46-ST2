import React, { Component } from "react";

export default class GuestGreeting extends Component {
  componentWillUnmount() {
    console.log("Guest Greeting Component Will Unmount");
  }

  render() {
    return (
      <div className="text-center h1 bg-secondary text-light py-5">
        Please Login !
      </div>
    );
  }
}