import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("child 1")}>Click Me</button>
    </div>
  );
}

export default ChildComponent;
