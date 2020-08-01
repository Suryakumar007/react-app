import React from "react";
import "./components/TodoItem";
import TodoItem from "./components/TodoItem";
import tasks from "./components/todojson";
import Demo from "./Demo";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: tasks,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log("value changed" + id);
    console.log(id);

    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    const tasksdata = this.state.todos.map((item) => (
      <TodoItem key={item.id} todo={item} handleChange={this.handleChange} />
    ));

    return <div className="todo-list">{tasksdata}</div>;
  }
}

/*function logMessage() {
  console.log("Mouse Entered");
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }
  render() {
    return (
      <div>
        <Demo text={this.state.isLoading} />
      </div>
    );
  }
}*/

export default App;
