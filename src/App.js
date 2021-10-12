import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTodo: '',
      todoList: [],
    }
  }

  changeTodo = (e) => {
    this.setState({ currentTodo: e.target.value });
  }

  addTodo = () => {
    this.setState({ todoList: [...this.state.todoList, this.state.currentTodo] });
    this.setState({ currentTodo: '' });
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <label>Action: </label>
        <input type="text" value={this.state.currentTodo} onChange={this.changeTodo} />
        <button type="button" onClick={this.addTodo}>Add</button>
        <ul>
          {
            this.state.todoList.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              );
            })
          }
        </ul>
      </div>
    );
  }

}

export default App;
