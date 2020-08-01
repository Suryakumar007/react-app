import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./components/Welcome";
import Welcome from "./components/Welcome";
import "./components/Greet";
import Greet from "./components/Greet";
import "./components/Message";
import Message from "./components/Message";
import "./components/Counter";
import Counter from "./components/Counter";
import "./components/FunctionClick";
import FunctionClick from "./components/FunctionClick";
import "./components/EventBind";
import EventBind from "./components/EventBind";
import "./components/ParentComponent";
import ParentComponent from "./components/ParentComponent";
import "./components/ListRendering";
import ListRendering from "./components/ListRendering";

ReactDOM.render(
  <React.StrictMode>
    <ListRendering />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
