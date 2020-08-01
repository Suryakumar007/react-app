import React from "react";
import ReactDOM from "react-dom";
import "./todostyle.css";

function checkMessage() {
  console.log("Checkbox status changed");
}

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "grey",
    textDecoration: "line-through",
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChange(props.todo.id)}
      />
      <p style={props.todo.completed ? completedStyle : null}>
        {props.todo.text}
      </p>
    </div>
  );
}

export default TodoItem;
