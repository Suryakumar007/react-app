import React from "react";
import ReactDOM from "react-dom";

function JokeComponent(props) {
  return (
    <div>
      <h3>Man : {props.question}</h3>
      <h2>Visitor:{props.answer}</h2>
    </div>
  );
}

export default JokeComponent;
