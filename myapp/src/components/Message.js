import React from "react";
import { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Please Subscribe",
    };
  }

  onMessageChange = () => {
    this.setState({
      msg: "Thanks for Subscribing",
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <button onClick={() => this.onMessageChange()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
