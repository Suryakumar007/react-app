import React from "react";
import ReactDOM from "react-dom";

function Demo(props) {
  console.log(props.isLoading);

  return (
    <div>
      {props.text === true ? (
        <h2>Loading....</h2>
      ) : (
        <h2>LOaded Successfully</h2>
      )}
    </div>
  );
}

export default Demo;
